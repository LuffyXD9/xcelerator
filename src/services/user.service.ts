
import { UserCreationAttributes } from "../types/user.types";
import { User } from "../models/user";

export class UserService {
  static async createUser(userData: UserCreationAttributes) {
    return await User.create(userData);
  }

  static async getUserById(id: number, throwError = false) {
    const user = await User.findByPk(id);
    if (throwError && !user) {
      throw new Error("User not found");
    }
  }

  static async getAllUsers() {
    return await User.findAll();
  }
}
