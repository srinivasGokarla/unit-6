// Brute Force

// var arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
// var zero= [], one = [], two = []

// for(var i = 0; i < arr.length; i++) {
// if(arr[i] === 0) {// n
//     zero.push(arr[i])
// } else if(arr[i] === 1) {//n
//     one.push(arr[i])     
// } else { //n 
//     two.push(arr[i])
// }//3n
// }
// console.log(zero.join(" "),one.join(" "),two.join(" "))
// Time complexity is O(n)
//space complexity is O(n)




// count approach


// var arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
// var n = 12
// var count0 = 0, count1 = 0, count2 = 0;

// for(var i = 0; i < arr.length; i++) { //n
//     if(arr[i]=== 0) {
//         count0++
//     }else if(arr[i] === 1) {
//         count1++
//     } else {
//         count2++
//     }
// }

//         for (var i = 0; i < count0; i++){// count0 = 5 => 0 0 0 0 0 //n
//             arr[i] = 0;
//         }
           
//         for (var i = count0; i < (count0 + count1); i++) { // coun1 = 5 10 //n
//                 arr[i] = 1;
//             }
//         for (var i = (count0 + count1); i < n; i++) { //n
//                 arr[i] = 2;
//             }
            
//       console.log(arr.join(" ")) 

// Time complexity is O(n)
//space complexity is O(1)



// Dutch national flag algorithm is


    
//  var arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]; // mid = 0, lo = 0, arr[1],arr[1], 2// arr[2],arr[1]//hi--
//  var n = 12
//  console.log(dutch(arr,n))

//  function dutch(arr,n) {
//      var lo = 0, mid = 0, hi = n-1;
//      while(mid <= hi) {
//             if(arr[mid] == 0) {// swap(arr[lo], arr[mid])
//                 temp = arr[lo];
//                 arr[lo] = arr[mid];
//                 arr[mid] = temp;
//                 lo++;
//                 mid++;
//             } else if(arr[mid] == 1) {
//                 mid++;
//             } else { // swap(arr[mid], arr[hi])
//                 temp = arr[mid];
//                 arr[mid] = arr[hi];
//                 arr[hi] = temp;
//                 hi--;
//             }
             
//         }
//         return arr.join(" ")
//      }
 
// Time complexity is O(n)
//space complexity is O(1)