import { Schema, model } from "mongoose";

export const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    speedEntries: [{
      type: Schema.Types.ObjectId,
      ref: 'SpeedEntry'
    }],
  },
  {}
);

userSchema.methods.isPasswordCorrect = () => {};

export default model("users", userSchema);
