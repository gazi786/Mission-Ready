
let actionState = "action1";
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
	action1: {
		loc: [],
		src: ['./assets/images/attack1.png', './assets/images/charge1.png'],
		sizeOfSpritesheet: [[896, 128], [576, 128]],
		numColumns: [7, 9],
		numRows: [1, 1]
	}
};

for (let k = 0; k < spriteAnimations[actionState].src.length; k++) {
	let src = spriteAnimations[actionState].src[k];
	let numColumns = spriteAnimations[actionState].numColumns[k];
	let numRows = spriteAnimations[actionState].numRows[k];
	let fullWidthofSS = spriteAnimations[actionState].sizeOfSpritesheet[k][0];
	let fullHeightofSS = spriteAnimations[actionState].sizeOfSpritesheet[k][1];

	let positionX;
	let positionY;
	let shiftOffX = 0;

	spriteWidth = Math.floor(fullWidthofSS / numColumns);
	spriteHeight = Math.floor(fullHeightofSS / numRows);

	for (let i = 0; i < numRows; i++) {
		for (let j = 0; j < numColumns; j++) {
			positionX = j * spriteWidth;
			positionY = 0;

			if (k === 1) { // charge sprite sheet
				shiftOffX = spriteWidth * 10;
				positionX += shiftOffX;
			}

			spriteAnimations[actionState].loc.push({
				x: positionX,
				y: positionY
			});
		}
	}
}



function animate() {
	let currentAnimation = spriteAnimations[actionState];
	let totalFrames = currentAnimation.loc.length;
	let position = Math.floor(gameFrame / staggerFrames) % totalFrames;
	let currentLoc = currentAnimation.loc[position];
	frameX = currentLoc.x;
	frameY = currentLoc.y;
	const tableHeight = 400;
	let minFrame = 0;
	let currentFrame = 0;

	let sprtieLocationY = wizCanvas.height - tableHeight;


	context.clearRect(0, 0, wizCanvas.width, wizCanvas.height);

	let imageIndex = 0;
	let numColumns, numRows, numFrames, sheetWidth, sheetHeight;

	// console.log(`position: ${position} totalFrames: ${totalFrames} gameFrame: ${gameFrame} staggerFrames: ${staggerFrames}`);

	console.log(`frameX:  ${frameX} frameY: ${frameY}`);
	let x = wizCanvas.width / 2 - spriteWidth / 2;
	let y = wizCanvas.height / 2 - spriteHeight / 2;




	for (let i = 0; i < currentAnimation.src.length; i++) {
		let image = new Image();
		image.src = currentAnimation.src[i];


		numColumns = currentAnimation.numColumns[i];
		numRows = currentAnimation.numRows[i];
		numFrames = numColumns * numRows;
		sheetWidth = spriteWidth * numColumns;
		sheetHeight = spriteHeight * numRows;


		context.drawImage(image, frameX, frameY, spriteWidth, spriteHeight, x, y, spriteWidth, spriteHeight);
	}
	if (this.currentFrame < this.totalFrames) {
		this.currentFrame++;
	} else {
		this.currentFrame = this.minFrame;
	}

	gameFrame++;
	requestAnimationFrame(animate);
}


animate();
