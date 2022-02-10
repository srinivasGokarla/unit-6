//Brute force

// var arr = [1, 2, 3, 4, 5];
// var n = arr.length;

// var x = arr[n-1], i;
// for(i = n-1; i > 0; i--)
// arr[i] = arr[i-1];
// arr[0] = x;  
 
// console.log(arr)

// Time complexity is O(n)
//space complexity is O(1)

// pointer approach 

var arr = [1, 2, 3, 4, 5];
var i = 0
var j = n-1
while(i != j){
    let temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j]= temp;
    i = i+1
}
console.log(arr)


// Time complexity is O(n)
//space complexity is O(1)