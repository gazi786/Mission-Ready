/**
 * Alshafaraz Gazi
 * Mission 02
 * 2023-02-15
 * 
 * This script creates a hangman game using HTML5 canvas.
 * 
 * #HOW IT WORKS
 * 
 * It uses the Document Object Model (DOM) to manipulate HTML elements and display the game on a web page.
 * 
 * It starts by declaring constants for all the relevant HTML elements used in the game such as the container for the letters, the options container, the input section for the user, and the container for a new game.
 * It then declares an object called options which holds arrays of words for four categories: fruits, animals, countries, and vegetables.
 * There are two global variables winCount and count which will be used to keep track of the number of wins and the count of the game. The chosenWord variable will be used to store the word that is randomly chosen from the categories in the options object.
 * The displayOptions() function is used to display the options buttons on the web page, by looping through the properties in the options object and creating a button for each one.
 * The blocker() function disables all the option buttons and the letter buttons, and removes the "hide" class from the new game container, making it visible.
 * The generateWord(optionValue) function is used to generate a random word from the selected category. It takes in a parameter optionValue which is used to identify which category has been selected. The function first highlights the selected category button and disables it, and then generates a random word from the chosen category. The chosen word is then displayed on the page as a series of dashes to represent each letter.
 * The generateLetterButtons() function is used to generate the letter buttons on the page. It loops through the alphabet and creates a button for each letter.
 * The Scoreboard class is used to create a scoreboard object which stores the player's name and the number of wins and losses. It has a method called displayScoreboard() which is used to display the scoreboard on the page. It also has a method called updateScoreboard() which is used to update the scoreboard when the user wins or loses a game. The scoreboard is stored in the local storage of the browser.
 * The WinCelebration() function creates a fireworks animation on the page to celebrate a win. This is done using the Fireworks.default library.
 * The loseCeleberation() function creates a canvas of sad face to celebrate a loss.
 * Th
 * The initializer() function is used to initialize the game (Called when page loads OR user presses new game). It is called at the end of the file.
 *  
 */

//Global variables
//Game Start variables
const modalOverlay = document.querySelector('.overlay');
const nameInput = document.querySelector('#playerNameInput');
const saveNameBtn = document.querySelector('#saveNameBtn');

const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const gameBoard = document.getElementById("gameBoard");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const hangman = document.getElementById("hangman-cv");
const resultText = document.getElementById("result-text");
const celebrations = document.querySelector('.celebration-container');
const celebContainer = document.querySelector('#celebrations');


//scoreboard variables
let wins = 0;
let losses = 0;
const scoreBoard = document.getElementById('scoreboard');
const sbClose = document.querySelector('.close-sb');
const sbOpen = document.querySelector('.open-sb');
const sbContainer = document.getElementById('scoreboard-container');
const resetSB = document.querySelector('#resetSB');

//Get Player Name and scores
let scores = [];

//Options values for buttons
let options = {
	fruits: [
		"Apple", "Blueberry", "Mandarin", "Pineapple", "Pomegranate", "Watermelon", "Strawberry", "Banana", "Orange", "Kiwi",
	],

	animals: [
		"Hedgehog", "Rhinoceros", "Squirrel", "Panther", "Walrus", "Zebra", "Tiger", "Lion", "Elephant", "Giraffe",
	],

	countries: [
		"Fiji", "Samoa", "Australia", "Zealandia", "Argentina", "France", "Tonga", "Mexico", "Italy", "Spain", "Brazil"
	],

	vegetables: [
		"Carrot", "Cucumber", "Broccoli", "Cabbage", "Onion", "Garlic", "Potato", "Tomato", "Spinach", "Cauliflower"
	],
};

//set player name
const setPlayerName = () => {
	let playerName = playerNameInput.value;
	if (playerName) {
		localStorage.setItem("name", playerName);
		gameBoard.classList.remove("hide");
		modalOverlay.classList.add("hide");
	}
};

//save Player name
saveNameBtn.addEventListener("click", setPlayerName);
//Get Player Name if any and return it
const getPlayerName = () => {
	let playerName = localStorage.getItem("name");
	if (!playerName) {
		gameBoard.classList.add("hide");
		sbOpen.classList.add("hide");
		modalOverlay.classList.remove("hide");
	}
	return playerName || "Player";
};

//count
let winCount = 0;
let count = 0;

let chosenWord = "";

//Display option buttons
const displayOptions = () => {
	optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
	let buttonCon = document.createElement("div");
	;
	for (let value in options) {
		buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
	}
	optionsContainer.appendChild(buttonCon);
};

//Block all the Buttons
const blocker = () => {
	let optionsButtons = document.querySelectorAll(".options");
	let letterButtons = document.querySelectorAll(".letters");
	//disable all options
	optionsButtons.forEach((button) => {
		button.disabled = true;
	});

	//disable all letters
	letterButtons.forEach((button) => {
		button.disabled.true;
	});
	newGameContainer.classList.remove("hide");
};

