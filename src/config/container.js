const { Container } = require('inversify')
const fs = require('fs')
const path = require('path')

async function configureContainer() {
  const container = new Container()
  const directories = [
    path.join(__dirname, '../controller'),
    path.join(__dirname, '../route')
  ]
  async function importDirectory(dirPath) {
    const files = fs.readdirSync(dirPath)
    for (const file of files) {
      if (file.endsWith('.js')) {
        const filePath = path.join(dirPath, file)
        try {
          const module = await import(filePath)
          const exportedClass = module.default
          if (
            exportedClass &&
            Reflect.getMetadata('inversify:paramtypes', exportedClass)
          ) {
            container.bind(exportedClass).toSelf()
          }
        } catch (err) {
          console.error(`Error importing from ${filePath}:`, err)
        }
      }
    }
  }

  for (const dirPath of directories) {
    await importDirectory(dirPath)
  }

  return container
}

module.exports = { configureContainer }
