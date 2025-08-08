import express from "express";
import cors from "cors";
import helmet from "helmet";
import aj from "./lib/arcjet.js";
import morgan from "morgan";
import productRoute from "./routes/productRoute.js";
import { pool } from "./database/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res
          .status(429)
          .json({ message: "Rate limit exceeded. Try again later." });
      }
      if (decision.reason.isBot()) {
        return res.status(403).json({ message: "Access denied for bots." });
      }
      return res.status(403).json({ message: "Access denied." });
    }
    if (
      decision.results.some(
        (result) => result.reason.isBot() && result.reason.isSpoofed()
      )
    ) {
      return res.status(403).json({ message: "Spoof bot detected" });
    }
    next();
  } catch (error) {
    console.error("Arcjet protection error:", error);
    return next(error);
  }
});

app.use("/api/products", productRoute);

const connectDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        product_id SERIAL PRIMARY KEY,
        product_name VARCHAR(100) NOT NULL,
        description TEXT,
        stock INT NOT NULL,
        category VARCHAR(50),
        price NUMERIC(10, 2) NOT NULL,
        img_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(`Failed to initialize database: ${error.message}`);
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

connectDB();

// Routes

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("CORS enabled for all origins");
});
