const {writeFileSync} = require('fs');

for (var i = 0; i< 10000; i++) {
    writeFileSync(
        './content/big.txt',
        `Hello this is ${i}\n`,
        {flag : 'a'}
    );
}