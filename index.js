
// Importing functions 
import { greet, celsiusToFahrenheit, factorial, reverseString } from './utilities.js';

greet('John', 'Doe');  // Expected Output: Welcome John Doe to G@I College

const tempCelsius = 25;
console.log(`${tempCelsius}°C = ${celsiusToFahrenheit(tempCelsius)}°F`);

const num = 5;
console.log(`Factorial of ${num} = ${factorial(num)}`);

const text = "Hello World";
console.log(`Reversed Text: ${reverseString(text)}`);
