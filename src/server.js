import express from 'express'
import './database.js'
import router from './route/index.js'

const app = express()

app.use(express.json())
app.use('/api', router)

app.listen(8080, () => console.log('server running in the port 8080'))
