export class StringValidator {
    isValid(input: string): boolean {
        return (typeof input === 'string')
    }
}

export default new StringValidator()