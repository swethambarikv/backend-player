const { configureContainer } = require('../config/container')
const { Get, Post } = require('@decorators/express')
const { SongService } = require('../service/songService')

class SongController {
  constructor() {
    this.songService = configureContainer.get(SongService)
  }

  @Post('/songs/upload')
  async uploadSong(request, response) {
    return this.songService.uploadSong(request)
  }

  @Get('/songs/stream/:songId')
  async streamSong(request, response) {
    const song = await this.songService.streamSong(request, response)
    return response.status(200).json({ message: 'stream song success' })
  }
}

module.exports = SongController
