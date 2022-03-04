
function runProgram(input) {
    input = input.trim().split("\n")
    let test = Number(input[0]);
    let line = 1;
    for(i = 0; i < test; i++) {
        let X = Number(input[line++])
        let Y = Number(input[line++])
        let N =  Number(input[line++])
        let mat = [];
        for(j=0;j<N;j++){
            mat.push(input[line++].trim().split(" ").map(Number));
            console.log(test)
   
  }
}
}
function bricks(mat,X,Y)

  
  if (process.env.USER === "srini") {
    runProgram(`1
    3
    6
    4
    3 1
    1 2
    1 2`);
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