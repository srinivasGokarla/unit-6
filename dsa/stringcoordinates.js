function runProgram(input) {
    input = input.trim().split("\n");
    var n =  Number(input[0])
    var str = input[1].trim().split("")
    //console.log(str,n)
    var arr = [0,0]
    for(var i= 0; i < str.length; i++) {
    if(str[i] == 'u') {
        arr[0] = arr[0] + 1
    } else if(str[i] == 'd') {
        arr[0] = arr[0] -1
    } else if(str[i] == 'r') {
        arr[1] =  arr[1] +1
    } else {
        arr[1] = arr[1] -1
    }
   
   
    }
  console.log(arr.join(" "))
}


  if (process.env.USERNAME === "srini") {
    runProgram(`4
    lldd `);
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