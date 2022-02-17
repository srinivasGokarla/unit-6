function runProgram(input) {
    input = input.trim().split("\n");
    var n =  Number(input[0])
    var arr = input[1].trim().split(" ").map(Number)
  //  console.log(arr,n)
  var min = arr[0]
  for(var i= 0; i < arr.length; i++) {
      if(min > arr[i]) {
          min = arr[i]
      }
  }
   console.log(min)
}


  if (process.env.USERNAME === "srini") {
    runProgram(`10
    4 6 7 9 10 -1 0 1 2 3`);
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