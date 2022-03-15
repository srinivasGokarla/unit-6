function runProgram(input) {
    input = input.trim().split("\n");
 let[n,m] = input[0].trim().split(" ").map(Number)
 var line = 1;
 var mat = [];
 for(var j = 0; j < n; j++) {
     mat.push(input[line++].trim().split(" ").map(Number));
    
 }
let arr = mat.join(" ")
console.log(arr)
 matrixprimecheck(mat)
}
  function matrixprimecheck(arr) {
      let count = 0
    for(i = 0; i <  arr.length; i++) {
             if(arr[i] % i === 0 && i != 0) {
                 count++;
             }
    }
  
  
  }
 
  if (process.env.USERNAME === "srini") {
    runProgram(`3 3
    1 2 3 
    4 5 6
    7 8 9`);
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

