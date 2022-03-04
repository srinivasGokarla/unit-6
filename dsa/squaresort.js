// function runProgram(input) {
//     input  = input.trim().split("\n")
//     var testcases = Number(input[0])
//     var line = 1;
//     for(var i = 0; i < testcases; i++) {
//     var n = Number(input[line++])
//     var arr = input[line++].trim().split(" ").map(Number)
// // console.log(arr,n,testcases)
// squresorted(arr,n) 
//     }
 
//   }
//   function squresorted(arr,n) {
    
//   }
  
//   if (process.env.USERNAME === "srini") {
//     runProgram(`1
//     5
//     -2 3 1 -4 6
//     `);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }
function runProgram(input) {
  
  var input=input.trim().split("\n");
  
  var t=+input[0];
  var line=1;
  
  for(let i=0;i<t;i++){
      var N=+input[line]
      line++
      var arr=input[line].trim().split(" ").map(Number)
      line++
      var ans=check(N,arr)
      console.log(ans.join(" "))
  }
}

function check(N,arr){
    
    var arr1=arr.map(e=>{
        return e*e
    })
    
    // console.log(arr)
    for( j=0;j<N-1;j++){
        
        for( k=0 ;k<N-1-j;k++){
            if(arr1[k]>arr1[k+1]){
                 var temp=arr1[k]
                arr1[k]=arr1[k+1]
                arr1[k+1]=temp
                
                var temp=arr[k]
                arr[k]=arr[k+1]
                arr[k+1]=temp
            }
        }
    }
 return arr
}
if (process.env.USER === "srini") {
  runProgram(`1
       5
       -2 3 1 -4 6`);
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