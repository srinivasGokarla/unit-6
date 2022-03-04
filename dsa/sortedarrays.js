function runProgram(input) {
    input = input.trim().split("\n")
   let test = Number(input[0])
   let line = 1;
   for(let i= 0; i < test; i++) {
       let n = Number(input[line++])
       let arr1 = input[line++].trim().split(" ").map(Number)
       let arr2 = input[line++].trim().split(" ").map(Number)
      // console.log(test, arr1, arr2,n)
      console.log(Twosortedarrays(arr1,arr2,n))
   }
   }
   function Twosortedarrays(arr1,arr2,n) {
       let lo = 0, hi = n-1;
       let count = 0;
       while(lo < n && hi >= 0) {
           if(arr1[lo] < arr2[hi]) {
               lo++;
           } else if(arr1[lo] > arr2[hi]) {
               hi--;
           } else {
               count++;
               lo++;
               hi--;
           }
       }
       return count
   }
  
       
     if (process.env.USERNAME === "srini") {
        runProgram(`1
        6
        1 2 2 3 4 5
        4 4 3 2 1 1`);
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