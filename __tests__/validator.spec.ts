import { isValidNumber } from '../src/validator'

describe("validator function",() => {
    describe("validate number",() => {
        test('it should return true when validated input valid number',() => {
            const validNumber:string  = '123'
            expect(isValidNumber(validNumber)).toBe(true)
        })

        test('it should return false when validated input invalid number format',() => {
            const inValidNumber:string  = 'wrong number'
            expect(isValidNumber(inValidNumber)).toBe(false)
        })

        test('it should return false when validated input blank string',() => {
            const inValidNumber:string  = ' '
            expect(isValidNumber(inValidNumber)).toBe(false)
        })

        test('it should return false when validated input empty string',() => {
            const inValidNumber:string  = ''
            expect(isValidNumber(inValidNumber)).toBe(false)
        })
    })

})

