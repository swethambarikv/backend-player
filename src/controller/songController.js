import Songservice from '../service/songService.js'

class SongController {
  constructor() {
    this.songService = new Songservice()
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
