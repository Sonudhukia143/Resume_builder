import express from 'express';
import cors from 'cors';
import AuthorizeRouter from './routes/Authorization.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize database


// Routes
AuthorizeRouter(app);
app.get("/api/test", (req,res) => {
    return res.status(200).json({message: "API is working"});
});

// Error handling

// Not Found Route
app.use((req,res) => {
    return res.status(404).json({message: "Route Not Found"});
});

// Start server
async function start() {
  try {

    // Intialize database connection
    console.log('Database initialized');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

start();

// Graceful shutdown
// process.on('SIGTERM', async () => {
//   console.log('SIGTERM received, shutting down gracefully');
//   await db.close();
//   process.exit(0);
// });