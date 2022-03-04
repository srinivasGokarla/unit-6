function spiral(n,mat){
    let mat1 = [];
    let top = 0;
    let left = 0;
    let right = n-1;
    let bottom = n-1;
    let count = 0;
    let size = n*n;
    while (count < size) {
        for(var cl = left; cl <= right && count <= size; cl++) {
         // console.log(mat[r][left])
          mat1.push(mat[bottom][cl])
          count++;
        }
        bottom--;
        for(var r = bottom; r >= top && count < size; r--) {
         // console.log(mat[bottom][cl])
          mat1.push(mat[r][right])
          count++;
        }
        right--;
        for(var cl = right; cl >= left && count < size; cl--) {
         // console.log(mat[r][right])
          mat1.push(mat[top][cl])
          count++;
      }
      top++;
    for(var r = top; r <= bottom ; r++) {
     // console.log(mat[top][cl])
      mat1.push(mat[r][left])
      count++;
    }
    top++;
    }  
    console.log(mat1.join(" "))
    }



function runProgram(input) {
   input = input.trim().split("\n")
   let test = +input[0];
   let line = 1;
   for(i=0;i<test;i++){
       let n = +input[line++]
       let mat = [];
       for(j=0;j<n;j++){
           mat.push(input[line++].trim().split(" ").map(Number));

       }

       spiral(n,mat)  
   }
    
}
 

   if (process.env.USERNAME === 'srini') {
     runProgram(`1
     3 
     1 2 3
     4 5 6
     7 8 9
     `)
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