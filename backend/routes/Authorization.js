import { Login, SignIn } from '../services/Authorization.js';

export default function AuthorizeRouter(app) {
    app.post("/api/login", async (req, res) => {
       if (req?.body === undefined || !req?.body) return res.status(404).json({ message: "Missing Credentials" });
        const { email, password } = req?.body;
        if (!email || !password) return res.status(404).json({ message: "Missing Credentials" });

        const data = await Login(email, password);

        return res.status(data.status).json({ message: data.message });
    });

    app.post("/api/signup", async (req, res) => {
        if (req?.body === undefined || !req?.body) return res.status(404).json({ message: "Missing Credentials" });
        const { email, password, username } = req?.body;
        if (!email || !password, !username) return res.status(404).json({ message: "Missing Credentials" });

        const data = await SignIn(username,email, password);

        return res.status(data.status).json({ message: data.message });
    });

    return app;
}

