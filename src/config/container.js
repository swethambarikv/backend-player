import { Container } from 'inversify';
import * as fs from 'fs';
import * as path from 'path';

export function configureContainer() {
    const container = new Container();
    const controllersDir = path.join(__dirname, '../controller');
    const controllerFiles = fs.readdirSync(controllersDir);
    controllerFiles.forEach(file => {
        if (file.endsWith('.js')) {
            const controllerModule = require(path.join(controllersDir, file));
            const controllerName = Object.keys(controllerModule)[0];
            const Controller = controllerModule[controllerName];
            container.bind(Controller).toSelf();
        }
    });

    const routesDir = path.join(__dirname, '../route');
    const routeFiles = fs.readdirSync(routesDir);
    routeFiles.forEach(file => {
        if (file.endsWith('.js')) {
            const routesModule = require(path.join(routesDir, file));
            container.bind(routesModule).toSelf();
        }
    });

    return container;
}
