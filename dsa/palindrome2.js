function runProgram(input) {
    input  = input.trim().split("\n")
    var testcases = Number(input[0])
    var line = 1;
    for(var i = 0; i < testcases; i++) {
    var N = Number(input[line++])
    var string = input[line++].trim().split("")
// console.log(arr,n,testcases)
detectPalII(N,string)
    }
}
function detectPalII(N,string){
   
    var obj = {}
    for(var i=0; i<string.length; i++){
        if(obj[string[i]] === undefined){
            obj[string[i]] = 1;
        }
        else{
            obj[string[i]] += 1
        }
    }
    var count = 0;
    for(var k in obj){
       // console.log(obj[k])
        if(obj[k] % 2 ===1){
            count++
        }
    }
    if(count > 1){
    console.log('Not Possible!')
 }
 else{
     console.log('Possible!')
 }
}

if (process.env.USERNAME === "srini") {
    runProgram(`2
    6
    aabbcc
    5
    aabcd`);
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
  
