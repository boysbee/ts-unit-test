export const isValidNumber = (number: string) => {
    if(number === "") return false

    return /^\d*$/.test(number)
}