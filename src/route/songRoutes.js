import { Router } from 'express'
import multer from 'multer'
import SongController from '../controller/songController.js'

const upload = multer({ dest: 'uploads/' })
const songRoutes = Router()
const song = new SongController()

songRoutes.post('/upload', upload.single('file'), song.uploadSong)
songRoutes.get('/stream/:trackId', song.streamSong)

export default songRoutes
