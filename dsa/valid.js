function runProgram(input) {
    input = input.trim().split("\n")
     var[n,k] = input[0].trim().split(" ").map(Number)
     var arr = input[1].trim().split(" ").map(Number)
    // console.log(n,k,arr)
    var sum = 0;
    var sum1 = 0;
    for(var i = n; i < arr.length; i++) {
        sum1 = sum1 + arr[i]
      
    }
   // console.log(sum1)
    for(var i = 0; i < (arr.length-n); i++) {
        sum = sum + arr[i]
    }
   // console.log(sum)
    if(Math.abs(sum - sum1) <= k) {
        console.log("Valid")
    } else {
        console.log("Invalid")
    }
      }
    
      if (process.env.USERNAME === "srini") {
        runProgram(`3 0
        1 2 3 4 2 1`);
    } else {
        process.stdin.resume();
        process.stdin.setEncoding("ascii");
        let read = "";
        process.stdin.on("data", function(input) {
            read += input;
        });
        process.stdin.on("end", function() {
            read = read.replace(/\n$/, "");
            read = read.replace(/\n$/, "");
            runProgram(read);
        });
        process.on("SIGINT", function() {
            read = read.replace(/\n$/, "");
            runProgram(read);
            process.exit(0);
        });
    }