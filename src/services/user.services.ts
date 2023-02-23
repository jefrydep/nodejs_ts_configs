import { User } from "@prisma/client";
import { prisma } from "../utils/prisma.server";

export class userServices {
  static async getUserBy(userId: User["userId"]) {
    try {
      const result = await prisma.user.findUnique({
        where: { userId },
        select: {
          userId: true,
          firstName: true,
          lastName: true,
          occupation: true,
          location: true,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllUsers() {
    try {
      const result = await prisma.user.findMany({
        select:{
          firstName:true,
          lastName:true,
          location:true,
          occupation:true,
          profileImg:true,
          userId:true,
          
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getUserFriendBy(userId: User["userId"]) {
    try {
      const result = await prisma.user.findUnique({
        where: { userId },
        select: {
          friend: true,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
