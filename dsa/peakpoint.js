function runProgram(input) {
    input = input.trim().split("\n");
   let test = Number(input[0])
   let line = 1;
   for(let i= 0; i < test; i++) {
       let n = Number(input[line++])
       var arr = input[line++].trim().split(" ").map(Number)
       peakPoint(arr,n)
   }

 }
 function peakPoint(arr,n) {
     for(let i= 0; i < arr.length; i++) {
         if(arr[i-1] < arr[i] && arr[i+1] < arr[i]) {
             console.log(i)
         }
     }
 }
  
    if (process.env.USERNAME === 'srini') {
      runProgram(`2
        3
        10 20 11
        5
        1 3 6 5 4`)
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