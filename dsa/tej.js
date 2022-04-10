var a = [5, 9, 63, 29, 35, 6, 55, 23]
var prime = [];

function isPrime(item) {
    var i = item / 2;
      for (var j = 2; j <= i; j++) {
       if ((item % j) == 0) { 
        return false;
       } 
     }
     return true;
}
for (var i = 0; i < a.length; i++) {
  if (isPrime(a[i])) {
      prime.push(a[i])
  }
}

console.log(prime);
