function runProgram(input) {
    input  = input.trim().split("\n")
    var n = Number(input[0])
    var arr = input[1].trim().split(" ").map(Number)
   // console.log(arr,n)
   var x = -1;
   var y = -1;
    }
 
  if (process.env.USERNAME === "srini") {
    runProgram(`5
    5 4 1 3 2`);
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
  