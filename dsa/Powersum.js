function runProgram(input) {
    input = input.trim().split("\n");
    var[X, N] = input[0].trim().split(" ").map(Number)
    //console.log(X,N)
    var sum = 0;
    var count = 0
    for(var i= 0; i <= X; i++) {
        for(var j = i+1; j <= X; j++) {
             sum = i^2 + j^2;
           //  console.log(sum)
        } if(sum == X) {
            count++
            console.log(count)
        
    } 
    }
    
    }
  



  if (process.env.USERNAME === "srini") {
    runProgram(`10 2`);
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