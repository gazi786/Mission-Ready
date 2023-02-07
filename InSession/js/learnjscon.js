console.log("Exercises: 1.1 - Truthy and Falsy Values\n\n");
console.log(Boolean(false)); // false
console.log(Boolean(null)); // null
console.log(Boolean(undefined)); // undefined
console.log(Boolean(NaN)); // NaN
console.log(Boolean(0)); // 0
console.log(Boolean("")); // ""

console.log(Boolean(true)); // true
console.log(Boolean(1)); // 1

console.log("\n\nExercises: 1.2 - Boolean Conditions\n\n");
console.log(Boolean(1 && 1)); // true
console.log(Boolean(1 && 0)); // false
console.log(Boolean(0 && 1)); // false
console.log(Boolean(0 && 0)); // false
console.log(Boolean(1 || 1)); // true
console.log(Boolean(1 || 0)); // true
console.log(Boolean(0 || 1)); // true
console.log(Boolean(0 || 0)); // true
console.log(Boolean(!false)); // true
console.log(Boolean(!true)); // false
console.log(true && true && true && true && false); // false
console.log(true || false); // true

console.log("\n\nExercises: 1.3 - Logic Conditions\n\n");

let x = 4,
	y = 2,
	z = 0;

if (x == 4 && (!(y == 1) || z == 0)) {
	console.log("true");
} else {
	console.log("false");
}

console.log(2 == "2"); // true
console.log(2 === 2); // true
console.log(10 % 3); // 1
console.log(10 % 3 === 1); // true
console.log(true && false); // false
console.log(false || true); // true
console.log(true || false); // true

console.log("\n\nExercises: 1.4 - Objects\n\n");
const person = {
	firstName: "John",
	lastName: "Doe",
	age: 50,
	eyeColor: "blue"
};
const doggo = {
	name: "Fido",
	age: 3,
	breed: "Labrador",
	color: "black",
	weight: 50,
	loves: ["walks", "food", "sleeping"],
	owner: "John Doe"
};
console.log(person.firstName); // John
console.log(person.lastName); // Doe
console.log(doggo.name); // Fido
console.log(doggo.age); // 3
console.log(doggo.loves[1]); // food
console.log(doggo.owner); // John Doe

const kitty = {
	name: "Fluffy",
	age: 2,
	breed: "Persian",
	color: "white",
	weight: 5,
	loves: ["sleeping", "eating", "cuddling"],
	owner: "Jane Doe",
	favoriteColor: "blue",
	favoriteFood: "tuna"
};

if (doggo.name === "Fido" && doggo.age === 3) {
	console.log(doggo.breed + " " + doggo.color + "WOOF!");

} else {
	console.log("Not a dog");
}

console.log(kitty.name + "'s favorite color is " + kitty.favoriteColor + " and favorite food is " + kitty.favoriteFood);

console.log(`${doggo.name}'s owner is ${doggo.owner} and he loves to play with ${kitty.name} who is owned by ${kitty.owner}.`);

let address = {
	"street no.": "76",
	street: "Stewart Drive",
	suburb: "Newlands",
	city: "Wellington",
	state: "WLG",
	zip: "6037"
};

let person2 = {
	firstName: "John",
	lastName: "Doe",
	age: 50,
	eyeColor: "blue",
	favouriteNumber: 7,
	favouriteDay: "Friday"
};
console.log(person2);
person2.favouriteFood = "pizza";
console.log(person2);
delete person2.favouriteNumber;
delete person2.favouriteDay;
console.log(person2);

let student = {
	name: "John",
	rollNo: 12,
	course: "BCA",
	year: 3,
	semester: 6,
	totalMarks: 69
};

console.log(student);

if (student.totalMarks < 40) {
	console.log(`You need to work harder. You Failed! as your total marks are ${student.totalMarks}`);
}
else if (student.totalMarks >= 40 && student.totalMarks < 60) {
	console.log(`You Passed! with an Average Grade! Your total marks are ${student.totalMarks}`);
}
else if (student.totalMarks >= 60 && student.totalMarks < 80) {
	console.log(`You Passed! with a Good Grade! Your total marks are ${student.totalMarks}`);
} else if (student.totalMarks >= 80) {
	console.log(`You Passed! with an Excellent Grade! Your total marks are ${student.totalMarks}`);
} else {
	console.log(`No Marks Recorded`);
}

let myArray = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Strawberry", "Watermelon", "Grapes", "Peach", "Pear", "Cherry", "Kiwi", "Lemon", "Papaya", "Blueberry", "Raspberry", "Blackberry", "Pomegranate", "Apricot", "Plum", "Cantaloupe", "Mandarin", "Pomelo", "Clementine", "Jackfruit", "Durian", "Lychee", "Passionfruit", "Coconut", "Avocado", "Nectarine", "Fig", "Guava", "Honeydew", "Tangerine", "Mango", "Pineapple", "Strawberry", "Watermelon", "Grapes", "Peach", "Pear", "Cherry", "Kiwi", "Lemon", "Papaya", "Blueberry", "Raspberry", "Blackberry", "Pomegranate", "Apricot", "Plum", "Cantaloupe", "Mandarin", "Pomelo", "Clementine", "Jackfruit", "Durian", "Lychee", "Passionfruit", "Coconut", "Avocado", "Nectarine", "Fig", "Guava", "Honeydew", "Tangerine"];

console.log(myArray);
console.log(myArray.length);
console.log(myArray[0], myArray[9]);
console.log(myArray[myArray.length - 1]);