//Word Generator
const generateWord = (optionValue) => {
	let optionsButtons = document.querySelectorAll(".options");
	optionsContainer.innerHTML = `<h3>You have selected ${optionValue.toUpperCase()} category.</h3><hr>`;
	//If optionValur matches the button innerText then highlight the button
	optionsButtons.forEach((button) => {
		if (button.innerText.toLowerCase() === optionValue) {
			button.classList.add("active");
		}
		button.disabled = true;
	});
	//initially hide letters, clear previous word
	letterContainer.classList.remove("hide");
	userInputSection.innerText = "";

	let optionArray = options[optionValue];
	//choose random word
	chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
	chosenWord = chosenWord.toUpperCase();

	//replace every letter with span containing dash
	let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

	//Display each element as span
	userInputSection.innerHTML = displayItem;
};

//Celebration canvas
const WinCelebration = () => {
	const fireworks = new Fireworks.default(celebContainer, {

		hue: {
			min: 0,
			max: 360
		},
		acceleration: 1.00,
		brightness: {
			min: 45,
			max: 80
		},
		decay: {
			min: 0.015,
			max: 0.03
		},
		delay: {
			min: 25,
			max: 75
		},
		explosion: 5,
		flickering: 50,
		intensity: 30,
		friction: 0.97,
		gravity: 1.5,
		opacity: 0.5,
		particles: 90,
		traceLength: 3,
		traceSpeed: 10,
		rocketsPoint: {
			min: 50,
			max: 50
		},
		lineWidth: {
			explosion: {
				min: 1.00,
				max: 4.00
			},
			trace: {
				min: 0.1,
				max: 1.0
			}
		},
		lineStyle: 'round',
		mouse: {
			click: false,
			move: false,
			max: 1
		},
		sound: {
			enable: true,
			files: [
				'explosion0.mp3',
				'explosion1.mp3',
				'explosion2.mp3'
			],
			volume: { min: 52, max: 98 },
		}
	});

	// start fireworks
	fireworks.start();

	setTimeout(() => {
		fireworks.stop();
	}, 7000);
};

const loseCelebration = () => {

	celebContainer.width = window.innerWidth;
	celebContainer.height = window.innerHeight;

	let context = celebContainer.getContext("2d");

	let noOfFaces = 25;

	let faces = [];

	let animationId;

	let sadImg = new Image();
	sadImg.src = './assets/images/crying.png';
	sadImg.onload = draw;

	for (let i = 0; i < noOfFaces; i++) {
		let x = Math.floor(Math.random() * celebContainer.width);
		let y = Math.floor(Math.random() * celebContainer.height);
		faces[i] = new sadFaces(x, y);
	}

	function sadFaces(x, y) {
		this.x = x;
		this.y = y;

		this.fall = function () {
			let dir = Math.floor(Math.random() * 3);
			if (dir == 0) {
				this.x = this.x;
			} else if (dir == 1) {
				this.x = this.x - 1;
			} else if (dir == 2) {
				this.x = this.x + 1;
			}

			this.y = this.y + 1;

			if (this.y >= celebContainer.height) {
				this.y = 0;
			}
		};

		this.show = function () {
			context.drawImage(sadImg, this.x, this.y, 50, 50);
		};
	}

	function draw() {
		context.clearRect(0, 0, celebContainer.width, celebContainer.height);

		for (let i = 0; i < noOfFaces; i++) {
			faces[i].show();
			faces[i].fall();
		}
		animationId = window.requestAnimationFrame(draw);
	}

	setTimeout(() => {
		// Stop the animation
		window.cancelAnimationFrame(animationId);
		context.clearRect(0, 0, celebContainer.width, celebContainer.height);
	}, 5000);
};

//Scoreboard
class Scoreboard {
	constructor() {
		this.wins = 0;
		this.losses = 0;
		this.scoreboard = scoreBoard;
		this.openScoreboard = sbOpen;
		this.playerBoard = document.querySelector('#playerName');
		this.winBoard = document.querySelector('#wins');
		this.lossBoard = document.querySelector('#losses');
		this.player = getPlayerName();
		this.scores = [];
		this.loadData();

		// Load saved wins and losses
		if (localStorage.getItem("name")) {
			this.player = localStorage.getItem("name");
			this.playerBoard.innerHTML = this.player;
		}
		if (localStorage.getItem("wins")) {
			this.wins = parseInt(localStorage.getItem("wins"));
			this.winBoard.innerHTML = this.wins;
		}
		if (localStorage.getItem("losses")) {
			this.losses = parseInt(localStorage.getItem("losses"));
			this.lossBoard.innerHTML = this.losses;
		}
	}

	displayScoreboard() {
		this.scoreboard.style.width = "25%";
		this.openScoreboard.classList.add("hide");
	}

	hideScoreboard() {
		this.scoreboard.style.width = "0";
		this.openScoreboard.classList.remove("hide");
	}

	updateScoreboard(result) {
		if (result === "win") {
			this.wins += 1;
			this.winBoard.innerHTML = `${this.wins}`;
			localStorage.setItem("wins", this.wins);
		} else {
			this.losses += 1;
			this.lossBoard.innerHTML = `${this.losses}`;
			localStorage.setItem("losses", this.losses);
		}

		let score = {
			name: this.player,
			result: result,
		};
		this.scores.push(score);
		this.saveData();
	}

