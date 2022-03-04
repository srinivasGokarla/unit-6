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
    var arr1 = arr[0]
    for(var i = 1; i < arr.length; i++) {
        arr1 = arr1 ^ arr[i]
   
    }
    
    
   return arr1
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