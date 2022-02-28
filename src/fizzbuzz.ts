import { stringify } from "querystring"

export class FizzBuzz {    
    fizzBuzz(n: number): string {
        if(n % 3 == 0 && n % 5 == 0) return "fizzbuzz"
        if(n % 3 == 0) return "fizz"
        if(n % 5 == 0) return "buzz"
    
        return String(n)
    }
}

export default new FizzBuzz()