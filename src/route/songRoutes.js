const express = require('express')
const multer = require('multer')
const { Router } = express
const SongController = require('../controller/songController.js')

const upload = multer({ dest: 'uploads/' })
const songRoutes = Router()
const songController = new SongController()

songRoutes.post('/upload', upload.single('file'), songController.uploadSong)
songRoutes.get('/songs/stream/:songId', songController.streamSong)

module.exports = songRoutes
