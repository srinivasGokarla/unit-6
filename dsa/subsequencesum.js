function runProgram(input) {
    input = input.trim().split("\n");
    let n = Number(input[0])
   let line = 1;
   let arr = []
   let path = new Array();
   for(i = 0; i < n; i++) {
       arr.push(Number(input[line++]))
      
   }
   //console.log(arr)
   printSubsequences(arr, 0, path);

}
function printSubsequences(arr, index, path)
{
 
  if (index == arr.length)
  {
   
    if (path.length > 0) {
   console.log(path)
    } 
  }
  else
  {
   
    printSubsequences(arr, index + 1, path);
 
    path.push(arr[index]);
 
 printSubsequences(arr, index + 1, path);
 
    path.pop();
   
  }
 return;

}

if (process.env.USERNAME === "srini") {
  runProgram(`3 
  1
  2
  3`);
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