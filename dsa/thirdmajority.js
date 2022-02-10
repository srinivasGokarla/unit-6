function runProgram(input) {
    input = input.trim().split("\n")
    var n = Number(input[0])
   var arr = input[1].trim().split(" ").map(Number)
  //  console.log(n,arr)
    thirdMajority(arr,n)
}
    
   
    function thirdMajority(arr,n){
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
      var max = n/3;
      for(k in obj) {
          if(max < obj[k]) {
              max = obj[k]
             ans.push(k)
             console.log(ans)
          }
      }
     
    }
    
    
    
         
         if (process.env.USERNAME === "srini") {
           runProgram(`3
           3 2 3`);
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