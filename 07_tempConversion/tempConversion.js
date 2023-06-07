const convertToCelsius = function (tempFahrenheit) {
  tempCelsius = ((tempFahrenheit - 32) * 5) / 9;
  let roundedTemp = Math.round(tempCelsius * 10) / 10;
  console.log(roundedTemp);
  return roundedTemp;
};

const convertToFahrenheit = function (tempCelsius) {
  tempFahrenheit = (tempCelsius * 9) / 5 + 32;
  let roundedTemp = Math.round(tempFahrenheit * 10) / 10;
  console.log(roundedTemp);
  return roundedTemp;
};
convertToCelsius(32);
convertToFahrenheit(0);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
