export class NumberValidator {    
    isValid(number: string): boolean {
        if(number === "") return false
        return /^\d*$/.test(number)
    }
}

export default new NumberValidator()
