import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    batch: {
        type: String,
        required: true,
    },
    clubs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Club" }],
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

const User = mongoose.model("User", userSchema);
export default User;
