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
          email: true,
          password: true,
        },
      });
      if (!user) return false;
      const verifyPassword = await bcrypt.compare(password, user.password);
      if (verifyPassword) return user;

      return verifyPassword;
    } catch (error) {
      throw error;
    }
  }
  static async create(data: userPick) {
    try {

      const { userName, email, password } = data;
      let user = await prisma.user.findUnique({where:{
        email
      }})
      
      const salt = bcrypt.genSaltSync();
      const passwordHash = await bcrypt.hash(password, salt);
      // await user.save
      const token = await generateJWT(user?.userId,user?.userName)

      const newUser = await prisma.user.create({
        data: {
          // ...data,
          
          userName,
          email,
          password: passwordHash,
        },
         
       
      });

      return newUser;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // static getToken(data: userPick) {
    
  //   try {
  //     if (secret) {
  //       const token = jwt.sign(data, secret, { algorithm: "HS512" });
  //       return token;
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}
export default authServices;
