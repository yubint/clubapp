import User from "../models/user.model.js";
import Club from "../models/club.model.js";

export const addClub = async (req, res) => {
    const clubName = req.body.clubName;
    const imageURL = req.body.imageURL;

    if (!clubName || !imageURL) {
        res.status(400).json({
            success: false,
            message: "clubName and imageURL required",
        });
        return;
    }

    const club = new Club({
        name: clubName,
        image: imageURL,
        president: req.userId,
    });

    try {
        club.save();
    } catch (error) {
        console.error(error.message);
        res.status(501).json({
            success: false,
            message: "Error Creating the Club",
        });
        return;
    }

    try {
        const user = await User.findById(req.userId);
        user.clubs = [...user.clubs, club._id];
        await User.findByIdAndUpdate(req.userId, user);

        res.status(201).json({
            success: true,
        });
    } catch (error) {
        console.error(error.message);
        res.status(501).json({
            success: false,
            message: "Error Updating the User",
        });
        return;
    }
};

export const joinClub = async (req, res) => {
    const clubId = req.body.clubId;
    try {
        const user = await User.findById(req.userId);

        if (user.clubs.includes(clubId)) {
            res.status(500).json({
                success: false,
                message: "Already Joined the Club",
            });
            return;
        }

        const club = Club.findById(clubId);
        if (!club) {
            res.status(404).json({
                success: false,
                message: "Club does not exist",
            });
        }

        user.clubs = [...user.clubs, clubId];
        await User.findByIdAndUpdate(req.userId, user);

        res.status(200).json({
            sucess: true,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            message: "Error Joining the Club",
        });
    }
};

export const leaveClub = async (req, res) => {
    const clubId = req.body.clubId;
    try {
        const user = await User.findById(req.userId);

        if (!user.clubs.includes(clubId)) {
            res.status(500).json({
                success: false,
                message: "Club not Joined yet",
            });
            return;
        }

        user.clubs = user.clubs.filter((club) => club != clubId);
        await User.findByIdAndUpdate(req.userId, user);

        res.status(200).json({
            sucess: true,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            message: "Error Leaving the Club",
        });
    }
};

export const changePresident = async (req, res) => {
    const clubId = req.body.clubId;
    const newPresidentEmail = req.body.email;
    if (!clubId || !newPresidentEmail) {
        res.status(400).json({
            success: false,
            message: "Please provide both clubId and an email",
        });
        return;
    }

    const newPresident = await User.findOne({ email: newPresidentEmail });

    if (!newPresident) {
        res.status(404).json({
            success: false,
            message: "Specified User cannot be found",
        });
        return;
    }

    if (!newPresident.clubs.includes(clubId)) {
        res.status(404).json({
            success: false,
            message: "Specified User is not in this Club",
        });
        return;
    }
    const club = await Club.findById(clubId);

    const user = await User.findById(req.userId);

    if (!user.isAdmin && club.president != user._id) {
        res.status(300).json({
            success: false,
            message: "Not authorized for this task",
        });
        return;
    }

    try {
        club.president = newPresident._id;
        await Club.findByIdAndUpdate(clubId, club);

        res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Could not Change the President",
        });
        return;
    }
};
