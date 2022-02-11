function runProgram(input) {
    input = input.trim().split("\n")
     var testcases = Number(input[0])
     var line = 1;
     for(var i= 0; i < testcases; i++) {
         var N = Number(input[line++])
         var arr = input[line++].trim().split(" ").map(Number)
       //  console.log(N,arr)
       console.log(maximumSubArrayProduct(arr,N))

    }
    
}
function maximumSubArrayProduct(arr,N) {
    let minVal = arr[0];
    let maxVal = arr[0];
   
    let maxProduct = arr[0];
   
    for (var i = 1; i < N; i++)
    {
   
        if (arr[i] < 0)
        {
            let temp = maxVal;
            maxVal = minVal;
            minVal =temp;
           
        }
   
        maxVal = Math.max(arr[i], maxVal * arr[i]);
        minVal = Math.min(arr[i], minVal * arr[i]);
   
        maxProduct = Math.max(maxProduct, maxVal);
    }
    return maxProduct;
}
    
 
    if (process.env.USERNAME === "srini") {
      runProgram(`2
      3
      -3 -1 -2
      4
      4 5 5 2`);
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
    