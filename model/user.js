import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: new Date() },
});

const User = models.user || model("User", userSchema);

export default User;
