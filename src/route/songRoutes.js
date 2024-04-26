import * as express from 'express'; 
import multer from 'multer';

import { SongController } from '../controller/songController'

const Router = express.Router(); 
const upload = multer({ dest: 'uploads/' })
const songRoutes = Router()
const songController = new SongController()

songRoutes.post('/upload', upload.single('file'), songController.uploadSong)
songRoutes.get('/songs/stream/:songId', songController.streamSong)

module.exports = songRoutes
