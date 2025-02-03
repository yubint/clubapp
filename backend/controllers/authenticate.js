import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { isValidEmail } from "email-validator-dns-provider-rules";
import User from "../models/user.model.js";
import Club from "../models/club.model.js";

const { sign, decode, verify } = jwt;

export const register = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const batch = req.body.batch;

    if (!(email && password && batch)) {
        res.status(404).json({
            success: false,
            message: "Please Input all the Fields",
        });
        return;
    }

    const isValid = await isValidEmail(email);

    if (!isValid) {
        res.status(400).json({
            success: false,
            message: "Invalid Email",
        });
        return;
    }

    const emailCheckUser = await User.findOne({ email: email });

    if (emailCheckUser) {
        res.status(400).json({
            success: false,
            message: "User already exists",
        });
        return;
    }

    const hashed_password = await bcrypt.hash(password, 10);

    const clubs = await Club.find({});
    try {
        const user = new User({
            email: email,
            password: hashed_password,
            batch: batch,
        });

        user.save();

        const token = sign({ id: user._id }, process.env.ACCESS_TOKEN);
        const userWithoutPassword = await User.findById(user._id);
        console.log(userWithoutPassword);
        res.status(201).json({
            success: true,
            body: {
                ACCESS_TOKEN: token,
                user: userWithoutPassword,
                unjoinedClubs: clubs,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Issue Creating User",
        });
    }

    return;
};

export const login = async (req, res) => {
    const userEmail = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email: userEmail }).select("+password");

    if (!user) {
        res.status(403).json({
            success: false,
            message: "Wrong Email or Password",
        });
        return;
    }
    const isValidPassword = bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        res.status(403).json({
            success: false,
            message: "Wrong Email or Password",
        });
        return;
    }

    const clubs = await Club.find({});
    const token = sign({ id: user._id }, process.env.ACCESS_TOKEN);
    const userData = await User.findById(user._id);
    res.status(200).json({
        success: true,
        body: {
            ACCESS_TOKEN: token,
            user: userData,
            clubs: clubs,
        },
    });

    return;
};
