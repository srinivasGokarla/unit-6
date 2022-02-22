function runProgram(input) {
    input = input.trim().split("\n")
    var[N,k] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
   console.log(arr,N,k)
    console.log(sortedArray(k,arr))
   }
   
   function sortedArray(k,arr){
       var lo = 0;
       var hi  = arr.length-1;
       
       if(arr.length === 0){
           return output
        }
       while (lo < hi){
       var mid = lo + Math.floor((hi-lo)/2);
       if(arr[mid] === k){
           return mid
       } else if(arr[mid] > arr[lo]) {
           if( k >= arr[lo] && k <= arr[mid] ){
               hi = mid;
           } else {
               lo = mid + 1
           }
       } else {
           if(k >= arr[mid] && (k <= arr[hi])){
               lo = mid+1
           }
           else {
               hi = mid
           }
       }
       }
       if(arr[lo] === k){
           return lo;
       }
       if(arr[hi]===k){
           return hi
       }
       return - 1;
   }
       
     if (process.env.USERNAME === "srini") {
        runProgram(`5 1
        3 4 5 1 2`);
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