import { Injectable, Inject } from 'inversify';

@Injectable()
class SongController {
  constructor(@Inject('SongService') songService) {
    this.songService = songService
  }

  async upload(request, response) {
    return this.songService.uploadSong(request)
  }

  async stream(request, response) {
    const song = await this.songService.streamSong(request.params.songId) 
    return response.status(200).json({ message: 'stream song success' })
  }
}

module.exports = SongController
