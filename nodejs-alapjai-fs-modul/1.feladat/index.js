const { mkdir, appendFile } = require('fs').promises

const folders = ['controllers', 'routers', 'views']

const files = [
    './controllers/site.controller.js',
    './routers/site.router.js',
    './views/index.html',
    './app.js'
]

const createFolders = folders => folders.map(folder => mkdir(folder))
const createFiles = files => files.map(file => appendFile(file, ''))

createFolders(folders)
createFiles(files)