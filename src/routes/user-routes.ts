// userRoutes.ts
import express from 'express';
import * as UserController from '../controllers/user-controller';

const router = express.Router();

router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);


export default router;
