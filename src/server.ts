const express = require('express')
require('./database.js')
const router = require('./route/index.js')

const app = express()

configureContainer()

app.use(express.json())
app.use('/api', router)

app
  .listen(8080, () => console.log('server running in the port 8080'))
  .catch(error => {
    console.error('Error configuring container:', error)
  })
