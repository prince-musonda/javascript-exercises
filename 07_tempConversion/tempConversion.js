const convertToCelsius = function(value) {
  let conventedValue = (value - 32) * 5/9
  roundedTemperatureValue = conventedValue.toFixed(1);
  return Number(roundedTemperatureValue) 
};

const convertToFahrenheit = function(value) {
  let conventedValue = value * 9/5 + 32
  roundedTemperatureValue = conventedValue.toFixed(1);
  return Number(roundedTemperatureValue)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
