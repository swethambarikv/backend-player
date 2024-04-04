import mongoose, { Types, model } from 'mongoose'

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  artistName: {
    type: String,
    require: true
  },
  album: {
    type: String
  },
  file: {
    type: Types.ObjectId,
    require: true
  }
})

export default model('Songs', songSchema)
