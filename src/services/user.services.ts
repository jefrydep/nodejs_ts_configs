import { User } from "@prisma/client";
import { prisma } from "../utils/prisma.server";

export class userServices {

static async getUserBy(userId:User["userId"]){
    try {
        const result = await prisma.user.findUnique({
            where:{userId},
            select:{
                userId:true,
                profileImg:true,
            }
        });
        return result;
    } catch (error) {
        throw error;
        
    }

}

}