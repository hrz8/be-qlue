const { arrayHasArray, getVal } = require('./utils');

const args = process.argv.slice(2);
if (args.length < 1) process.exit(0);

const SumSet = function(n) {
    if (!new.target) throw Error("SumSet must be called with new keyword!");
    if (n < 2) process.exit(0);
    this.n = n;
    this.res = [];
    this.output = [];
}

SumSet.prototype.combinations = function(currentSum = 0) {
    if (currentSum === this.n) {
        const sorted_o = getVal(this.output)
            .map(x => x.sort((a, b) => a - b));
        const sorted_r = getVal(this.res)
            .sort((a, b) => a - b);
            
        if (!arrayHasArray(sorted_o, sorted_r)) {
            this.output.push(getVal(this.res));
        }
    } else {
        for (let i = this.n - currentSum; i > 0; i--) {
            let currentSumTemp = currentSum + i;

            if (currentSumTemp <= this.n) {
                this.res.push(i);
                this.output = this.combinations(currentSumTemp);
                this.res.pop();
            }
        }
    }

    return this.output;
}

const result = (new SumSet(Number(args[0]))).combinations();
for (const res of result) {
    console.log(res.join(','));
}
