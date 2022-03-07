function spiralTraversal(N, M, arr){
    
  var top = 0;
  var left = 0;
  var right = M-1; 
  var bottom = N-1; 
  var count = 0;
  var size = N * M;
  var mat1 = [];
   while(count < size){
    for(var r = top; r <= bottom && count < size; r++) {
       mat1.push(arr[r][left]);
       count++;
}
    left++;
  
    for(var cl = left; cl <= right && count < size; cl++){
      mat1.push(arr[bottom][cl]);
      count++;
    }
    bottom--;

    for(var r = bottom; r >= top && count < size; r--){
      mat1.push(arr[r][right]);
      count++;
    }
    right--;

    for(var cl = right; cl >= left&& count < size; cl--){
      mat1.push(arr[top][cl]);
      count++;
  }
  top++;
}
console.log(mat1.join(" "));

}
