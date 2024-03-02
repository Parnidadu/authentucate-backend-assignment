// contactsRoutes.ts
import express from 'express';
import * as ContactsController from '../controllers/contacts-controller';

const router = express.Router();

router.post('/contacts', ContactsController.createContact);
router.get('/contacts', ContactsController.getAllContacts);
// Other contacts-related routes...

export default router;
