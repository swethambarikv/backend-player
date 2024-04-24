// const mongoose = require('mongoose')
const dotenv = require('dotenv')
import mongoose from 'mongoose'

dotenv.config()

mongoose
  .connect('mongodb://localhost:27017/music_player')
  .then(() => console.log('Database connected'))
  .catch(err => console.log(err))
