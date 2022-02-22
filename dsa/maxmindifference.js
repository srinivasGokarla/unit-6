function runProgram(input) {
    input = input.split('\n')  
    for(var i=1; i<input.length; i+=2){
        var [n,m] = input[i].split(" ").map(Number)
        var arr = input[i+1].split(" ").map(Number);
        console.log(diff(arr,n,m))
    }
  }
  function diff(arr,n,m){
      for(var i = 0; i < arr.length; i++){
            var min = i
           for(var j = i+1; j < arr.length; j++){
              if(arr[min] > arr[j]){
                min = j
             }
           }
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
  }
  var  min = 0, max = 0;
  
  for(var i = 0,j = n-1; i < m; i++,j--)
      {
          min += arr[i];
          max += arr[j];
          
      }
      return (max-min)
   }
   if (process.env.USERNAME === "srini") {
    runProgram(`
    
    `);
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