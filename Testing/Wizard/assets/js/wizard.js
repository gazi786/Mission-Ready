// Select the canvas and get its 2D context
const canvas = document.querySelector('#wizardCanvas');
const context = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define sprite animation object
const spriteAnimations = {
	attack1: [
		{
			loc: [],
			src: './assets/images/attack1.png',
			sizeOfSpritesheet: [896, 128],
			numColumns: 7,
			numRows: 1,
			currentFrameIndex: 0,
			speed: 7,
			isLooping: true,
			isFinished: false,
			positionX: 0,
			positionY: canvas.height / 2,
		},
		{
			loc: [],
			src: './assets/images/charge1.png',
			sizeOfSpritesheet: [576, 128],
			numColumns: 9,
			numRows: 1,
			currentFrameIndex: 0,
			speed: 7,
			isLooping: true,
			isFinished: false,
			positionX: 150,
			positionY: canvas.height / 2,
		},
	],
};

// Set the initial action state
let actionState = 'attack1';

// Listen for action change
const actionSelect = document.getElementById('wizardActions');
actionSelect.addEventListener('change', (e) => {
	actionState = e.target.value;
});

// Load sprite images
const images = {};
const loadImages = () => {
	const spriteSheetPromises = [];
	for (const action in spriteAnimations) {
		for (const sprite of spriteAnimations[action]) {
			spriteSheetPromises.push(new Promise((resolve) => {
				images[sprite.src] = new Image();
				images[sprite.src].src = sprite.src;
				images[sprite.src].onload = resolve;
			}));
		}
	}
	return Promise.all(spriteSheetPromises);
};

// Draw the current sprite frame
const drawSprite = (sprite, x, y) => {
	const spriteWidth = Math.floor(sprite.sizeOfSpritesheet[0] / sprite.numColumns);
	const spriteHeight = Math.floor(sprite.sizeOfSpritesheet[1] / sprite.numRows);
	context.drawImage(images[sprite.src], spriteWidth * sprite.currentFrameIndex, 0, spriteWidth, spriteHeight, x, y, spriteWidth, spriteHeight);
};

let gameFrame = 0;
let delayFrames = 2; // number of frames to delay the charge animation
let currentDelayFrame = 0; // current frame of the delay

const animate = () => {
	// Clear the canvas
	context.clearRect(0, 0, canvas.width, canvas.height);

	// Get the current action state and sprites
	const sprites = spriteAnimations[actionState];

	// Loop through each sprite and draw it
	sprites.forEach((sprite) => {
		// Get the current sprite position
		const x = sprite.positionX + sprite.currentFrameIndex * 10;
		const y = sprite.positionY;

		// Draw the sprite
		drawSprite(sprite, x, y);

		// Increment the current frame index and reset it if necessary
		sprite.currentFrameIndex = (gameFrame % sprite.speed === 0) ? (sprite.currentFrameIndex + 1) % sprite.numColumns : sprite.currentFrameIndex;

		// If the current sprite is the charge sprite and the delay counter is not finished, increment the delay counter
		if (sprite.src === './assets/images/charge1.png' && currentDelayFrame < delayFrames) {
			currentDelayFrame++;
		}

		// If the current sprite is the charge sprite and the delay counter is finished, start the animation
		if (sprite.src === './assets/images/charge1.png' && currentDelayFrame >= delayFrames) {
			sprite.currentFrameIndex = (gameFrame % sprite.speed === 0) ? (sprite.currentFrameIndex + 1) % sprite.numColumns : sprite.currentFrameIndex;
		}

	});

	// Increment the game frame
	gameFrame++;

	// Request the next animation frame
	requestAnimationFrame(animate);
};



// Start the animation loop once all images are loaded
loadImages().then(() => {
	animate();
});

