const expect = require('chai').expect
const Temperature = require('../temperature')

describe('Temperature Class', () => {
  describe('Instantiating Temperature Class', () => {
    it('should throw error when constructor argument is not of type number', () => {
      expect(() => {
        const nonNumberTemp = new Temperature('550')
      }).to.throw(TypeError, 'Type of fahrenheit must be a number')
    });
    it('should throw error if constructor argument is less than -459.67 or greater than 10 ** 32', () => {
      expect(() => {
        const tooSmallNumberTemp = new Temperature(-500)
      }).to.throw(Error, 'Constructor argument must be within the bounds of -459.67 and 10^32')
    })
  })
  describe('convertToCelsius method', () => {
    it('should convert 32 degrees f to 0 degrees celsius', () => {
      const temp32 = new Temperature(32)
      expect(temp32.convertToCelsius()).to.equal(0)
    })
  })
  describe('convertToKelvin method', () => {
    it('should convert 32 degrees f to 273.15 degree kelvin', () => {
      const temp32 = new Temperature(32)
      expect(temp32.convertToKelvin()).to.equal(273.15)
    })
  })
})
