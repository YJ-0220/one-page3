import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import adminRoutes from "./routes/adminRoutes";
import articleRoutes from "./routes/articleRoutes";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use("/admin", adminRoutes);
app.use("/article", articleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
