const removeFromArray = function (array, ...valuesToRemove) {
  console.log(valuesToRemove);
  const filteredArray = array.filter(
    (element) => !valuesToRemove.includes(element)
  );
  console.log(filteredArray);

  return filteredArray;
};
removeFromArray([1, 2, 3, 4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;
