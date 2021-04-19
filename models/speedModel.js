import { Schema, model} from 'mongoose'

export const speedSchema = new Schema({
  label: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  value: {
    type: Number,
    unique: true,
    required: true
  }
})

export default model('speed', speedSchema)