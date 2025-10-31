import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  static async createUser(req: Request, res: Response) {
    const user = await UserService.createUser(req.body);
    res.status(201).json(user);
  }

  static async getUserById(req: Request, res: Response) {
    const user = await UserService.getUserById(Number(req.params.id));
    return user;
  }

  static async getAllUsers(req: Request, res: Response) {
    const users = await UserService.getAllUsers();
    res.json(users);
  }
}
