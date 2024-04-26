import { Container } from 'inversify';
import { readdirSync } from 'fs';
import { join } from 'path';
import 'reflect-metadata';

async function importFilesFromFolders(rootDir: string, folders: string[]): Promise<void> {
  const container = new Container();

  for (const folder of folders) {
    const folderPath = join(rootDir, folder);
    const files = readdirSync(folderPath);

    for (const file of files) {
      if (file.endsWith('.ts')) {
        const filePath = join(folderPath, file);
        try {
          const module = await import(filePath);
          const exportedClass = module.default;
          if (exportedClass && Reflect.getMetadata('inversify:paramtypes', exportedClass)) {
            container.bind(exportedClass).toSelf();
          }
        } catch (err) {
          console.error(`Error importing file: ${filePath}`, err);
        }
      }
    }
  }
}

export async function loader(): Promise<void> {
  const rootDir = join(__dirname, '../src');
  const folders = ['controller', 'route']; 
  await importFilesFromFolders(rootDir, folders);
}
