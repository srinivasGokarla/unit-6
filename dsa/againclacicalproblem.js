function runProgram(input) {
    input = input.trim().split("\n")
    var n = Number(input[0]);
    
    var line = 1;
    for(var i = 0; i < n; i++){
        var str = input[line++].trim().split("")
       // console.log(str)
        console.log(againclassical(str));
    }
   }
  
  function againclassical(str){
      let top = str.length-1;
      let stk = [];
      var flag = 0;
      for(i = 0; i < str.length; i++) {
          if(str[i] == "(" || str[i] == "{" || str[i] == "[") {
              stk.push(str[i])
          } else {
              if(stk.length === 0) {
                  flag = 1;
                  break;
              } else {
                if( ( str[i] == ')' && stk[top] != '(' ) || ( str[i] == '}' && stk[top] != '{' ) || ( str[i] == ']' && stk[top] != '[' ) ){
                flag = 1;
                 break;
             } else {
                 stk.pop()
             }
              }
          }
          
          }
        
          if(flag === 1) {
            return "Not balanced"
        } else {
            if(stk.length === 0) {
                return "Balanced"
            } else {
                return "Not balanced"
            }
      }
  }

   
      if (process.env.USERNAME === "srini") {
        runProgram(`3
        {([])}
        ()
        ([]`);
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