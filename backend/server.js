/**
 * ROYCE DIGITAL SOLUTIONS — BACKEND API SERVER
 * 
 * Powered by Express & Firebase Admin SDK.
 * Created for seamless collaboration with the backend developer / AI model.
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import leadRoutes from './routes/leadRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

// Middleware
app.use(cors({
  origin: [CLIENT_URL, 'http://localhost:5173', 'http://127.0.0.1:3000'],
  credentials: true,
}));
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    service: 'Royce Digital Solutions Backend API',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Routes
app.use('/api/leads', leadRoutes);
app.use('/api/admin', adminRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found on Royce API server' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'An unexpected error occurred.',
  });
});

// Start listening
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Royce Digital Solutions Backend Server Running`);
  console.log(`📍 Port: http://localhost:${PORT}`);
  console.log(`🌐 Ready for frontend connections & backend model work`);
  console.log(`=======================================================`);
});

export default app;
