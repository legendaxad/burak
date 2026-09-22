import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => {
    console.log("MongoDB connected");
    const port = process.env.PORT || 3000;
    console.log(`Server is running on port ${port}`);
  })
  .catch((err) => {
    console.log("error:", err);
  });
