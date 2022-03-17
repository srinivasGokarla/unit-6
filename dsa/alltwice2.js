
function runProgram(input) {
    input = input.trim().split("\n");
    let test = Number(input[0])
    let line = 1;
    for(let i = 0; i < test; i++) {
        var n = Number(input[line++])
        var arr = input[line++].trim().split(" ").map(Number)
      //  console.log(test,n,arr)
   console.log(Alltwice(n,arr))
    }
  
}
function Alltwice(n,arr) {
   let count = 0;
   let obj = {};
   for(let i = 0; i < arr.length; i++) {
       if(obj[arr[i]] === undefined) {
           obj[arr[i]] = 1
       } else {
           obj[arr[i]] += 1
       }
   }
   for(let k in obj) {
       if(obj[k] === 1) {
         return k
       }
   }
}

   

  if (process.env.USERNAME === "srini") {
    runProgram(`2
    1
    5
    5
    1 2 1 3 2`);
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