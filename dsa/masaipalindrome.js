function runProgram(input) {
    input = input.trim().split("\n")
    var S = input[0].trim().split("")
   // console.log(S)
   MasaiPalindrome(S)
}
function MasaiPalindrome(S) {
   let maxLength = 1, start = 0;
  
   for(var i = 0; i < S.length; i++) {
       for(var j = i; j < S.length; j++) {
                let flag = 1;
      
                // Check palindrome
                for (let k = 0; k < (j - i + 1) / 2; k++)
                    if (S[i + k] != S[j - k])
                        flag = 0;
      
                // Palindrome
                if (flag!=0 && (j - i + 1) > maxLength) {
                    start = i;
                    maxLength = j - i + 1;
       }
       
   }
}
console.log(maxLength)
       }
    if (process.env.USERNAME === "srini") {
      runProgram(`thisracecarisgood`);
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
    