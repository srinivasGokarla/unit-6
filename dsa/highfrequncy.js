function runProgram(input) {
    input = input.split('\n');
   var testcases = Number(input[0])
   var line = 1;
   for(var i = 0; i < testcases; i++) {
       var n = Number(input[line++])
       var arr = input[line++].trim().split(" ").map(Number)
     //  console.log(arr,N)
        freequency(arr,n)
   }
  
    }
  
  function freequency(arr,n){
    var obj = {}
    for(var i = 0; i < arr.length; i++)
{
    if(obj[arr[i]] == undefined)
    {
        obj[arr[i]] =1;
    }
    else 
    {
    obj[arr[i]]++;
}

}

 // console.log(obj)
  var ans = []
  var max = 0;
  for(k in obj) {
      if(max < obj[k]) {
          max = obj[k]
         ans.push(k)
      }
  }
  console.log(ans[ans.length-1])
}

  
  
      if (process.env.USERNAME === "srini") {
        runProgram(`2
        6
        1 4 4 4 5 3
        11
        1 2 3 4 5 4 3 2 1 3 4
       
        `);
    } else {
        process.stdin.resume();
        process.stdin.setEncoding("ascii");
        let read = "";
        process.stdin.on("data", function(input) {
            read += input;
        });
        process.stdin.on("end", function() {
            read = read.replace(/\n$/, "");
            read = read.replace(/\n$/, "");
            runProgram(read);
        });
        process.on("SIGINT", function() {
            read = read.replace(/\n$/, "");
            runProgram(read);
            process.exit(0);
        });
    }