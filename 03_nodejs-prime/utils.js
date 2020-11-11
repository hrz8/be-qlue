module.exports = {
    isPrime(x) {
        if (x === 2) return true;
        if (!Number.isInteger(x) || x < 2 || x % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(x); i++) {
            if (x % i === 0) {
                return false;
            }
        }
        return true;
    }
}