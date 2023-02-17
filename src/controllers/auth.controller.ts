import { Request, Response, NextFunction } from "express";
import authServices from "../services/auth.services";

export const login = async (req: Request, res: Response) => {
  try {
    const result = await authServices.auth(req.body);
    if (result) {
      const token = authServices.getToken(result);
      console.log(token);
    }
    console.log(result);
    

    res.json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
};