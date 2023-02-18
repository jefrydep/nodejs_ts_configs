import { Request, Response, NextFunction } from "express";
import authServices from "../services/auth.services";
import { Prisma } from "@prisma/client";
import { generateJWT } from "../helpers/jwt";
export const Register = async (req: Request, res: Response) => {

  try {
    const result = await authServices.create(req.body);
    res.status(201).json(result);
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    if (error.code == "P2002") {
      res.status(400).json({ error: "user exist" });
    }
    if (error.code == "P2025") {
      res.status(400).json({ error: "not register" });
    } else {
      res.status(400).json({ error });
    }
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const result= await authServices.auth(req.body);
    // const {userId,userName}= result;
    console.log(result)
    // if (result) {
    //   const token = generateJWT(userId,userName)
    // }

    res.json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
};
