import express from "express";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const PORT = 5000;
const app = express();

dbConnect();

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use("/users", userRoutes);

app.get("/", (req, res) => {
	res.send("Helloooooowww");
});

app.listen(PORT, console.log(`server berjalan di port: ${PORT}`));
