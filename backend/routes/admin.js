import { Router } from "express";
import { addAdmin } from "../controllers/admin.js";

const adminRouter = Router();

adminRouter.post("/add", addAdmin);

export default adminRouter;
