let re = new RegExp('a|b');
console.log(re.test('a'));
console.log(re.test('b'));

const globalVariables = "global";
function outer() {
	const outerVariables = "outer";

	function inner() {
		return (
			console.log(outerVariables)
		);

		const

	}
}