// console.log("Learning Methods\n");

// function addBoth(a, b) {
// 	return a + b;
// }

// console.log(addBoth(1, 2));

// // Paramaters = Palceholders for values;
// // Arguments = Actual values passed to the function;

// const fido = {
// 	woof: function () {
// 		return "Woof!";
// 	},
// };

// fido.woof();

// // Methods are functions that are properties of objects;
// console.log("I am a header".toUpperCase());
// let myString = "I was not written like this in my IDE. I have been low-cased.";
// console.log(myString.toLowerCase() + "\n" + myString);

// DOM Manipulation
//Array of Modal Data
const modalData = [
	{
		ID: "paramModal",
		label: "paramModalLabel",
		title: "Parameters",
		body: "Parameters are placeholders for values that are passed to the function when it is called.",
	},
	{
		ID: "argueModal",
		label: "argueModalLabel",
		title: "Arguments",
		body: "Arguments are the actual values passed to the function when it is called.",
	},
];

let displayModal = document.getElementById("displayModal");

displayModal.addEventListener('show.bs.modal', (event) => {
	// Button that triggered the modal
	let button = event.relatedTarget;
	// Extract info from data-bs-* attributes
	let recipient = button.getAttribute('data-bs-whatever');
	// If necessary, you could initiate an AJAX request here
	// and then do the updating in a callback.
	//
	// Update the modal's content.
	let modalTitle = displayModal.querySelector('.modal-title');
	let modalBody = displayModal.querySelector('.modal-body');

	for (let i = 0; i < modalData.length; i++) {
		if (recipient === modalData[i].ID) {
			modalTitle.textContent = modalData[i].title;
			modalBody.textContent = modalData[i].body;
		}
	}
});

// Form Input
let myChoiceUno = document.getElementById("myChoiceUno");
let myChoiceDos = document.getElementById("myChoiceDos");
let submitBtn = document.getElementById("submitBtn");
let result = document.getElementById("results");
let myChoices;

submitBtn.addEventListener("click", function (event) {
	event.preventDefault();
	myChoices = Number(myChoiceUno.value) + Number(myChoiceDos.value);

	if ((myChoiceUno.value == '' && myChoiceDos.value == '') || (myChoiceUno.value == null && myChoiceDos.value == null)) {
		result.textContent = `Please enter something! Dont' submit empty values.`;
	} else {
		if (myChoiceUno.value === myChoiceDos.value) {
			result.textContent = `You chose the same thing! \n\n
			${myChoiceUno.value} + ${myChoiceDos.value} =  ${myChoices}`;
		} else {
			result.textContent = `You chose different things! \n\n
			${myChoiceUno.value} + ${myChoiceDos.value} =  ${myChoices}`;
		}
	}
});


