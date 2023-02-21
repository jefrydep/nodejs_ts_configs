import express, { Router } from "express";
import { check } from "express-validator/src/middlewares/validation-chain-builders";
import { Register, login } from "../controllers/auth.controller";
import { validateFields } from "../middleware/validateFields";
// import { login } from "../controllers/auth.controller";
 
const app = express();
const autRouter = Router();
autRouter.post("/auth",[
    check('email','El email es obligatorio').isEmail(),
    check('password','el password debe tener minimo 5 caracteres').isLength({min:5}),
    validateFields
], login);
autRouter.post("/auth/register",[
    check('firstName','tha name is required'),
    validateFields],Register);

export {autRouter}