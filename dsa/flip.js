var arr = [2,3,1,2,4,2,0,5]
var target = 5
var count = 0;
// n,q = index 1,5 // 23
// time co o(n)
//space 0(1)

// 10^9
// 
 // var sum = 0 
// for(var i = 0; i <= 4; i++) {
//     sum = sum + arr[i]
// }

// console.log(sum)


// for(var i = 0; i < arr.length; i++) { // time complexity o(n)
//      sum = sum + arr[i]
// }
// console.log(sum)//2 // time complexity o(1)// 0 , n-1

// 1, n-2
  // for(var i = 0; i < arr.length; i++) {
  //     for(var j = i+1; j < arr.length; j++) {
  //       if( arr[i] != arr[j] && arr[i] + arr[j] === target) {
  //               console.log(arr[i], arr[j])
  //       }
  //     }
  // }

  const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}

console.log(number);
// expected output: 42