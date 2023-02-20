import { Prisma } from "@prisma/client";
import { loginPick, userPick } from "../utils/format.server";
import { prisma } from "../utils/prisma.server";
import bcrypt from "bcryptjs";
// import * as bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { generateJWT } from "../helpers/jwt";

dotenv.config();
const secret = process.env.SECRET;

export class authServices {
  static async auth(data: loginPick) {
    try {
      const { email, password } = data;
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          userId: true,
          email: true,
          password: true,
          firstName: true,
        },
      });
      if (!user) return false;
      const verifyPassword = await bcrypt.compare(password, user.password);
      const { userId, firstName } = user;
      const token = await generateJWT(userId, firstName);
      // console.log(token)
      if (verifyPassword) return { user, token };

      return verifyPassword;
    } catch (error) {
      throw error;
    }
  }
  static async create(data: userPick) {
    try {
      const {
        userId,
        firstName,
        email,
        password,
        lastName,
        location,
        occupation,
        profileImg,
      } = data;
      let user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (!user) {
        const salt = bcrypt.genSaltSync();
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = await prisma.user.create({
          data: {
            lastName,
            firstName,
            location,
            occupation,
            profileImg,
            email,
            password: passwordHash,
          },
          select: {
            firstName: true,
            userId: true,
            // password: true,
            location: true,
            lastName: true,
            occupation: true,
            profileImg: true,
            email: true,
          },
        });
        // const { userId } = newUser;
        const token = await generateJWT(userId, firstName);

        return { ...newUser, token };
      }
      return null;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
export default authServices;
