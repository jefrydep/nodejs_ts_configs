import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { NextFunction, Request, Response } from "express";
import { userServices } from "../services/user.services";

export const getUserById = async (req:Request,res:Response,next: NextFunction)=>{
    try {
        const {id} = req.params;
        const convertId = parseInt(id);
    if (typeof convertId === "number" && convertId >= 0) {
      const result = await userServices.getUserBy(convertId);
      res.status(200).json(result);
    } else {
      next({
        status: 400,
        message: "Error, ingrese un Id válido",
        errorContent: "Error insert a valid Id",
      });
    }       
    } catch (error:PrismaClientKnownRequestError|any) {
        res.json({ error: "error" });
        
    }
}