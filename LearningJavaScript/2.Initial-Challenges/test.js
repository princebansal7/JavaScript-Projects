'use strict';

// checking chrome debugger

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const getAmplitude = function (temperature) {
  let max = temperature[0];
  let min = temperature[0];
  for (let i = 1; i < temperature.length; i++) {
    if (temperature[i] === 'error') {
      continue;
    }

    if (max < temperature[i]) {
      max = temperature[i];
    }

    if (min > temperature[i]) {
      min = temperature[i];
    }
  }

  return max - min;
};

console.log(`Amplitude temperature of day is ${getAmplitude(temperature)}`);
