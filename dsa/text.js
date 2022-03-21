function runProgram(input) {
    input = input.trim().split("\n");
    let [first,last] = input[0].trim().split(" ");
    let dob = input[1].trim().split("").map(Number);
    let res = input[2].trim();
 
    let ans = ""
 
    ans+=first[first.length-1]
    ans+=first[first.length-2]
    ans+=dob[5]
    ans+=dob[4]
    ans+=dob[3]
    ans+=dob[2]
    ans+=last[1]
    ans+=last[0]
 
    if(ans===res){
        console.log("Accept")
    }else{
     console.log("Not Accept")
    }
 
 
 }
  
    if (process.env.USERNAME === 'srini') {
      runProgram(`Gokarla Srinivas
      21199501
      Go1995as`)
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