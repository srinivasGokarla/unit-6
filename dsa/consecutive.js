function runProgram(input) {
    input = input.trim().split("\n")
     var testcases = Number(input[0])
     var line = 1;
     for(var i = 0; i < testcases; i++) {
         var N = +(input[line++])
        // console.log(testcases,N)
        var count = 0;
        while(N != 0) {
            N =(N&(N<<1))
            count++
        }
        console.log(count)
     }
      }
    
      if (process.env.USERNAME === "srini") {
        runProgram(`4
        1
        0
        4294967295
        13`);
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