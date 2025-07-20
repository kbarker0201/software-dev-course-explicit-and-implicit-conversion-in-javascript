/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2;
/* Add the Number() method in the above line of code to change 5 to a number so it can
be subtracted from */
console.log("The result is: " + result);

let isValid = Boolean("false");
/* Here, the Boolean() method is already used to convert the string to a boolean so it
can be properly used in the next line of code */
if (isValid) {
    console.log("This is valid!");
}

let age = Number("25");
/* Add the Number() method here to change age to a number rather than a string so it 
can be used in the mathematical formula that comes in the next line */
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

let numCattle = "13";
let numSheep = 24;
let totalLivestock = Number(numCattle) + numSheep;

console.log(totalLivestock);

let tulipBouqets = 30;
let roseBouqets = "35";
let totalBouqets = tulipBouqets = Number(roseBouqets);

console.log("Total number of bouqets: " + 25);
