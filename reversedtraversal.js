function reversedTraversal(matrix) {
    let rows = matrix.length
    let cols = matrix[0].length
    let result = []

    for(let i = rows - 1; i >= 0; i--) {
        result.push(matrix[i][0])
    }
    for(let j = 1; j < cols; j++) {
        result.push(matrix[0][j])
    }
    for(let i = 1; i < rows; i++) {
        result.push(matrix[i][cols - 1])
    }
    console.log(result.join(" "))
}
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
reversedTraversal(matrix)