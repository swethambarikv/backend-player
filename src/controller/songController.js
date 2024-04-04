import { inject } from 'inversify';
import { container } from '../config/container'
class SongController {

  constructor() {
    this.songService = container.get < SongService > (SongService);
  }

  uploadSong = async (request, response) => {
    return this.songService.uploadSong(request)
  }

  streamSong = async (request, response) => {
    const song = await this.songService.streamSongs(request, response)
    return response.status(200).json({ message: 'stream song success' })
  }
}

export default SongController
