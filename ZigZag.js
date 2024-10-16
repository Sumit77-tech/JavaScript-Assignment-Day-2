function printZigZag(matrix) {
    let rows = matrix.length
    let cols = matrix[0].length
    let result = []
    for(let r = 0; r < rows; r++) {
        if(r % 2 == 0) {
            for(let c = cols - 1; c >= 0; c--) {
                result.push(matrix[r][c])
            } 
        }else {
            for(let c = 0; c < cols; c++) {
                result.push(matrix[r][c])
            }
        }
    }
    console.log(result.join(" "))
}
let matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1],
    [3, 2, 5, 4, 6],
    [7, 8, 9, 1, 2]
]
printZigZag(matrix)
