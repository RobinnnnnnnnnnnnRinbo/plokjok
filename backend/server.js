import express from "express";
import morgan from "morgan";
import productRoute from "./routes/productRoute.js";
import { pool } from "./database/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Manual CORS middleware (more reliable)
app.use((req, res, next) => {
  const origin = req.headers.origin;

  // Allow all origins for development
  res.header("Access-Control-Allow-Origin", origin || "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", "true");

  console.log(`${req.method} ${req.path} - Origin: ${origin}`);
  console.log("CORS headers set for:", origin);

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
    return;
  }

  next();
});

app.use(morgan("combined"));
app.use(express.json());

const connectDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        product_id SERIAL PRIMARY KEY,
        product_name VARCHAR(100) NOT NULL,
        description TEXT,
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
app.use("/api/products", productRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("CORS enabled for all origins");
});
