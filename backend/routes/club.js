import { Router } from "express";
import {
    addClub,
    changePresident,
    joinClub,
    leaveClub,
} from "../controllers/club.js";
import { isAdmin } from "../middleware.js";

const clubRouter = Router();

clubRouter.post("/add", isAdmin, addClub);
clubRouter.post("/join", joinClub);
clubRouter.post("/leave", leaveClub);
clubRouter.post("/change-president", changePresident);

export default clubRouter;
