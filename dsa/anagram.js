function runProgram(input) {
    input=input.split("\n");
    var cases=input[0];
    var line=1;
    for(var i=0;i<cases;i++)
    {
        var a=input[line];
        line++;
        var b=input[line];
        line++;
        checkStringsAnagram(a,b)
       // console.log(a)
    }
}
function checkStringsAnagram(a, b) {
   let len1 = a.length;
   let len2 = b.length;
  
   let str1 = a.split('').sort().join('');
   let str2 = b.split('').sort().join('');
   if(str1 === str2){
      console.log("True");
   } else { 
      console.log("False");
   }
}

if (process.env.USERNAME === "srini") {
    runProgram(`2
    abcd
    dcab
    aa
    aaa`);
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
  