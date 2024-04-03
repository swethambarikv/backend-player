import {Container} from 'inversify'
import SongController from '../controller/songController'
import songRoutes from '../route/songRoutes'

const container = new Container()

container.bind<SongController>(SongController).toSelf()
container.bind<any>(songRoutes).toSelf()

export {container}