import express from 'express';
import PostsController from '../controllers/posts.controller'
import { validateUserQueries } from '../middlewares/validateUserQueries';
import { validateUserPost } from '../middlewares/validateUserPost';

const router = express.Router();

router.get('/',validateUserQueries, PostsController.getUserPosts);

router.delete('/delete',validateUserPost ,PostsController.deleteUserPost);

export default router;
