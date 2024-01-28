export function isNumber(str: string) {
  // Use parseFloat to check if the string can be parsed into a number
  // isNaN checks if the result is NaN (Not-a-Number), which indicates it's not a number
  return !isNaN(parseFloat(str)) && isFinite(Number(str));
}
