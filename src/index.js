
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined || matrix.length === 0) {
    return [];
  }
  return matrix
    .reduce((sum, current, i) => sum.concat((i+1) % 2 === 0 ? current.reverse() : current), []);;
}
