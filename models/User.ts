import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      required: [true, "Please provide a name."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
