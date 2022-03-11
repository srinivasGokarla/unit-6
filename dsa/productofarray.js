function runProgram(input) {
    input = input.trim().split("\n");
    var testcases = Number(input[0])
    var line = 1;
    for(var i = 0; i < testcases; i++) {
        var n = Number(input[line++])
        var arr = input[line++].trim().split(" ").map(Number)
    //   console.log(n,arr)
       productofArray(arr)
    }
    
    }
  
function productofArray(arr) {
    var out = []
  let pro = 1;
  for(let i = 0; i < arr.length; i++) {
     pro = pro * arr[i]
  }
  //console.log(pro)
  for(let i = 0; i < arr.length; i++) {
    out.push(pro/arr[i])
}
console.log(out.join(" "))
   
}

  if (process.env.USERNAME === "srini") {
    runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`);
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