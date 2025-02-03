import User from "../models/user.model.js";
import Club from "../models/club.model.js";

export const getUser = async (req, res) => {
    const userId = req.userId;

    const user = await User.findById(userId);

    const clubs = await Club.find({});

    res.status(200).json({
        success: true,
        body: {
            user: user,
            clubs: clubs,
        },
    });

    return;
};
