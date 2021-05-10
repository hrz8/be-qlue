const args = process.argv.slice(2);
if (args.length < 1) process.exit(0);

function matrix(n) {
  const arr = [];
  let currRow = 0;
  let currCol = 0;
  
  let maxRow = n;
  let maxCol = n;
  
  for (let i = 0; i < n; i++) {
    arr.push((new Array(n).fill(0)));  
  }
  
  let a = 1;
  while (a <= n * n) {
    // fill -> right
    // 0, 0 -> 0, 1 -> 0, 2
    for (let col = currCol; col < maxCol; col++) {
      arr[currRow][col] = a;
      a++;
    }
    
    // fill -> bottom
    // 1, 2 -> 2, 2
    for (let row = currRow + 1; row < maxRow; row++) {
      arr[row][maxCol - 1] = a;
      a++;
    }
    
    // fill -> left
    // 2, 1 -> 2, 0
    for (let col = maxCol; col > currCol + 1; col--) {
      arr[maxRow - 1][col - 2] = a;
      a++;
    }
    
    // fill -> up
    // 1, 0
    for (let row = maxRow; row > currRow + 2; row--) {
      arr[row - 2][currRow] = a;
      a++;
    }
    
    currCol++;
    currRow++;  
    maxCol--;
    maxRow--;
    
  }
  
  return arr;
}
  
console.log(matrix(1));
