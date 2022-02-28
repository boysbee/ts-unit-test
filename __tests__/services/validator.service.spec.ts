import {UtilsValidator} from '../../src/services/validator-service'
import {StringValidator} from '../../src/services/string-validator'
import {NumberValidator} from '../../src/services/number-validator'

describe("Validator",() => {
    const stringValidator = new StringValidator()
    const numberValidator = new NumberValidator()
    const utilsValidator = new UtilsValidator(stringValidator, numberValidator)

    
    describe("utils validator",() => {
    
        it.only("should be return true when input string is number",()=> {
            jest.spyOn(numberValidator,"isValid").mockReturnValue(true)
            expect(utilsValidator.isNumber('123')).toBe(true)
        })

        it("should be return false when input string is not numeric",()=> {
            jest.spyOn(numberValidator,"isValid").mockReturnValue(false)
            expect(utilsValidator.isNumber('test')).toBe(false)
        })

        it("should be return true when input string is string type",()=> {
            jest.spyOn(stringValidator,"isValid").mockReturnValue(true)
            expect(utilsValidator.isString('test')).toBe(true)
        })
        
    })
    
})

