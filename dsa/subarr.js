var arr = [1,5,0];
var n = 3

// function findCount(arr, n)
// {

//     let prefix_sum = Array.from({length: n},(_, i) => 0);

//     prefix_sum[0] = arr[0];

//     for (let i = 1; i < n; i++)
//         prefix_sum[i] = prefix_sum[i - 1] + arr[i];
//     let suffix_sum = Array.from({length: n},(_, i) => 0);

//     suffix_sum[n - 1] = arr[n - 1];

//     for (let i = n - 2; i >= 0; i--)
//         suffix_sum[i]
//             = suffix_sum[i + 1] + arr[i];

//     let s = 1, e = 1;
//     let curr_subarray_sum = 0, count = 0;

   
//     while (s < n - 1 && e < n - 1) {
//         while (e < n - 1
//                && curr_subarray_sum
//                       < prefix_sum[s - 1]) {
//             curr_subarray_sum += arr[e++];
//         }

//         if (curr_subarray_sum <= suffix_sum[e]) {
        
//             count++;
//         }

    
//         curr_subarray_sum -= arr[s++];
//     }


//     return count;
// }
// console.log(findCount(arr, n))
// function sumFirst(arr, n){
//     var mp = new Map();
//     var suf = 0;
 
//     for (var i = n - 1; i >= 0; i--)
//     {
//         suf += arr[i];
//         mp.set(suf, i);
//     }
 
//     var pre = 0;
//     var maxi = -1;
 
//     for (var i = 0; i < n; i++)
//     {
//         pre += arr[i];

//         if (mp.get(pre) > i)
//         {
//             if (pre > maxi)
//             {
//                 maxi = pre;
//             }
//         }
//     }

//     if (maxi == -1)
//         return 0;
//     else
//         return maxi;
// }
// console.log(sumFirst(arr, n))


function sumFirst(arr, n){

        var l = 0;
        var r = n - 1;
 
        var first = arr[l];
        var last = arr[r];
        var answer = 0;
 
        while (l < r) {
 
            if (first == last){
                answer = Math.max(answer, first);
                l++;
                r--;
                first += arr[l];
                last += arr[r];
            } else if (first > last)  {
                r--;
                last += arr[r];
            } else {

                l++;
                first += arr[l];
            }
        }
        return answer;
    }
 console.log(sumFirst(arr, n))