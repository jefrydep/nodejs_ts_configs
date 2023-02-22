import { Router } from "express";
import { getUserById, getUserFriends } from "../controllers/user.controller";

const userRouter  = Router();
userRouter.get("/:id",getUserById);
userRouter.get("/:id/friends",getUserFriends);
// userRouter.patch("/:id/:frindId")


export {userRouter}