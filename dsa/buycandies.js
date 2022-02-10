function runProgram(input) {
    input = input.trim().split("\n")
    var[n, k] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
   // console.log(n,k,arr)
   var res = []
   for(var i = 0; i < arr.length; i++) {
  //  console.log(arr[i])
       for(var j = i; j < arr.length; j++) {
       // console.log(arr[j])
           if(arr[i] + arr[j] == k) {
             console.log(arr[i],arr[j])
            
           }
       }
       
   }
    }
    if (process.env.USERNAME === "srini") {
      runProgram(`4 7
      2 3 6 7`);
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
    