function runProgram(input) {
    input = input.trim().split("\n");
    var testcases = Number(input[0])
    var line = 1;
    for(var i= 0; i < testcases; i++) {
        var str = input[line++].trim().split("")
        var str1 =  input[line++].trim().split("")
       // console.log(str,str1,testcases)
       var m = str.length;
       var n = str1.length
       immense(str, str1,m,n)
    }
 
}
  function immense(str, str1, m,n) {
    
             if(m == 0) 
            return n
             else if(n  == 0)
            return m
             else if(str[m-1] == str1[n-1])
            return  immense(str, str1, m-1,n-1)
             else
           return 1 + Min(immense(str, str1, m,n-1), immense(str, str1, m-1,n), immense(str, str1, m-1,n-1))
         
  }

  if (process.env.USERNAME === "srini") {
    runProgram(`3
    abcde
    abde
    abde
    abcde
    abcde
    abxde
    `);
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