import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      required: [true, "Please provide a name."],
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

const User = mongoose.models.Task || mongoose.model("User", UserSchema);

export default User;
