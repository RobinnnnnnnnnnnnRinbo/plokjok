import express from "express";
import cors from "cors";
import helmet from "helmet";
import aj from "./lib/arcjet.js";
import morgan from "morgan";
import debug from "debug";

const corsDebug = debug("app:cors");
const connectDBDebug = debug("database:connect_database");

import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";
import { pool } from "./database/db.js";
import { createTables } from "./database/schema.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// app.use(async (req, res, next) => {
//   try {
//     const decision = await aj.protect(req, { requested: 1 });
//     if (decision.isDenied()) {
//       if (decision.reason.isRateLimit()) {
//         return res
//           .status(429)
//           .json({ message: "Rate limit exceeded. Try again later." });
//       }
//       if (decision.reason.isBot()) {
//         return res.status(403).json({ message: "Access denied for bots." });
//       }
//       return res.status(403).json({ message: "Access denied." });
//     }
//     if (
//       decision.results.some(
//         (result) => result.reason.isBot() && result.reason.isSpoofed()
//       )
//     ) {
//       return res.status(403).json({ message: "Spoof bot detected" });
//     }
//     next();
//   } catch (error) {
//     console.error("Arcjet protection error:", error);
//     return next(error);
//   }
// });

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

const connectDB = async () => {
  try {
    await createTables(pool);
    connectDBDebug("Database connected successfully");
  } catch (error) {
    connectDBDebug(`Failed to initialize database: ${error.message}`);
    connectDBDebug("Database connection failed:", error);
    process.exit(1);
  }
};

connectDB();

// Routes

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  corsDebug("CORS enabled for all origins");
});
