function runProgram(input) {
    input = input.trim().split("\n");
    var testcases = Number(input[0])
    var line = 1;
    for(var i = 0; i < testcases; i++) {
        var[N, K] = input[line++].trim().split(" ").map(Number)
        var arr = input[line++].trim().split(" ").map(Number)
        // console.log(arr,N,K)
        minandMaxSum(arr,N,K)
    }
  
}

function minandMaxSum(arr,N,K) {
    var min = 0;
    var max = arr[0]
    for(var j = 0; j < arr.length; j++) {
        if(arr[j] > max) {
            max = arr[j]
        }
    }
   console.log(max- K)
}

  if (process.env.USERNAME === "srini") {
    runProgram(`1
    5 1
    1 2 3 4 5 `);
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