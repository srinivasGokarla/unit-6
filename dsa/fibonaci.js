function runProgram(input) {
    input = input.trim().split("\n")
    var N = Number(input[0])
    //console.log(N)
    console.log(fibonaci(N))
}
var  dp = []
function fibonaci(N){
  
    if(dp[N]){
        return dp[N]
    }
    if(N === 0) {
        dp[N]=0
    }
    else if(N === 1){
        dp[N] = 1
    } else {
        
        dp[N] = fibonaci(N-1)+fibonaci(N-2)
    }
         return dp[N]
 }
 
     
     if (process.env.USERNAME === "srini") {
       runProgram(`5`);
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