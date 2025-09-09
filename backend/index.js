import express from 'express';
import cors from 'cors';
import AuthorizeRouter from './routes/Authorization.js';
import dotenv from "dotenv";
import connectDB, { corsOptions } from './utils/connectDB.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
AuthorizeRouter(app);
app.get("/api/test", (req,res) => {
    return res.status(200).json({message: "API is working"});
});

// Not Found Route
app.use((req,res) => {
    return res.status(404).json({message: "Route Not Found"});
});

// Start server
async function start() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

start();