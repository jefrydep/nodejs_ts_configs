import { Response, Request, NextFunction } from "express";
import { errorProp } from "../utils/format.server";

export const handleError = async (
  error: errorProp,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { status, message, errorContent } = error;
  console.log(error);
  res.status(status).json({ message, errorContent });
};