function runProgram(input) {
    input = input.trim().split("\n");
    var testcases = Number(input[0])
    var line = 1;
    for(var i= 0; i < testcases; i++) {
        var[a,b] = input[line++].trim().split(" ").map(Number)
       // console.log(a,b,testcases)
       console.log(GCD(a,b))
    }
    
    }
    function GCD(a,b) {
      if(a === 0) {
          return b
      } else {
          return GCD(b%a, a)
      }
    }



  if (process.env.USERNAME === "srini") {
    runProgram(`2
    6 9
    2 25`);
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