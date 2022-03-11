function runProgram(input) {
    input = input.trim().split("\n");
    var testcases = Number(input[0])
    var line = 1;
    for(var i = 0; i < testcases; i++) {
        var n = Number(input[line++])
        var arr = input[line++].trim().split(" ").map(Number)
     //  console.log(n,arr)
    console.log(nearestSmallerToRight(arr))
    }
    
    }
function nearestSmallerToRight(arr) {
    result = [];
    for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                result.push(arr[j]);
                flag = true;
                break;
            }
        }
        if (!flag)
            result.push(-1);
    }
    
    return result;
}

if (process.env.USERNAME === "srini") {
    runProgram(`1
    8
    39 27 11 4 24 32 32 1`);
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
  