	saveData() {
		localStorage.setItem("scores", JSON.stringify(this.scores));
	}

	loadData() {
		const data = JSON.parse(localStorage.getItem("scores"));
		if (data) {
			this.scores = data;
		}
	}
	resetScoreboard() {
		this.wins = 0;
		this.losses = 0;
		this.scores = [];
		this.winBoard.innerHTML = ``;
		this.winBoard.innerHTML = `${this.wins}`;
		this.lossBoard.innerHTML = `${this.losses}`;
		localStorage.removeItem("name");
		localStorage.removeItem("wins");
		localStorage.removeItem("losses");
		localStorage.removeItem("scores");
		setInterval(() => {
			location.reload();
		}, 750);
	}
}

// Global instance of the Scoreboard class
const scoreboard = new Scoreboard();

//Display Scoreboard
const displayScoreboard = () => {
	sbOpen.addEventListener("click", () => {
		scoreboard.displayScoreboard();
	});
	sbClose.addEventListener("click", () => {
		scoreboard.hideScoreboard();
	});

	//Reset Scoreboard
	resetSB.addEventListener("click", () => {
		scoreboard.resetScoreboard();
	});
};

//Initial Function (Called when page loads OR user presses new game)
const initializer = () => {
	winCount = 0;
	count = 0;

	//Initially erase all content and hide letteres and new game button
	userInputSection.innerHTML = "";
	optionsContainer.innerHTML = "";
	letterContainer.classList.add("hide");
	newGameContainer.classList.add("hide");
	letterContainer.innerHTML = "";

	//For creating letter buttons
	for (let i = 65; i < 91; i++) {
		let button = document.createElement("button");
		button.classList.add("letters");
		//Number to ASCII[A-Z]
		button.innerText = String.fromCharCode(i);
		//character button click
		button.addEventListener("click", () => {
			let charArray = chosenWord.split("");
			let dashes = document.getElementsByClassName("dashes");
			//if array contains clciked value replace the matched dash with letter else dram on canvas
			if (charArray.includes(button.innerText)) {
				charArray.forEach((char, index) => {
					//if character in array is same as clicked button
					if (char === button.innerText) {
						//replace dash with letter
						dashes[index].innerText = char;
						//increment counter
						winCount += 1;
						//if winCount equals word lenfth
						if (winCount == charArray.length) {
							resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
							//block all buttons
							blocker();
							//on win function
							scoreboard.updateScoreboard('win');
							//celebration canvas
							WinCelebration();
						}
					}
				});
			} else {
				//lose count
				count += 1;
				//for drawing man
				drawHangMan(count);
				//Count==6 because head,body,left arm, right arm,left leg,right leg
				if (count == 6) {
					resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
					blocker();
					scoreboard.updateScoreboard('lose');
					//celebration canvas
					loseCelebration();
				}
			}
			//disable clicked button
			button.disabled = true;
		});
		letterContainer.append(button);
	}

	displayOptions();

	//activate the score board
	displayScoreboard();

	//Call to canvasCreator (for clearing previous canvas and creating initial canvas)
	let { initialDrawing } = canvasCreator();
	//initialDrawing would draw the frame
	initialDrawing();
};

//Canvas - Where the hangman is drawn
const canvasCreator = () => {
	let context = hangman.getContext("2d");
	context.beginPath();
	context.strokeStyle = "#000";
	context.lineWidth = 2;

	//For drawing lines
	const drawLine = (fromX, fromY, toX, toY) => {
		context.moveTo(fromX, fromY);
		context.lineTo(toX, toY);
		context.stroke();
	};

	const head = () => {
		context.beginPath();
		context.arc(70, 30, 10, 0, Math.PI * 2, true);
		context.stroke();
	};

	const body = () => {
		drawLine(70, 40, 70, 80);
	};

	const leftArm = () => {
		drawLine(70, 50, 50, 70);
	};

	const rightArm = () => {
		drawLine(70, 50, 90, 70);
	};

	const leftLeg = () => {
		drawLine(70, 80, 50, 110);
	};

	const rightLeg = () => {
		drawLine(70, 80, 90, 110);
	};

	//initial frame
	const initialDrawing = () => {
		//clear canvas
		context.clearRect(0, 0, context.canvas.width, context.canvas.height);
		//bottom line
		drawLine(10, 130, 130, 130);
		//left line
		drawLine(10, 10, 10, 131);
		//top line
		drawLine(10, 10, 70, 10);
		//small top line
		drawLine(70, 10, 70, 20);
	};

	return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

//draw the man
const drawHangMan = (count) => {
	let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
	switch (count) {
		case 1:
			head();
			break;
		case 2:
			body();
			break;
		case 3:
			leftArm();
			break;
		case 4:
			rightArm();
			break;
		case 5:
			leftLeg();
			break;
		case 6:
			rightLeg();
			break;
		default:
			break;
	}
};

//New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;