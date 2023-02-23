// wizard.js
let actionState = "attack1";
const actionSelect = document.getElementById('wizardActions');

actionSelect.addEventListener('change', (e) => {
	actionState = e.target.value;
});

const wizCanvas = document.getElementById('wizardCanvas');
const context = wizCanvas.getContext('2d');

wizCanvas.width = window.innerWidth;
wizCanvas.height = window.innerHeight;

// Variables
let spriteWidth = 0;
let spriteHeight = 0;
let gameFrame = 0;
const staggerFrames = 10;

const spriteAnimations = {
	attack1: {
		loc: [],
		src: ['./assets/images/attack1.png', './assets/images/charge1.png'],
		numColumns: [7, 9],
		numRows: [1, 1]
	}
};

for (let k = 0; k < spriteAnimations[actionState].src.length; k++) {
	let src = spriteAnimations[actionState].src[k];
	let numColumns = spriteAnimations[actionState].numColumns[k];
	let numRows = spriteAnimations[actionState].numRows[k];

	spriteWidth = Math.floor(document.getElementById('wizardCanvas').width / numColumns);
	spriteHeight = Math.floor(document.getElementById('wizardCanvas').height / numRows);

	for (let i = 0; i < numRows; i++) {
		for (let j = 0; j < numColumns; j++) {
			let positionX = j * spriteWidth;
			let positionY = i * spriteHeight + k * spriteHeight * numRows;
			spriteAnimations[actionState].loc.push({
				x: positionX,
				y: positionY
			});
			console.log(`Position ${i * numColumns + j}: x:${positionX} y:${positionY}`);
		}
	}
}

console.log(spriteAnimations.attack1.loc, spriteAnimations.attack1.src);


function animate() {
	let currentAnimation = spriteAnimations[actionState];
	let totalFrames = currentAnimation.loc.length;
	let position = Math.floor(gameFrame / staggerFrames) % totalFrames;
	let currentLoc = currentAnimation.loc[position];
	frameX = currentLoc.x;
	frameY = currentLoc.y;

	context.clearRect(0, 0, wizCanvas.width, wizCanvas.height);

	let imageIndex = 0;
	let numColumns, numRows, numFrames, sheetWidth, sheetHeight;

	for (let i = 0; i < currentAnimation.src.length; i++) {
		let image = new Image();
		image.src = currentAnimation.src[i];

		if (image.complete) {
			numColumns = currentAnimation.numColumns[i];
			numRows = currentAnimation.numRows[i];
			numFrames = numColumns * numRows;
			sheetWidth = spriteWidth * numColumns;
			sheetHeight = spriteHeight * numRows;

			imageIndex = Math.floor(position / numFrames) % numFrames;

			if (actionState === "attack" && position === totalFrames - 1) {
				actionState = "charge";
				gameFrame = 0;
				position = 0;
				currentAnimation = spriteAnimations[actionState];
				totalFrames = currentAnimation.loc.length;
				currentLoc = currentAnimation.loc[position];
				frameX = currentLoc.x;
				frameY = currentLoc.y;
				break;
			}

			if (actionState === "charge") {
				let distance = (gameFrame - (totalFrames - 1) * staggerFrames) * 2;
				context.drawImage(image, frameX, frameY, spriteWidth, spriteHeight, distance, 0, spriteWidth, spriteHeight);
			} else {
				context.drawImage(image, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight, sheetWidth, sheetHeight);
			}
		} else {
			image.onload = function () {
				numColumns = currentAnimation.numColumns[i];
				numRows = currentAnimation.numRows[i];
				numFrames = numColumns * numRows;
				sheetWidth = spriteWidth * numColumns;
				sheetHeight = spriteHeight * numRows;

				imageIndex = Math.floor(position / numFrames) % numFrames;

				if (actionState === "attack" && position === totalFrames - 1) {
					actionState = "charge";
					gameFrame = 0;
					position = 0;
					currentAnimation = spriteAnimations[actionState];
					totalFrames = currentAnimation.loc.length;
					currentLoc = currentAnimation.loc[position];
					frameX = currentLoc.x;
					frameY = currentLoc.y;
					return;
				}

				if (actionState === "charge") {
					let distance = (gameFrame - (totalFrames - 1) * staggerFrames) * 2;
					context.drawImage(image, frameX, frameY, spriteWidth, spriteHeight, distance, 0, spriteWidth, spriteHeight);
				} else {
					context.drawImage(image, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight, sheetWidth, sheetHeight);
				}
			};
		}
	}

	gameFrame++;
	requestAnimationFrame(animate);
}


animate();
