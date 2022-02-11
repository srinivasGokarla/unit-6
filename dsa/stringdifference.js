function runProgram(input) {
    input = input.split('\n');
   var str1 = input[0].trim().split("")
   var str2 = input[1].trim().split("")
  // console.log(str1,str2)
    var out = []
    for(var i = 0; i<str1.length; i++){
        if(str1[i] != str2[i]){
            out.push(str1[i])
        }
    }
  console.log(out.join(""))
    
  }
  if (process.env.USERNAME === "srini") {
    runProgram(`ABCX
    ABCD`);
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