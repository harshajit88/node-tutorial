const {readFile, writeFile} = require('fs').promises;
//const util = require('util');
//const readFilePromise = util.promisify(readFile);
//const wrtieFilePromise = util.promisify(writeFile);

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path , 'utf8', (err, result) => {
        if (err){
            reject(err);
        }
            resolve(result);
                })
    })
}
const start = async() => {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');

    await writeFile(
    './content/result-async-1.txt',
    `The new value is 4 : ${first}, ${second}`,
    {flag : 'a'}
);

}

start();





