/**
 * Alshafaraz Gazi
 * Mission 02
 * 2023-02-15
 * 
 * This script creates a background animation using HTML5 canvas.
 * 
 * #HOW IT WORKS
 * The script is wrapped in an immediately invoked function expression (IIFE), which creates a closure and allows the variables to be private to the function, avoiding any potential name collisions with other scripts.
 * The canvas element is retrieved using document.getElementById and its context is retrieved using canvas.getContext('2d'). The context is what we use to draw on the canvas.
 * The width and height of the canvas are set to the width and height of the window using window.innerWidth and window.innerHeight.
 * The number of stars to draw is set to 50.
 * A random function is created to generate random numbers between a minimum and maximum value.
 * The drawBackground function sets the canvas background color using a linear gradient, which is a smooth transition between two or more colors. The gradient starts at the top of the canvas and goes to the bottom.
 * The drawForeground function creates the ground area by filling two rectangles with different colors.
 * The drawStars function generates the stars by filling rectangles with a white color. The size of each star is a random number between 1 and 5, and the x and y positions are random numbers within the canvas boundaries.
 * Finally, the drawBackground, drawForeground, and drawStars functions are called to create the animation.
 */

(() => {
    const canvas = document.getElementById('background');
    const context = canvas.getContext('2d');

    const width = window.innerWidth;
    const height = window.innerHeight;

    const numberOfStars = 50;
    const random = (min, max) => Math.random() * (max - min) + min;

    canvas.width = width;
    canvas.height = height;
    // Draw the background
    const drawBackground = () => {
        const background = context.createLinearGradient(0, 0, 0, height);
        background.addColorStop(0, '#000B27');
        background.addColorStop(1, '#6C2484');

        context.fillStyle = background;
        context.fillRect(0, 0, width, height);
    };
    // Draw the foreground
    const drawForeground = () => {
        context.fillStyle = '#0C1D2D';
        context.fillRect(0, height * .95, width, height);

        context.fillStyle = '#182746';
        context.fillRect(0, height * .955, width, height);
    };
    // Draw the stars
    const drawStars = () => {
        let starCount = numberOfStars;

        context.fillStyle = '#FFF';

        while (starCount--) {
            const x = random(25, width - 50);
            const y = random(25, height * .5);
            const size = random(1, 5);

            context.fillRect(x, y, size, size);
        }
    };
    // Call the functions
    drawBackground();//Draw the background
    drawForeground();//Draw the foreground
    drawStars();//Draw the stars
})();