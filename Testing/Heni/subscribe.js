const form = document.getElementById("form");
const email = document.getElementById("email");
const errorElement = document.getElementById("error");
const subscribeBtn = document.getElementsByClassName("button");

form.addEventListener(`click`, (e) => {
	let messages = [];
	if (email.value === '' || email.value == null) {
		messages.push(`Enter your email address here`);
	} else {
		if (messages.length > 0) {
			e.preventDefault();
			errorElement.innerText = messages.join(`, `);
		} else if (email.value <= 320) {
			messages.push(`Thanks for subscribing!`);
		}
	}

});