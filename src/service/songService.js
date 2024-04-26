import mongoose from 'mongoose';
import * as fs from 'fs';
import gridfs from 'gridfs-stream';

import SongRepository from '../repository/songRepository.js';
import songSchema from '../model/songSchema.js';

class SongService {
  constructor() {
    this.songRepository = new SongRepository()
  }

  async upload(request) {
    try {
      const dataBase = mongoose.connection.db
      const gfs = gridfs(dataBase, mongoose.mongo)
      const bucket = gfs.bucket({
        bucketName: 'Tracks'
      })

      console.log('Uploading file:', request.file)

      const readStream = fs
        .createReadStream(request.file.path)
        .pipe(bucket.openUploadStream(request.file.fileName))

      readStream.on('error', error => {
        console.error('Error uploading file:', error)
        throw error
      })

      console.log('ReadStream:', readStream)

      readStream.on('finish', async () => {
        console.log('File upload finished')
        const song = new songSchema({
          title: request.body.title,
          artistName: request.body.artistName,
          album: request.body.album,
          track: request.file.originalname,
          file: readStream.id
        })
        const uploadResult = await this.songRepository.uploadSong(song)
        console.log('Upload result:', uploadResult)

        return uploadResult
      })
    } catch (error) {
      console.error('Error uploading song:', error)
      throw error
    }
  }

  async stream(request, response) {
    try {
      const trackId = new mongoose.Types.ObjectId(request.params.trackId)
      const connection = mongoose.connection
      let gfs

      connection.once('open', () => {
        gfs = gridfs(connection.db, mongoose.mongo)
        gfs.collection('track.chuck')
      })

      const tracks = await gfs.find().toArray()
      response.json(tracks)
    } catch (error) {
      console.error('Error streaming songs:', error)
      response.status(500).json({ error: error.message, status: 'error' })
    }
  }
}

// export default SongService

module.exports = SongService
