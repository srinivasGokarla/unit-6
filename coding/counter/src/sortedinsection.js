function runProgram(input) {
   let n1 = Number(input[0])
}
function findCommon(ar1, ar2, ar3, n1, n2, n3)
      {
       
        // Initialize starting indexes
        // for ar1[], ar2[] and ar3[]
        var i = 0,
          j = 0,
          k = 0;
 
        // Iterate through three arrays
        // while all arrays have elements
        while (i < n1 && j < n2 && k < n3)
        {
         
          // If x = y and y = z, print any of them and move ahead
          // in all arrays
          if (ar1[i] === ar2[j] && ar2[j] === ar3[k])
          {
            document.write(ar1[i] + " ");
            i++;
            j++;
            k++;
          }
 
          // x < y
          else if (ar1[i] < ar2[j]) i++;
           
          // y < z
          else if (ar2[j] < ar3[k]) j++;
           
          // We reach here when x > y and z < y, i.e., z is smallest
          else k++;
        }
      }

  if (process.env.USERNAME === "srini") {
    runProgram(`4
    1
    2
    3
    2
    2
    2
    2
    3
    2
    5
    2`);
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
  