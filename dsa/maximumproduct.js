function runProgram(input) {
    input = input.trim().split("\n")
     var testcases = Number(input[0])
     var line = 1;
     for(var i= 0; i < testcases; i++) {
         var N = Number(input[line++])
         var arr = input[line++].trim().split(" ").map(Number).sort((a, b) => a - b)
         //console.log(N,arr)
         var ans = arr[N-1] * arr[N-2]
         console.log(ans)
     }
    }
    if (process.env.USERNAME === "srini") {
      runProgram(`3
      6 
      1 0 7 2 4 0
      5
      1 2 3 4 5
      2
      0 0`);
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
    