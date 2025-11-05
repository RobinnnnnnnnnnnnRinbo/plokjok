import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import debug from 'debug';
import dotenv from 'dotenv';

import aj from './lib/arcjet.js';

import { supabase, testConnection } from './database/db.js'

import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js';
import ordersRoute from './routes/ordersRoute.js';
import cartRoute from './routes/cartRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsDebug = debug('app:cors');
const connectDBDebug = debug('database:connection');

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// app.use(async (req, res, next) => {
//   try {
//     const decision = await aj.protect(req, { request : 1})
//     if (decision.isDenied()) {
//       if (decision.reason.isRateLimit()) {
//         return res.status(429).json({ error: "Too many requests" });

//       }
//       if (decision.reason.isBot()){
//         return res.status(403).json({ error: "Access denied for bots" });
//       }
//       return res.status(403).json({ error: "Access denied" })
//     }
//     if ((await decision).results.some(r => r.reason.isBot() && r.reason.isSpoofed())){
//       return res.status(403).json({ error: "Access denied for spoofed bots" });
//     }
//     next();
//   }catch (error) {
//     console.error("Arcjet protection error:", error);
//     return next(error);
//   }
// });

const connectDB = async () => {
  try {
    await testConnection()
    connectDBDebug("Supabase connected successfully")
  } catch (error) {
    connectDBDebug("Supabase connection error:", error)
    process.exit(1)
  }
}

// Initialize connection
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the PlokJok API');
});
app.use('/api/products', productRoute);
app.use('/api/users', userRoute);
app.use('/api/orders', ordersRoute);
app.use('/api/carts', cartRoute);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
  corsDebug("CORS enabled for all origins");
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});