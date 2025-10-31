import express, { Request, Response, NextFunction } from "express";
import routes from "./routes";
import { testConnection } from "./models";

const app = express();

app.use(express.json());

// 🔗 Connect to database
testConnection();

// 🧩 Health check route
app.get("/health", (req: Request, res: Response) => {
  res.send("API is running...");
});

// 📍 API Routes
app.use("/api", routes);

// ❌ 404 Handler (if no route matched)
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// 💣 Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack
  });
});

// 🚀 Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
