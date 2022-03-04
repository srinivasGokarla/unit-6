function runProgram(input) {
    input = input.trim().split("\n");
    var n =  Number(input[0])
    var arr = input[1].trim().split(" ").map(Number)
   // console.log(n,arr)
   console.log( middle(arr,n))
}
   function middle(arr,n) {
   var ans = -1
  if(n % 2 === 0) {
    return ans
  } else {
    return arr[Math.floor(n/2)]
   
  }

   }
//    function getMiddle(n, arr) {
//     let low, high;
//     for (let i = 0; i < n; i++) {
//         low = i;
//         high = i;
//         while (low >= 0 && arr[low] <= arr[i]) {
//             low--;
//         }
//         while (high < n - 1 && arr[high] >= arr[i]) {
//             high++;
//         }
        
//         if (low == -1 && high == n - 1) {
//             return arr[i];
//         }
//     }
//     return -1;
// }

  if (process.env.USERNAME === "srini") {
    runProgram(`5
    4 3 6 7 8 8`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }