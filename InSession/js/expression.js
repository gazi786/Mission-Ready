let re = new RegExp('a|b');
console.log(re.test('a'));
console.log(re.test('b'));

// const globalVariables = "global";
// function outer() {
// 	const outerVariables = "outer";

// 	function inner() {
// 		return (
// 			console.log(outerVariables)
// 		);

// 		const

// 	}
// }


/**
 * Please write a simple script in a scripting language of your choice that prints the numbers from 1 to 100 on a new line. But for multiples of three print "Site" instead of the number and for the multiples of five print "Host". For numbers which are multiples of both three and five print "SiteHost".
 */
function printHost() {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("SiteHost");
		} else if (i % 3 === 0) {
			console.log("Site");
		} else if (i % 5 === 0) {
			console.log("Host");
		} else {
			console.log(i);
		}
	}
};

printHost();