// userController.ts
import { Request, Response } from 'express';
import prisma from '../utils/database';

interface Contact {
  name: string;
  phoneNumber: string;
  isSpam?: boolean;
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, phoneNumber, contacts }: { name: string; phoneNumber: string; contacts?: Contact[] } = req.body;
    const newUser = await prisma.user.create({
      data: { name, phoneNumber },
    });

    if (contacts && contacts.length > 0) {
      const contactsData = contacts.map((contact) => ({
        ...contact,
        authorId: newUser.id,
      }));

      await prisma.contacts.createMany({
        data: contactsData,
      });
    }

    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
