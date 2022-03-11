function runProgram(input) {
     input = input.trim().split("\n")
    let n = Number(input[0])
    let array = []
    let arr = input[1].trim().split(" ").map(Number)
    let test = Number(input[2])
    let line = 3;
   
    for(let i = 0; i <test; i++) {
        let[l,r] = input[line++].trim().split(" ").map(Number)
        //console.log(n,arr,test,l,r)
       
        searchnumber(l,r,arr,array)
    }
   
    }
   
    function searchnumber(l,r,arr,array) {
        let count = 0;
         for(let i= 0; i < arr.length; i++) {
             if(l <= arr[i]  && r >= arr[i]) {
                 count++
             }
            
         }
         array.push(count)
       console.log(array.join(" "))
        
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`5
      10 1 10 3 4
      4
      1 10
      2 9
      3 4
      2 2`);
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
    