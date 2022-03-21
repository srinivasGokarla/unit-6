function runProgram(input) {
    input = input.trim().split("\n");
    var testcases = Number(input[0])
    var line = 1;
    for(var i = 0; i < testcases; i++) {
        var n = Number(input[line++])
      //  console.log(n)
      console.log(BinaryEquivalent(n))

    }
    }

    function BinaryEquivalent(n) {
        if(n == 0){
            return 0;
        }
        else{
            return ((n %2) + 10 * BinaryEquivalent(parseInt(n/2)))
        }
     

    }

  if (process.env.USERNAME === "srini") {
    runProgram(`2
    15
    128`);
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