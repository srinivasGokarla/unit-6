function rotateBy90Clockwise(N, matrix){
    for(var i = 0; i < (N/2); i++) {
        for(var j = i; j < N-i-1; j++) {
            var temp = matrix[i][j]
            matrix[i][j] = matrix[N-j-1][i];
            matrix[N-j-1][i] = matrix[N-i-1][N-j-1];
            matrix[N-i-1][N-j-1] = matrix[j][N-i-1];
            matrix[j][N-i-1] = temp;
        }
    }
  for(var k= 0; k < matrix.length; k++) {
      console.log(matrix[k].join(" "))
  }
}
