const sum = require('./sum')

describe('sum', () => {
    it('should return 3', () => {
        expect(sum(1,2)).toBe(3)
    })
})