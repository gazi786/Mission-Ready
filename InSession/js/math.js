
const conView = document.getElementById('pushMath');
const dateTimer = document.getElementById('dateObj');

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let randBtwnTen, squareRoot, powMath;

randBtwnTen = numberArray[Math.floor(Math.random() * numberArray.length) + 1];

powMath = Math.pow(Math.floor(randBtwnTen), Math.floor(randBtwnTen));

squareRoot = Math.sqrt(Math.floor(powMath));



conView.innerHTML = `<p>Your random Power is => ${powMath}</p>
<p>Your Square Root of the Powered Numbers is => ${squareRoot}</p>`;

const fruits = ["apple", "banana", "orange", "mango", "grapes", "watermelon", "pineapple", "papaya", "strawberry", "cherry"];

let randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

conView.innerHTML += `<p>Your random Fruit is => ${randomFruit}</p>`;

//Countdown Timer
const dateToday = new Date();

dateTimer.innerHTML = `<p>Date and Time Now: ${dateToday.toDateString()} \t${dateToday.toLocaleTimeString()}</p>`;

//Get days left for Birthday
const bdCountdown = document.getElementById("bdCountdown");

const bornDay = new Date('April 26, 1991');
const birthday = new Date('April 26, 2023');
const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

const Countdown = setInterval(() => {
	const today = new Date();

	//calculate month difference from current date in time  
	let month_diff = today - bornDay.getTime();

	//convert the calculated difference in date format  
	let age_dt = new Date(month_diff);

	//extract year from date      
	let year = age_dt.getUTCFullYear();

	//now calculate the age of the user  
	let age = Math.abs(year - 1970);

	const diff = birthday - today;

	const d = Math.floor(diff / days);
	const h = Math.floor((diff % days) / hours);
	const m = Math.floor((diff % hours) / minutes);
	const s = Math.floor((diff % minutes) / seconds);

	bdCountdown.innerHTML = `<p> My day of Birth is the ${bornDay.getDate()}<sup>th</sup> of ${bornDay.toLocaleString("default", { month: "long" })}.</p>
	<p>Days left for Birthday: ${d} Days, ${h} Hours, ${m} Minutes, ${s} Seconds</p>`;

	if (diff < 0) {
		bdCountdown.innerHTML = `<p>Happy Birthday...!!!</p>`;
		bdCountdown.innerHTML += `<p>Another year as a gift to become a better version of yourself as you are ${age} years old today.</p>`;

		clearInterval(Countdown);
	}
}, 1000);

