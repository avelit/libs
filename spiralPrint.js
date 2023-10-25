function equalArray(a, b) {
  if (!(a instanceof Array) || !(b instanceof Array)) {
    return false
  }
  if (a.length === b.length) {
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function spiralPrint(matrix) {
  let res = [];

  if (!(matrix instanceof Array) || matrix.length === 0) {
    return res;
  }
  if (matrix.length === 1)
    return matrix;

  let lengthi = matrix.length;
  let lengthj = matrix[0].length;
  let visited = [];
  for (let i = 0; i < lengthi + 2; i++) {
    visited[i] = []
    visited[i][0] = true;
    visited[i][lengthj + 1] = true;
  }
  for (let j = 0; j < lengthj + 2; j++) {
    visited[0][j] = true;
    visited[lengthi + 1][j] = true;
  }

  let di = [0, 1, 0, -1];
  let dj = [1, 0, -1, 0];
  let i = 0, j = 0, direction = 0;

  for (let k = 0; k < lengthi * lengthj; k++) {
    res.push(matrix[i][j]);
    visited[i + 1][j + 1] = true;
    i += di[direction];
    j += dj[direction];

    if (visited[i + 1][j + 1]) {
      i -= di[direction];
      j -= dj[direction];
      direction = (direction + 1) % 4;
      i += di[direction];
      j += dj[direction];
    }
  }
  return res;
}


if (!equalArray(spiralPrint(), [])) console.log('error equal empty')
if (!equalArray(spiralPrint([1]), [1])) console.log('error equal 1 line')
let a = [[1, 2,  3,  4],
         [5, 6,  7,  8],
         [9, 10, 11, 12]];
if (!equalArray(spiralPrint(a), [1,  2,  3, 4, 8, 12, 11, 10, 9, 5, 6, 7])) console.log('error equal 3x4')

console.log("%s", spiralPrint(a));
