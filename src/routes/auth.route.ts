import express, { Router } from "express";
import { Register } from "../controllers/auth.controller";
// import { login } from "../controllers/auth.controller";
 
const app = express();
const autRouter = Router();
// autRouter.post("/auth", login);
autRouter.post("/auth/register",Register);

export {autRouter}