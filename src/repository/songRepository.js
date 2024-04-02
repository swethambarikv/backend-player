class SongRepository {
  async uploadSong(song) {
    try {
      const dbResult = await song.save()
      return dbResult
    } catch (error) {
      console.error('Error uploading song:', error)
      throw error
    }
  }

  async streamSongs({ request, response, bucket, trackId }) {
    try {
      const downloadStream = bucket.openDownloadStream(trackId)

      downloadStream.on('data', chunk => {
        response.write(chunk)
      })

      downloadStream.on('error', error => {
        console.error('Error streaming song:', error)
        response.sendStatus(404)
      })

      downloadStream.on('end', () => {
        response.end()
      })
    } catch (error) {
      console.error('Error streaming songs:', error)
      response.sendStatus(500)
    }
  }
}

export default SongRepository
