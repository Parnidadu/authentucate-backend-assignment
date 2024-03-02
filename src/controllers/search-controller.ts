// searchController.ts

import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const searchController = async (req: Request, res: Response) => {
  try {
    const { query } = req.params;

    // Search for users by name or phone number
    const userResults = await prisma.user.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { phoneNumber: { contains: query } },
        ],
      },
      select: {
        id: true,
        name: true,
        phoneNumber: true,
      },
    });

    // Search for contacts by name or phone number
    const contactResults = await prisma.contacts.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { phoneNumber: { contains: query } },
        ],
      },
      select: {
        id: true,
        name: true,
        phoneNumber: true,
      },
    });

    res.json({ userResults, contactResults });
  } catch (error) {
    console.error('Error in searchController:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};

export default searchController;
