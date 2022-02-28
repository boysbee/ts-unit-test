import { NumberValidator } from "./number-validator"
import { StringValidator } from "./string-validator"

export class UtilsValidator {
    stringValidator: StringValidator
    numberValidator : NumberValidator
    constructor(stringValidator: StringValidator, numberValidator: NumberValidator) {
        this.numberValidator = numberValidator
        this.stringValidator = stringValidator
    }

    isString(input: string): boolean {
        return this.stringValidator.isValid(input)
    }

    isNumber(input: string): boolean {
        return this.numberValidator.isValid(input)
    }
}

export default new UtilsValidator(new StringValidator(),new NumberValidator());