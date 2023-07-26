import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import catRoutes from "./routes/cats.js";

const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a cat clicker app");
});

app.use("/cat", catRoutes);

const PORT = process.env.PORT || 8050;
const DATABASE_URL = process.env.CONNECTION_URL;
mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
