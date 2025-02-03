import jwt from "jsonwebtoken";
import User from "./models/user.model.js";

export const authenticate = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        res.status(401).send({
            success: "false",
            message: "Could not Authorize",
        });
        return;
    }

    try {
        const decodedToken = jwt.decode(token, process.env.ACCESS_TOKEN);
        req.userId = decodedToken.id;
    } catch (error) {
        res.status(401).send({
            success: "false",
            message: "Could not Authorize",
        });
    }
    next();
};

export const isAdmin = async (req, res, next) => {
    let user = await User.findById(req.userId);
    if (!user.isAdmin) {
        res.status(401).send({
            success: "false",
            message: "Could not Authorize",
        });
        return;
    }
    next();
};
