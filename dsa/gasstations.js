function runProgram(input) {
    input = input.trim().split("\n")
    var N = Number(input[0])
    var g = input[1].trim().split(" ").map(Number)
    var c = input[2].trim().split(" ").map(Number)
  // console.log(N,g,c)
    console.log(gasStations(g, c))
  
     }

     function gasStations(g,c) {
        var sumRemaining = 0;
        var sum = 0; 
        var start = 0; 
     
        for (var i = 0; i < g.length; i++) {
            var remaining = g[i] - c[i];
     
            if (sumRemaining >= 0) { 
                sumRemaining += remaining;
          
            } else {
                sumRemaining = remaining;
                start = i;
            }
            sum += remaining;
        }
     
        if (sum >= 0){
            return start;
        }else{
            return -1;
        }
    }
     
     if (process.env.USERNAME === "srini") {
       runProgram(`5
       1 2 3 4 5
       3 4 5 1 2`);
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