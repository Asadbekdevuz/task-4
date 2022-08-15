let arrAll = [2, 5, 9, 12, 16, 24, 36];
let arrInfo = [];

function num() {
  for (let i = 0; i < arrAll.length; i++) {
    if ((Math.sqrt(arrAll[i]) % 1 ) == 0 ) {
      arrInfo.push(Math.sqrt(arrAll[i]));
    }
    else{
      arrInfo.push(Math.pow(arrAll[i], 2));

    }
  }
}

num();

console.log(arrInfo);