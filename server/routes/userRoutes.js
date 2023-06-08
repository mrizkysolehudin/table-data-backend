import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

// get all
router.get("/", async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// get one
router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const user = await User.findById(id);
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// update
router.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const user = await User.findByIdAndUpdate(id, {
			firstName: req?.body?.firstName,
			lastName: req?.body?.lastName,
			email: req?.body?.email,
			role: req?.body?.role,
			userStatus: req?.body?.userStatus,
		});

		if (!user) {
			return res
				.status(404)
				.json({ message: `id: ${id} tidak ditemukan.` });
		}

		const updatedProduct = await User.findById(id);
		res.status(200).json(updatedProduct);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// delete
router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByIdAndDelete(id);

		if (!user) {
			return res
				.status(404)
				.json({ message: `id: ${id} tidak ditemukan.` });
		}

		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

export default router;
