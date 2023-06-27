import express from 'express';
import UserController from '../controllers/users.controller'

const router = express.Router();

router.get('/', UserController.getUsers);

export default router;
