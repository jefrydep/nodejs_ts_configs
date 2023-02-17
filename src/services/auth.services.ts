// import { Prisma } from "@prisma/client";
import { loginPick, userPick } from "../utils/format.server";
import { prisma } from "../utils/prisma.server";
import bcrypt from "bcryptjs";
// import * as bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
const secret = process.env.SECRET;

export class authServices {
  static async auth(data: loginPick) {
    try {
      const { email,password } = data;
      const user = await prisma.user.findUnique({ where: { email },select:{
        email:true,
        userName:true,
        password:true
      } });
      if (!user) return false;
      const verifyPassword = await bcrypt.compare(password, user.password);
      if (verifyPassword) return user;

      return verifyPassword;
    } catch (error) {
      throw error;
    }
  }

  static getToken(data: userPick) {
    try {
      if (secret) {
        const token = jwt.sign(data, secret, { algorithm: "HS512" });
        return token;
      }
    } catch (error) {
      throw error;
    }
  }
}
export default authServices;