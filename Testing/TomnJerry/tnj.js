// Get the dialogue box and text elements
const dialogueBox = document.getElementById('dialogue-box');
const speakerElement = document.getElementById('speaker');
const textElement = document.getElementById('text');

// Define the conversation between Tom and Jerry
const conversation = [
	{ speaker: 'Tom', text: 'Hi Jerry, what are you doing here?' },
	{ speaker: 'Jerry', text: 'I came to steal your cheese, as usual.' },
	{ speaker: 'Tom', text: 'Well, I\'m not going to let that happen. I\'ll catch you this time!' },
	{ speaker: 'Jerry', text: 'You always say that, Tom. But you never catch me!' },
	{ speaker: 'Tom', text: 'Just you wait and see, Jerry. I\'ll catch you sooner or later!' },
	{ speaker: 'Jerry', text: 'Good luck with that, Tom!' },
	{ speaker: 'Tom', text: 'I don\'t need luck, Jerry. I just need skill and determination.' }
];

// Define the delay between each message and the index of the current message
const delay = 1500;
let currentMessage = 0;

// Function to display the current message in the dialogue box
function displayMessage(message) {
	speakerElement.style.backgroundColor = (message.speaker === 'Tom') ? '#E91E63' : '#2196F3';
	speakerElement.title = message.speaker;
	textElement.innerText = message.text;
}

// Function to loop through the conversation and display each message
function displayConversation() {
	if (currentMessage >= conversation.length) {
		return;
	}

	const message = conversation[currentMessage];
	displayMessage(message);
	currentMessage++;
	setTimeout(displayConversation, delay);
}

// Start the conversation when the page is loaded
window.onload = function () {
	displayConversation();
};
