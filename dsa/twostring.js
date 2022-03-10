function runProgram(input){
    input =  input.trim().split("\n");
  let str = input[0].trim().split("")
  let str1 = input[1].trim().split("").sort()
    // console.log(str,str1)
    console.log( twostrings(str,str1))
}
    function twostrings(str,str1) {
    for(let i= 0; i < str.length;i++) {
        if(str[i] === str1[i]) {
          return "Yes"
        } else {
           return "No"
        }
    }
  }
 
  
if (process.env.USERNAME === "srini") {
    runProgram(`amit
    mtia`);
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
  
  