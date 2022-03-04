
function runProgram(input) {
input = input.trim().split("\n")
var testcases = Number(input[0])
var line = 1;
for(var i= 0; i < testcases; i++) {
    var n = Number(input[line++])
    var arr = input[line++].trim().split(" ").map(Number)
  //  console.log(testcases,n,arr)
  weried(n,arr)
}
}
 function weried(n,arr) {
     var k = n-1
 for(var i = 0; i < arr.length; i++) {
     var sub = [];
     var sum = 0
     for(var j = i+1; j < arr.length; j++) {
    sub.push(arr[j])
  //  console.log(sub)
  for(var k = 0; k < sub.length; k++) {
      sum = sum + sub[i]
     // console.log(sum)
     
  }
     }
 }
  if(sum === k) {
      console.log("Yes")
  } else {
      console.log("No")
  }
 }

  
  if (process.env.USERNAME === "srini") {
    runProgram(`3
    3
    1 2 3
    4
    0 1 2 3
    4
    2 3 6 10`);
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