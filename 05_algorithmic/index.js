const { arrayHasArray, getVal } = require('./utils');

class NumberSet {
    constructor(n) {
        this.n = n;
        this.resTemp = [];
        this.output = [];
    }

    combinations(currentSum = 0) {
        if (currentSum === this.n) {
            const sorted_o = getVal(this.output)
                .map(x => x.sort((a, b) => a - b));
            const sorted_r = getVal(this.resTemp)
                .sort((a, b) => a - b);
                
            if (!arrayHasArray(sorted_o, sorted_r)) {
                this.output.push(getVal(this.resTemp));
            }
        } else {
            for (let i = this.n - currentSum; i > 0; i--) {
                let currentSumTemp = currentSum + i;

                if (currentSumTemp <= this.n) {
                    this.resTemp.push(i);
                    this.output = this.combinations(currentSumTemp);
                    this.resTemp.pop();
                }
            }
        }
        
        return this.output;
    }
}

const ns = new NumberSet(5);
const result = ns.combinations();

for (const res of result) {
    console.log(res.join(','));
}
