function myFirstFucntion() {
	console.log("Hello World");
}
// Call function
myFirstFucntion();

console.log("\n\nExercise 1: Function with Parameters \n");
function mySecondFucntion(param1, param2) {
	console.log(`${param1} \n\n ${param2}`);

}
mySecondFucntion("Wassup", 2);

console.log("\n\nExercise 2: Functions - Return\n");
function RectangleArea(width, height) {
	return width * height;
}
console.log(RectangleArea(2, 3));

console.log("\n\nExercise 3: Functions - Return with Statements\n");
function isNotEmpty(str) {
	if (str == "") {
		return false;
	} else {
		return true;
	}
}

function isEven(number) {
	if (number % 2 == 0) {
		return true;
	} else {
		return false;
	}
}

console.log("\n\nExercise 4: Functions - Objects\n");
const person = {
	name: "John",
	hello: function () {
		console.log(`Hello ${this.name}`);
	}
}
person.hello();

console.log("\n\nExercise 5: Functions - Arrow Functions\n");
const person2 = () => {

};


