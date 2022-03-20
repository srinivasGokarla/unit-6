function runProgram(input) {
  input = input.trim().split("")
  let n = input.length;
  palindromecheck(n,input)
}
  function palindromecheck(n,input) {
//   let palindrome = "";
//   for(let i = 0; i < n; i++) {
//   if(input[i] != input[n-1-i]) {
//       console.log("Not palindrome");
      
//   } else {
// palindrome = palindrome + input[i]
//   }
// }
// if(palindrome = input) {
//     console.log("Palindrome")
// }
let pali = ""
for(let i = n-1; i >=0; i--) {
    pali = pali + input[i]
}
console.log(pali)
if(pali = input){
    console.log("Yes")
} else {
    console.log("No")
}
}

  if (process.env.USERNAME === "srini") {
    runProgram(`amma`);
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