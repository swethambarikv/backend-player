const express = require('express')
const SongController = require('../controller/songController')

const router = express.Router()
const songController = new SongController()

router.use(songController.getRouter())

module.exports = router
