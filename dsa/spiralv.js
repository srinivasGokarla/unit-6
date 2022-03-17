function spiralTraversalV(N, matrix){
    //write code here
    let size = N*N;
    let count = 0;
    let top = 0, bottom = N-1, left = 0, right = N-1;
    let mat = []
    while(count < size) {
        for(let r = top; r <= bottom && count < size; r++) {
            mat.push(matrix[r][right])
            count++;
        }
        right--
        for(let cl = right; cl >= left&& count < size; cl--) {
            mat.push(matrix[bottom][cl])
            count++;
        }
        bottom--;
        for(let r = bottom; r >= top&& count < size; r--) {
            mat.push(matrix[r][left])
            count++;
        }
        left++;
        for(let cl = left; cl <= right&& count < size; cl++) {
            mat.push(matrix[top][cl])
            count++;
        }
        top++;
    }
  console.log(mat.join(" "))
}
