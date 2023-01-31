console.log("Exercise 1 - Using Const\n");

const firstAndLastName = "Alshafaraz Gazi";
const age = 31;
const ageCalc = 2023 - 1991;

console.log(firstAndLastName + " is " + age + " years old. However, he will be " + ageCalc + " years old in 2023.");

console.log("\nExercise 2 - Backticks\n");
console.log(`"Hello Readers...!!!"`);

const sheSaid = '"Shall we go?" she said.';

const sayPlease = 'Remember to say "please" \'and\' "thank you" to your parents.';

console.log(sheSaid);
console.log(sayPlease);

console.log("Joining strings: \n" + sheSaid + "\t" + sayPlease);
console.log("Get number of characters in a string: \n" + sheSaid.length + "\t" + sayPlease.length);

console.log("Get character in a string at certain location: \n" + sheSaid[3]);

console.log("Get character in a string at certain location: \n" + sheSaid[3]);

console.log('\n\nExercise 3 - String Concatenation\n');
const one = '"Concentrate all your thoughts ';
const two = ' upon the work in hand.The sun\'s rays do not';
const three = ' burn until brought to a focus."';
const four = ' - Alexander Graham Bell';

console.log("Alexandar Combines:\t" + one + two + three + four);
console.log("Alexandar Combines has:\t" + (one.length + two.length + three.length + four.length) + " characters");

console.log('\n\nExercise 4.1 - Body BMI\n');
const massMark = 100;//kg
const heightMark = 1.83;//meters
const BMI = massMark / (heightMark * heightMark);
console.log("Mark's BMI is:\t" + BMI + " kg/m^2");

console.log('\n\nExercise 4.2 - Cost of Book\n');
const bookPrice = 5; // $5
const bookQuantity = 10; // 10 books
const bookTotal = bookPrice * bookQuantity;
console.log("Total cost of 10 books is:\t" + bookTotal + " $");

console.log('\n\nExercise 5 - Basic Math\n');
const a = 10;
const b = 20;
const c = 30;
console.log(a + b + c);
console.log(c - a);
console.log(c * b);
console.log(c / a);
console.log(c % a);
console.log(Math.pow(a, b));
console.log(Math.sqrt(a));
console.log(typeof (a + 'b'));
