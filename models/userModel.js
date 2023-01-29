import { Schema, model } from "mongoose";

import { speedSchema } from './speedModel'

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
    role: {
      type: String,
      default: 'user'
    }
  }
);


const coords = new Schema({
  lat: {
    type: Number,
    required: true,
    default: 0
  },
  lng: {
    type: Number,
    required: true,
    default: 0
  },
})

const speedEntrySchema = new Schema({
  scene: {
    type: Number,
    enum: [1, 2, 3],
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  direction: {
    type: Number,
    enum: [1, 2]
  },
  entryPoint: {
    coords: {
      type: coords,
      required: true,
      default: () => ({})
    },
    value: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Speed'
    }
  },
  exitPoint:{
    coords: {
      type: coords,
      default: () => ({})
    },
    value: {
      type: Schema.Types.ObjectId,
      ref: 'Speed'
    }
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isAccepted: {
    type: Boolean,
    default: false
  }
})

const User = model('User', userSchema)
const SpeedLabel = model('Speed', speedSchema)


const SpeedEntry = model('SpeedEntry', speedEntrySchema)

export default model("users", userSchema);
