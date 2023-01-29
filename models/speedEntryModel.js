import { Schema, model } from 'mongoose'

import { speedSchema } from './speedModel'
import { userSchema } from './userModel'


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

export const speedEntrySchema = new Schema({
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
    },
    address: {
      type: String,
      default: ''
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
    },
    address: {
      type: String,
      default: ''
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

export default model('speedEntry', speedEntrySchema)