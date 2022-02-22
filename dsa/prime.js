
function runProgram(input) {
    input = input.trim().split("\n")
    var N = Number(input[0]);
    for(var i = 2; i<=N ;i++){
        var isPrime = true;
        for(var j = 2; j < i; j++){
            if(i%j === 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime === true){
            console.log(i);
        }
}
}
  
     if (process.env.USERNAME === "srini") {
        runProgram(`50`);
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