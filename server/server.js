import express from "express";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";

dotenv.config();

const PORT = 5000;
const app = express();

dbConnect();

app.use(express.json());

// routes
app.use("/users", userRoutes);

app.get("/", (req, res) => {
	res.send("Helloooooowww");
});

app.listen(PORT, console.log(`server berjalan di port: ${PORT}`));
