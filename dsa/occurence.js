function runProgram(input) {
    input = input.trim().split("\n");
    var [n,k] =  input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
  // console  console.log(n,arr,k)
   console.log(occurence(arr,n,k))
}
   function occurence(arr,n,k) {
    let l = 0,r=n-1,count=0
    while(l<r){
        if(arr[l] === k){
            count++
            l++;
        }
        if(arr[r] === k){
            count++;
            r--;
        }
        if(arr[l]!==k && arr[r]!==k){
            r--;
            l++;
        }
    }
    return count;
}


   

  if (process.env.USERNAME === "srini") {
    runProgram(`6 3
    2 3 3 3 6 9`);
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