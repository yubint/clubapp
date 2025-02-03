import { configDotenv } from "dotenv";
import express from "express";
import connectDB from "./db.js";
import { authenticate, isAdmin } from "./middleware.js";
import authenticateRouter from "./routes/authenticate.js";
import userRouter from "./routes/user.js";
import clubRouter from "./routes/club.js";
import adminRouter from "./routes/admin.js";

configDotenv();

const app = express();
app.use(express.json());

app.use("", authenticateRouter);
app.use("/user", userRouter);
app.use("/clubs", authenticate, clubRouter);
app.use("/admin", [authenticate, isAdmin], adminRouter);

app.get("/", (req, res) => {
    res.json("Welcome");
});

app.listen(8000, () => {
    connectDB();
    console.log("server started");
});
