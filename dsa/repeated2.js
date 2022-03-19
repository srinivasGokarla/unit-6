function runProgram(input) {
    input = input.trim().split("\n");
     var testcases = Number(input[0])
     var line = 1;
     for (var i = 0; i < testcases; i++) {
         var n = Number(input[line++])
         var arr = input[line++].trim().split(" ").map(Number)
        // console.log(n,arr)
        repeated(arr,n)
     }
    }
    
function repeated(arr,n){
    var obj = {}
    for(var i = 0; i < arr.length; i++)
{
    if(obj[arr[i]] == undefined)
    {
        obj[arr[i]] = 1;
    }
    else 
    {
    obj[arr[i]]++;
}

}

// console.log(obj)
  var ans = []
  var max = arr[0];
  for(k in obj) {
      if(max < obj[k]) {
          max = obj[k]
         ans.push(k)
      }
  }
  console.log(i,ans.join(" "))
}
  if (process.env.USERNAME === "srini") {
    runProgram(`3
    5
    1 2 3 3 4
    2
    1 1
    3
    1 2 2`);
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