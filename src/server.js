import express from 'express';
import { configureContainer } from './config/container';
import Types from './config/types';
import './database.js'; 
import router from './route/index.js';

const app = express();


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
