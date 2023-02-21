import { postPick } from "../utils/format.server";
import { Post, User, prisma } from "../utils/prisma.server";

export class PostServices {
  
  static async create(data: postPick & { userId: User["userId"] }) {
    try {
      const { createdAt, location, photo, postDescription, userId } =
        data;
      const newPost = await prisma.post.create({
        data: {
          location,
          photo,
          postDescription,
          createdAt,

          user: { connect: { userId: userId } },
        },
      });

      return newPost;
    } catch (error) {
      console.log(error)
      throw error;
    }
  }
    static async getAllPosts() {
      try {
        const result = await prisma.post.findMany({
          select: {
            location:true,
             postDescription:true,
             coment: true,
             user:{
              select:{
                firstName:true,
                lastName:true,
                location:true,
                occupation:true,
                profileImg:true,
                comment:true
              }
             }
          },
        });
        return result;
      } catch (error) {
        throw error;
      }
    }
    static async getUserPosts (id:User['userId']){

    // static async getUserPosts (id){
      try {
        const result = await prisma.user.findUnique({
          where:{},
          select:{
            // postDescription:true,
            location:true,
            createdAt:true,
            // photo:true,

            // location:true
          },
        
        })
        return result;
      } catch (err) {
        throw err;
      }
    }
    // static async get(id:Doctor["id"]) {
    //   try {
    //     const result = await prisma.doctor.findUnique({
    //       where: { id },
    //       select: {
    //         appointment: true,
    //         cieCod: true,
    //         user: {
    //           include: {
    //             profile: true,
    //           },
    //         },
    //       },
    //     });
    //     return result;
    //   } catch (error) {
    //     throw error;
    //   }
    // }

    // static async delete(id: Doctor["id"]) {
    //   try {
    //     const result = await prisma.doctor.delete({
    //       where: { id },
    //     });
    //     return result;
    //   } catch (error) {
    //     throw error;
    //   }
    // }

  //   static async update(
  //     id: Doctor["id"],
  //     cieCod: Doctor["cieCod"],
  //     medicalRelation: Doctor["medicalRelation"]
  //   ) {
  //     try {
  //       const result = await prisma.doctor.update({
  //         where: { id },
  //         data: {
  //           cieCod,
  //           medicalRelation,
  //         },
  //       });
  //       return result;
  //     } catch (error) {
  //       throw error;
  //     }
  //   }
}
