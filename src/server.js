import express from 'express'
import './database.js'
import router from './route/index.js'
import { container } from './config/container.js'
import { Types } from './config/types.js'

const app = express()
const route = container.get<RoutesInterface>(Types.Routes)
route.routes(app)

app.use(express.json())
app.use('/api', router)

app.listen(8080, () => console.log('server running in the port 8080'))
