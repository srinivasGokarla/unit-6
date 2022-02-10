function runProgram(input) {
    input = input.trim().split("\n")
    var[N,K] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
    //console.log(N,K,arr)
    
    console.log(upperbound(arr,K))
      }
   
      function upperbound(arr,K) {
          var lo = 0, hi = arr.length - 1;
          while(lo <= hi) {
            var  mid = (lo + Math.floor((hi-lo) / 2));

           if(K === arr[mid] && arr[mid+1] != K) {
               return mid + 1;
           } else if(K === arr[mid]) {
               lo = mid+1;
           } else if(K < arr[mid]) {
               hi = mid-1;
           } else {
               lo = mid + 1;
           }

         } if(arr[mid] < K ) {
               return mid+1;

         }else {
             return mid;
         }

              }

      if (process.env.USERNAME === "srini") {
        runProgram(`10 3
        0 2 4 4 5 5 7 7 9 10`);
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