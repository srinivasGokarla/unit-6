function runProgram(input) {
    input = input.trim().split("\n")
   let n = Number(input[0])
   let arr = input[1].trim().split(" ").map(Number)
   ClosestZero(arr,n)
   }
   function ClosestZero(arr,n) {
     var res = []
     var obj = {}
     for(let i = 0; i < n; i++) {
         if(arr[i] > 0) {
             arr[i] = Math.abs(arr[i])
         }
     }
     for(let i = 0; i < n; i++) {
         if(obj[arr[i]] === undefined) {
             obj[arr[i]] = 1
         }
     }
     for(let k in obj) {
         res.push(k)
     }
     res.sort((a,b) => {
         return a-b
     })
     console.log(res[0])
   }
   
   if (process.env.USERNAME === "srini") {
     runProgram(`5
     0 2 3 4 5`);
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
   