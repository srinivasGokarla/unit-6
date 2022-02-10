function runProgram(input) {
input = input.trim().split("\n")
  
var[a,b,c] = input[0].trim().split(" ").map(Number)

//console.log(a,b,c)

if(a != b && b != c && c != a) {
    console.log(0)
} else if(a != b && a != c && b == c) {
    console.log(a)
} else if(c != a && c != b  && a ==b) {
    console.log(c)
} else {
    console.log(b)
}

}



     
     if (process.env.USERNAME === "srini") {
       runProgram(`4 5 6`);
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