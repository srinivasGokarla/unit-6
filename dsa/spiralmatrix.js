function spirallyTraversingAMatrix(N, matrix){
    //write code here
     
  var top = 0;
  var left = 0;
  var right = N-1; 
  var bottom = N-1; 
  var count = 0;
  var size = N * N;
  var mat1 = [];
   while(count < size){
    for(var cl = left; cl <= right && count < size; cl++) {
       mat1.push(matrix[top][cl]);
       count++;
}
    top++;
  
    for(var r = top; r <= bottom && count < size; r++){
      mat1.push(matrix[r][right]);
      count++;
    }
    right--;

    for(var cl = right; cl >= left && count < size; cl--){
      mat1.push(matrix[bottom][cl]);
      count++;
    }
    bottom--;

    for(var r = bottom; r >= top&& count < size; r--){
      mat1.push(matrix[r][left]);
      count++;
  }
  left++;
}
console.log(mat1.join(" "));
  
}
