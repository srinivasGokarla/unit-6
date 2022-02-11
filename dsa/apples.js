function runProgram(input) {
    input = input.trim().split("\n");
  var[N, K] = input[0].trim().split(" ").map(Number)
  var arr = input[1].trim().split(" ").map(Number)
  //  console.log(arr,N,K)
  console.log(applesMaximum(arr,N,K))
 
}

  function applesMaximum(arr,N,K) {
  var sum = 0;
   for(var i = 0; i < arr.length; i++) {
   sum = sum + arr[i]
   if(sum > K) {
      return i
   }
  }
     return arr.length
  }
  if (process.env.USERNAME === "srini") {
    runProgram(`4 20
    3 10 4 4 `);
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