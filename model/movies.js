import mongoose, { Schema, model, models } from "mongoose";


const movieSchema = new Schema({
  name: String,
  body: String,
  creator: String,
  image: String,
  comments: { type: [String], default: [] },
  likes: { type: [String], default: [] },
  createdAt: { type: Date, default: new Date() },
});

const Tape = models.tape || model("tape", movieSchema);

export default Tape;
