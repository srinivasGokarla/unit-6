function runProgram(input) {
    input  = input.trim().split("\n")
    var testcases = Number(input[0])
    var line = 1;
    for(var i = 0; i < testcases; i++) {
    var n = Number(input[line++])
    var arr = input[line++].trim().split(" ").map(Number)
// console.log(arr,n,testcases)
squresorted(arr,n) 
    }
 
  }
  function squresorted(arr,n) {


  }
  
  if (process.env.USERNAME === "srini") {
    runProgram(`1
    5
    -2 3 1 -4 6
    `);
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
  