import express, { Router } from "express";
import { login } from "../controllers/auth.controller";
 
const app = express();
const autRouter = Router();
autRouter.post("/auth", login);

export {autRouter}