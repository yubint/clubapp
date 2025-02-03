import { Router } from "express";
import { login, register } from "../controllers/authenticate.js";

const authenticateRouter = Router();

authenticateRouter.post("/login", login);
authenticateRouter.post("/register", register);

export default authenticateRouter;
