function runProgram(input) {
    input = input.trim().split("\n");
    var testcases = Number(input[0])
    var line = 1;
    for(var i = 0; i < testcases; i++) {
        var n = Number(input[line++])
        var arr = input[line++].trim().split(" ").map(Number)
       // console.log(n,arr)
       NextGreaterElement(arr,n)
    }
    
    }
  
function NextGreaterElement(arr,n) {
    var ans = []
        for (i = 0; i < n; i++){
          next = -1;
        for (j = i + 1; j < i+3; j++){
            if (arr[i] < arr[j]){
              next = arr[j];
              break;
            }
          }
           ans.push(next)
           
        }
        console.log(ans.join(" "))

   
}
  if (process.env.USERNAME === "srini") {
    runProgram(`1
    4
    1 3 2 4`);
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