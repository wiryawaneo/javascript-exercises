const convertToCelsius = function(num) {
  return +((num-32)*(5/9)).toFixed(1);
};

const convertToFahrenheit = function(num) {
  return +(num*1.8+32).toFixed(1);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
