function runProgram(input) {
    input = input.trim().split("\n")
    var testcases = Number(input[0])
    var line = 1;
    for(var i = 0; i < testcases; i++) {
      var [M ,N] = input[line++].trim().split(" ").map(Number)
      var arr = input[line++].trim().split(" ").map(Number)
     //console.log(arr,N,M)   
     console.log(flowerManagement(N,arr))
     }
    }

 function flowerManagement(N,arr) {
    if(N === 0) {
    return true;
 }

 for(var i = 0; i < arr.length; i++) {
     if(arr[i] != 1 && arr[i-1] != 1 && arr[i+1] != 1) {
        arr[i] = 1
         N--;
     }if(N === 0) {
         return "Yes"
     }
 }
 return "No"
}
