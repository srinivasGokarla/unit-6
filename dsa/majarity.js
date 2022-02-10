function runProgram(input) {
input = input.trim().split("\n")
var testcases = Number(input[0])
var line = 1
for(var i = 0; i < testcases; i++) {
    var N = Number(input[line++])
    var arr = input[line++].trim().split(" ").map(Number).sort()
    //console.log(N,arr)
    console.log(majarity(arr,N))
}
}
function majarity(arr,N) {
 for(var i =  0; i <= Math.floor(N/2); i++) {
     if(arr[i] === arr[i + Math.floor(N/2)]) {
         return arr[i]
     } else {
         return -1
     }
 }
}
if (process.env.USERNAME === "srini") {
  runProgram(`2
  6
  1 1 1 1 2 3
  5
  1 1 2 2 3`);
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
