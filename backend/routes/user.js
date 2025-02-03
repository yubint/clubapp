import { Router } from "express";
import { getUser } from "../controllers/user.js";
import { authenticate } from "../middleware.js";

const userRouter = Router();

userRouter.get("/", authenticate, getUser);

export default userRouter;
