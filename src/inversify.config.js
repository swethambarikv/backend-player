import { Container, interfaces } from 'inversify';

const container = new Container();
container.bind<SongService>(SongService).toSelf().inSingletonScope();

export default container;
