function runProgram(input) {
    input = input.trim().split("\n")
     var N = Number(input[0])
     var arr = input[1].trim().split(" ").map(Number)
       //  console.log(N,arr)
       var sum = 0;
       for(var i = 0; i < arr.length; i+=2) {
         sum = sum + arr[i]
       }
       console.log(sum)
      
}
    if (process.env.USERNAME === "srini") {
      runProgram(`7
      4 5 5 5 6 6 7`);
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
    