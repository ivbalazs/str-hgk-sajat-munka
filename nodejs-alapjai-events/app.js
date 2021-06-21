const { createReadStream, createWriteStream } = require('fs')
const { Transform } = require('stream')
const path = require('path')
const Logger = require('./Logger')
const logger = new Logger()

class TitleCaseStream extends Transform {
    constructor() {
        super();
    }

    _transform(chunk, enc, done) {
        const output = chunk.toString('utf8').split(' ')
            .map(word => {
                return `${word[0].toUpperCase()}${word.slice(1)}`;
            })
            .join(' ');
        this.push(output);
        done();
    };
}


const rStream = createReadStream(
    path.join(__dirname, 'sourceFile.txt'),
    {
        encoding: 'utf8',
        highWaterMark: 512 * 1024
    }
);

const wStream = createWriteStream(
    path.join(__dirname, 'targetFile.txt'),
    'utf8'
);

wStream
    .on('finish', () => logger.success('File transform successful'))
    .on('error', err => logger.error(err))

rStream.pipe(new TitleCaseStream()).pipe(wStream);