const { unlink } = require('fs').promises;
const { createReadStream, createWriteStream } = require('fs');
const { join } = require('path');
const { createGzip } = require('zlib');

const sourcePath = join(__dirname, 'index.js');
const readSettings = createReadStream(
    sourcePath,
    { encoding: 'utf8' }
);

const targetPath = join(__dirname, 'index.js.bak');
const writeBak = createWriteStream(
    targetPath,
    { encoding: 'utf8' }
);

const readTarget = createReadStream(
    targetPath,
    { encoding: 'utf8' }
);

const writeZip = createWriteStream(
    join(__dirname, 'index.js.bak.gz'),
    { encoding: 'utf8' }
);

readSettings.pipe(writeBak);
writeBak.on('finish', () => {
    readTarget.pipe(createGzip()).pipe(writeZip);
});

writeZip.on('finish', () => {
    unlink(sourcePath);
    unlink(targetPath);
});