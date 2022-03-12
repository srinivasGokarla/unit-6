function runProgram(input) {
    input = input.trim().split("\n")
   let n = Number(input[0])
   let arr = input[1].trim().split(" ").map(Number)
   DigitArray(arr,n)
   }
   function DigitArray(arr,n) {
       let str = "";
       let sum = 0;
       for(let  i = 0; i < n; i++) {
           while(arr[i] != 0) {
               sum = sum +(arr[i] % 10)
               arr[i] = Math.floor(arr[i] / 10)
           }
           str = str + sum + " ";
           sum = 0
       }
       console.log(str)
   }
   
   if (process.env.USERNAME === "srini") {
     runProgram(`4
     43 345 20 987`);
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
   