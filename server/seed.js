import mongoose from "mongoose";
import User from "./models/userModel.js";
import { dummyData } from "./utils/dummyData.js";
import dotenv from "dotenv";

dotenv.config();

const seed = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});

		await User.insertMany(dummyData);

		console.log("Data inserted successfully");
		mongoose.connection.close();
	} catch (error) {
		console.error(error);
		mongoose.connection.close();
	}
};

seed();
