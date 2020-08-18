const subtract = require('../js/subtract')

test('properly subtracts values', () => {
    expect(subtract(1, 2)).toBe(-1)
})