import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		firstName: {
			required: [true, "First name is required"],
			type: String,
		},
		lastName: {
			required: [true, "Last name is required"],
			type: String,
		},
		email: {
			type: String,
			required: [true, "Email is required"],
		},
		role: {
			type: String,
			required: [true, "Role is required"],
		},
		favoriteColor: {
			type: String,
		},
		accountDate: {
			type: Date,
			default: Date.now,
		},
		image: {
			type: String,
		},
		userStatus: {
			type: Object,
			enum: [
				{ status: "Free", statusColor: "#0064FF" },
				{ status: "Busy", statusColor: "#F63F3F" },
				{ status: "Working", statusColor: "#404D61" },
				{ status: "On Vacation", statusColor: "#F9A348" },
			],
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);

export default User;
