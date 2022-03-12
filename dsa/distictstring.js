function runProgram(input) {
    input = input.trim().split("\n")
let str = input[0].trim()
let str2 =  input[1].trim()
let s1 = str.toLowerCase().split("")
let s2 = str2.toLowerCase().split("")
let K = Number(input[2])
  // console.log(s1,s2,K)
  countPairs(s1, s2)
    
   }
   function countPairs(s1, s2)
    {
 
        let freq1 = new Array(26);
        let freq2 = new Array(26);
        freq1.fill(0);
        freq2.fill(0);
        let i, count = 0
        for (i = 0; i < s1.length; i++) {
            freq1[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
        }
           
        for (i = 0; i < s2.length; i++) {
            freq2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
        }
        for (i = 0; i < 26; i++) {
            count += (Math.min(freq1[i], freq2[i]));
        }
            
 console.log(count)
    }
     
   
   if (process.env.USERNAME === "srini") {
     runProgram(`SapqrSapqr
     SAPQick
     3`);
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
   