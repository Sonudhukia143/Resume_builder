import mongoose from "mongoose";

const devSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true
    },
    email: { 
        type: String, 
        unique: true, 
        required: true
    },
    password: { 
        type: String,
        required: true
    },
    resumeData: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resume"
    }
});

const Dev = mongoose.model("Dev", devSchema);

export { Dev };