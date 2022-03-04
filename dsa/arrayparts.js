function runProgram(input) {
    input = input.trim().split("\n");
    var n =  Number(input[0])
    var arr = input[1].trim().split(" ").map(Number)
  // console.log(n,arr)
   var c1 = n/4, c2 = n/4,c3 = n/4,c4= n/4;
   var s1 = 0, s2= 0; s3= 0; s4 = 0
   for(var i = 0; i < c1; i++) {
   s1 = s1 + arr[i]
   }
   for(var i = c1; i < c1+c2; i++) {
    s2 = s2 + arr[i]
    }
    for(var i = c1+ c2; i < (c1+c2+c3); i++) {
        s3 = s3 + arr[i]
        }
        for(var i = c1+ c2+c3; i < (c1+c2+c3+c4); i++) {
            s4 = s4 + arr[i]
            }
            console.log((2*s1) + s2 + (2*s3) + s4)
}

   

  if (process.env.USERNAME === "srini") {
    runProgram(`8
    1 2 3 4 5 6 7 8`);
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