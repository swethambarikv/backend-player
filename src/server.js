const express = require('express')
const { configureContainer } = require('./config/container')
const Types = require('./config/types')
require('./database.js')
const router = require('./route/index.js')

const app = express()

configureContainer()
  .then(container => {
    const route = container.get(Types.Routes)
    route.routes(app)

    app.use(express.json())
    app.use('/api', router)

    app.listen(8080, () => console.log('server running in the port 8080'))
  })
  .catch(error => {
    console.error('Error configuring container:', error)
  })
