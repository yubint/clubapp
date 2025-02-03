import User from "../models/user.model.js";

export const addAdmin = async (req, res) => {
    const newAdminEmail = req.body.email;
    try {
        const newAdmin = await User.findOne({ email: newAdminEmail });
        if (!newAdmin) {
            res.status(404).json({
                success: false,
                message: "Specified user does not exist",
            });
            return;
        }

        newAdmin.isAdmin = true;
        await User.findByIdAndUpdate(newAdmin._id, newAdmin);

        res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error assigning admin",
        });
        return;
    }
};
