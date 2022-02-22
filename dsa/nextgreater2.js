function runProgram(input) {
    input = input.trim().split("\n");
    var testcases = Number(input[0])
    var line = 1;
    for(var i = 0; i < testcases; i++) {
        var n = Number(input[line++])
        var arr = input[line++].trim().split(" ").map(Number)
       // console.log(n,arr)
       console.log(NextGreaterElement(arr,n))
  }
}
  function NextGreaterElement(arr,n){
      var res = [-1], stack = [arr[n-1]]
    for(var i = n-2; i >= 0; i--) {
     while(stack [stack.length-1] <= arr[i]){
        stack.pop()
     }if(stack.length === 0){
         res.push(-1);
         stack.push(arr[i])
     } else {
         res.push(stack[stack.length-1]);
         stack.push(arr[i])
     }
  }
  return res.reverse().join(" ");
  }

if (process.env.USERNAME === "srini") {
 runProgram(`1
 4
 1 3 2 4`);
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