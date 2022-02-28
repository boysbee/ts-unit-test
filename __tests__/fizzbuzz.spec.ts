import {FizzBuzz} from '../src/fizzbuzz'

describe("FizzBuzz",() => {
    const fizzBuzz = new FizzBuzz()
    describe("fizzbuzz function",() => {

        test("it should return the same number when that input number not divide by 3 and 5",() => {
            expect(fizzBuzz.fizzBuzz(1)).toBe("1")
        })

        test("it shoud return fizz when input number that dividable by 3", () => {
            expect(fizzBuzz.fizzBuzz(3)).toBe("fizz")
        })

        test("it shoud return buzz when input number that dividable by 5", () => {
            expect(fizzBuzz.fizzBuzz(5)).toBe("buzz")
        })

        test("it should return fizzbuzz when input number that diviable by 3 and 5",() => {
            expect(fizzBuzz.fizzBuzz(45)).toBe("fizzbuzz")
        })

        
    })
})

