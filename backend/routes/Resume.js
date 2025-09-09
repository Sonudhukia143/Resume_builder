import { Resume } from '../services/Resume.js';

export default function AuthorizeRouter(app) {
    app.post("/api/resume", async (req, res) => {
        Resume(req.body);
    });


    return app;
}

