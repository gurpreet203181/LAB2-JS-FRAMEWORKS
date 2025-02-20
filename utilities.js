
// First Function
export function greet(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
  }
  
  // Second Function
  export function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Third Function
  export function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  
  // Fourth Function
    export function reverseString(str) {
    return str.split('').reverse().join('');
  }
  