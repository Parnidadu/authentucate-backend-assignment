// contactsController.ts
import { Request, Response } from 'express';
import prisma from '../utils/database';

export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, phoneNumber, authorId } = req.body;
    const newContact = await prisma.contacts.create({
      data: { name, phoneNumber, authorId },
    });
    res.json(newContact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getAllContacts = async (req: Request, res: Response) => {
  try {
    const allContacts = await prisma.contacts.findMany();
    res.json(allContacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
