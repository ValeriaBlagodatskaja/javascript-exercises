const sumAll = function (x, y) {
  let max = Math.max(x, y);
  let min = Math.min(x, y);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  if (x < 0 || y < 0 || isNaN(x) || isNaN(y)) {
    return "ERROR";
  }
  if (Number(x) !== x || Number(y) !== y) {
    return "ERROR";
  }
  return sum;
};
sumAll([1, 4]);
// Do not edit below this line
module.exports = sumAll;
