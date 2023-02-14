const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "crying.png";

let x = 0;
let y = 0;
let velocity = 5;

function startAnimating() {
	setInterval(() => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		y += velocity;
		ctx.drawImage(image, x, y, 50, 50);
		ctx.drawImage(image, x + 60, y + 60, 50, 50);
		ctx.drawImage(image, x + 120, y + 120, 50, 50);
		if (y > canvas.height - 50) {
			velocity = -5;
		}
		if (y < 0) {
			velocity = 5;
		}
	}, 50);
}

window.onload = function () {
	//startAnimating();
	alert("Hello! I am an alert box!!");
	document.getElementById("my_audio").play();
}
