const arr = [ 1, 2, 3, [1, 2, 3], 4, 5, 3];

const result = () => {
  const flatArray = arr.flat();
  const result = flatArray.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {})
  return result
}

console.log(result());
