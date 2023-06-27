import { Request, Response } from "express";
import UsersHandler from "../handlers/users.handler";

export default class UsersController {
  static async getUsers(req: Request, res: Response) {
    const result = await UsersHandler.getUsers();
    res.status(result.status).send(result.data);
  }

}
