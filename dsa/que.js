function runProgram(input) {
input = input.trim().split("\n")
var N = Number(input[0])
var arr = input[1].trim().split(" ").map(Number).sort()
//console.log(N, arr)
var count = 0;
for(var i = 0; i < arr.length; i++) {
    if(arr[i] + 1 === arr[i+1]) {
        count++
    }
}
console.log(N - count)
}

if (process.env.USERNAME === "srini") {
  runProgram(`6
  1 2 4 3 5 8`);
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
