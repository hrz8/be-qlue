const { isPrime } = require('./utils');

const args = process.argv.slice(2);
if (args.length < 1) {
    process.exit(0);
}

function collectPrime(n) {
    const res = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) res.push(i);
    }
    return res;
}

console.log(collectPrime(Number(args[0])));
