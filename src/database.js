import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose
  .connect('mongodb://localhost:27017/music_player')
  .then(() => console.log('Database connected'))
  .catch(err => console.log(err))
