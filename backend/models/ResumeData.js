import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    name: { type: String },
    profession: { type: String },
    details: {
        location: { type: String },
        contact: { type: String },
        gmail: { type: String },
        portfolio: { type: String },
        github: { type: String },
        linkedin: { type: String },
    },
    objective: { type: String },
    skills: {
        core: [{ type: String }],
        tools: [{ type: String }]
    },
    certificates: [
        {
            "issued by": { type: String },
            "name": { type: String }
        }
    ],
    languages: [
        { type: String }
    ],
    education: [
        {
            institute: { type: String },
            study: { type: String },
            field: { type: String },
            duration: { type: String },
            score: { type: String },
            website: { type: String }
        }
    ],
    projects: [
        {
            name: { type: String },
            description: { type: String },
            tech: { type: String },
            link: { type: String },
            duration: { type: String },
        }
    ]
});

const Resume = mongoose.model("Resume", resumeSchema);

export { Resume };