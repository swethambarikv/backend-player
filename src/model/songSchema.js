import mongoose from 'mongoose';

const { Types, model } = mongoose

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

module.exports = model('Songs', songSchema)
