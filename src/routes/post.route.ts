import express, { Router } from "express";
import { createPost, showAllPosts, showUserPosts } from "../controllers/post.controller";
// import { check } from "express-validator/src/middlewares/validation-chain-builders";
// import { validateFields } from "../middleware/validateFields";
 
const app = express();
const postRouter = Router();
postRouter.post("/post",createPost);
postRouter.get("/post/showAll",showAllPosts);
postRouter.get("/post/:id",showUserPosts);
// postRouter.post("/auth/register",[
//     check('firstName','tha name is required'),
//     validateFields],Register);

export {postRouter}