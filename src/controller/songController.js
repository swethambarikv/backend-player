const { injectable, inject } = require('inversify')
const { Container } = require('inversify')
const container = new Container()

@injectable()
class SongController {
  constructor(@inject('SongService') songService) {
    this.songService = songService
  }

  async uploadSong(request, response) {
    return this.songService.uploadSong(request)
  }

  async streamSong(request, response) {
    const song = await this.songService.streamSong(request.params.songId) // Assuming songId is extracted from params
    return response.status(200).json({ message: 'stream song success' })
  }
}

module.exports = SongController
