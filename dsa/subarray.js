//Brute force
//n = 5 n* n+1 /2 = n^2
var arr = [1,2,3,-2,5];// maximums subarray length = 3
var max = 0// 1
for(var i= 0; i <arr.length; i++) {
  var sum = 0;
  for(var j = i; j < arr.length; j++) {
      sum = sum + arr[j]// 1
      if(max < sum) {
        max = sum
    }
  }
}

console.log(max)

// Time complexity is O(n^2)
//space complexity is O(1)


// kadane's algorithm

// var arr = [1,2,3,-2,5];

// var sum = - Infinity;
// var cur_sum = 0;
// for(var i = 0; i < arr.length; i++) {
//     cur_sum += arr[i]
//     if(cur_sum > sum) {
//         sum = cur_sum
//     } else if(cur_sum < 0) {
//         cur_sum = 0
//     }
// }
// console.log(sum)

// Time complexity is O(n)
//space complexity is O(1)