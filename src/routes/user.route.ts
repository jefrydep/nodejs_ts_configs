import { Router } from "express";
import { getAllUsers, getUserById, getUserFriends } from "../controllers/user.controller";

const userRouter  = Router();
userRouter.get("/:id",getUserById);
userRouter.get("/:id/friends",getUserFriends);
userRouter.get("/users/all",getAllUsers);
// userRouter.patch("/:id/:frindId")


export {userRouter}