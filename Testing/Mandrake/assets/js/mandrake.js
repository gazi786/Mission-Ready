window.addEventListener('load', function () {
	const mandrakeCV = document.getElementById('mandrakeCV');
	const context = mandrakeCV.getContext('2d');

	mandrakeCV.width = window.innerWidth;
	mandrakeCV.height = window.innerHeight;

	// Mandrake
	class Mandrake {
		constructor(canvasWidth, canvasHeight) {
			this.canvasWidth = canvasWidth;
			this.canvasHeight = canvasHeight;
			this.image = document.getElementById('mandrake');
			this.spriteWidth = 256;
			this.spriteHeight = 256;
			this.width = this.spriteWidth;
			this.height = this.spriteHeight;
			this.scale = 2;
			this.x = this.canvasWidth / 2 - this.width * this.scale / 2;
			this.y = this.canvasHeight / 2 - this.height * this.scale / 2;
			this.minFrame = 0;
			this.maxFrame = 355;
			this.currentFrame = 0;
			this.frameX = 10;
			this.frameY = 12;
		}
		draw(ctx) {
			ctx.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width * this.scale, this.height * this.scale);

		}
		update() {
			// if (this.currentFrame < this.maxFrame) {
			// 	this.currentFrame++;
			// } else {
			// 	this.currentFrame = this.minFrame;
			// }
			this.currentFrame = this.currentFrame < this.maxFrame ? this.currentFrame + 1 : this.minFrame;
			this.frameX = this.currentFrame % 18;
			this.frameY = Math.floor(this.currentFrame / 18);
		}
		setAnimation(newMinFrame, newMaxFrame) {
			this.minFrame = newMinFrame;
			this.maxFrame = newMaxFrame;
			this.currentFrame = newMinFrame;
		}

	}
	const mandrake = new Mandrake(mandrakeCV.width, mandrakeCV.height);

	function animate() {
		context.clearRect(0, 0, mandrakeCV.width, mandrakeCV.height);
		mandrake.draw(context);
		mandrake.update();
		requestAnimationFrame(animate);
	}
	animate();

	const all = document.getElementById('all');
	all.addEventListener('click', function () {
		mandrake.setAnimation(0, 355);
	});

	const grow = document.getElementById('grow');
	grow.addEventListener('click', function () {
		mandrake.setAnimation(0, 75);
	});

	const wink = document.getElementById('wink');
	wink.addEventListener('click', function () {
		mandrake.setAnimation(76, 112);
	});

	const float = document.getElementById('float');
	float.addEventListener('click', function () {
		mandrake.setAnimation(113, 262);
	});

	const hide = document.getElementById('hide');
	hide.addEventListener('click', function () {
		mandrake.setAnimation(263, 355);
	});

});
