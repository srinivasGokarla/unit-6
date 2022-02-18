function runProgram(input) {
    input = input.trim().split("\n")
    var n = Number(input[0])
    var arr = input[1].trim().split(" ").map(Number)
   // console.log(arr,n)
  }
  function quicksort(arr) {
      
  }
  
  
  if (process.env.USERNAME === "srini") {
    runProgram(`5
    2 3 1 4 5`);
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
  