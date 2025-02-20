
// Importing functions 
import { greet, celsiusToFahrenheit, factorial, reverseString } from './utilities.js';

greet('Gurpreet', 'Singh');  // Expected Output: Welcome John Doe to G@I College

const tempCelsius = 22;
console.log(`${tempCelsius}°C = ${celsiusToFahrenheit(tempCelsius)}°F`);

const num = 2;
console.log(`Factorial of ${num} = ${factorial(num)}`);

const text = " Welcome";
console.log(`Reversed Text: ${reverseString(text)}`);
