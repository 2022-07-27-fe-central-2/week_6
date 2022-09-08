
// method to get val converted to celsius (f - 32) * .5556
// method to get val converted to kelvin ((f - 32) * .5556) + 273.15

class Temperature {
  constructor(fahrenheit) {
    if (typeof(fahrenheit) !== 'number') {
      throw new TypeError('Type of fahrenheit must be a number');
    }
    if (fahrenheit < -459.67 || fahrenheit > 10**32) {
      throw new Error('Constructor argument must be within the bounds of -459.67 and 10^32')
    }
    this.fahrenheit = fahrenheit
  }

  convertToCelsius() {
    return (this.fahrenheit - 32) * .5556
  }

  convertToKelvin() {
    return ((this.fahrenheit - 32) * .5556) + 273.15
  }
}

module.exports = Temperature;
