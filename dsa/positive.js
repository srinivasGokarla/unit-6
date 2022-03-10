function runProgram(input) {
    var input = input.trim().split("\n")
  let test = Number(input[0])
  let line = 1;
  for(let i= 0; i < test; i++) {
      let N = Number(input[line++])
      positive(N)
  }
    }
    function positive(N) {
        var sum = 0
        for(var i = 1; i < N; i++) {
           if(N % i === 0) {
               sum = sum + i
           }
        }
       if(sum === N) {
           console.log("Yes")
       } else {
           console.log("No")
       }
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`3
      6
      5
      28
      
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
    