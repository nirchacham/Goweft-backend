import { Request, Response } from "express";
import PostsHandler from "../handlers/posts.handler";

export default class PostsController {
  static async getUserPosts(req: Request, res: Response) {
    const userId = req.query.userId as string;
    const page = req.query.page as string;
    const limit = req.query.limit as string;

    const result = await PostsHandler.getUserPosts(userId,parseInt(page),parseInt(limit));
    res.status(result.status).send(result);
  }

  static async deleteUserPost(req:Request, res:Response) {
    const postId = req.query.postId as string;
    const result = await PostsHandler.deleteUserPost(postId);
    res.status(result.status).send(result.message);
  }

}
