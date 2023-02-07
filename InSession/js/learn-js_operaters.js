let dataAA = document.querySelector('input[name="aa"]');
let dataBB = document.querySelector('input[name="bb"]');
let kindOfs = document.querySelectorAll('input[name="kind-op"]');
let arOperators = document.querySelector("#ar-operations");
let asOperators = document.querySelector("#as-operations");
let coOperators = document.querySelector("#co-operations");
let loOperators = document.querySelector("#lo-operations");
let toOperators = document.querySelector("#to-operations");

let arOperations = document.querySelector("#ar-operators");
let asOperations = document.querySelector("#as-operators");
let coOperations = document.querySelector("#co-operators");
let loOperations = document.querySelector("#lo-operators");
let toOperations = document.querySelector("#to-operators");

let coView = document.querySelector("#co-container");

for (let kindOf of kindOfs) {
	kindOf.addEventListener('change', showSelected);
}
function showSelected(e) {
	console.log(e);
	if (this.checked) {
		if (this.value == "arithmetic") {
			arOperators.style.display = "block";
			asOperators.style.display = "none";
			coOperators.style.display = "none";
			loOperators.style.display = "none";
			toOperators.style.display = "none";
		} else if (this.value == "assignment") {
			asOperators.style.display = "block";
			arOperators.style.display = "none";
			coOperators.style.display = "none";
			loOperators.style.display = "none";
			toOperators.style.display = "none";
		} else if (this.value == "comparison") {
			coOperators.style.display = "block";
			arOperators.style.display = "none";
			asOperators.style.display = "none";
			loOperators.style.display = "none";
			toOperators.style.display = "none";
		} else if (this.value == "logical") {
			loOperators.style.display = "block";
			asOperators.style.display = "none";
			arOperators.style.display = "none";
			coOperators.style.display = "none";
			toOperators.style.display = "none";
		} else if (this.value == "typeop") {
			toOperators.style.display = "block";
			asOperators.style.display = "none";
			arOperators.style.display = "none";
			coOperators.style.display = "none";
			loOperators.style.display = "none";
		}
	}
}

arOperations.addEventListener("change", function () {
	let selectedOption = this.options[this.selectedIndex];
	let selectedValue = selectedOption.value;
	if (selectedValue == "+") {
		const add = (+dataAA.value + (+dataBB.value));

		coView.innerHTML = ("<p>I am an Arithmetic operation and I " + '<b>"add"</b>' + " two inputs.</p><p>For example: I will add the values you entered in the beginning.</p><p>Variable A: " + dataAA.value + "</p><p>Variable B: " + dataBB.value + "</p > <p >" + add + "</p>");
	}
	else if (selectedValue == "-") {
		const subtract = (dataAA.value - dataBB.value);

		coView.innerHTML = ("<p>I am an Arithmetic operation and I " + '<b>"subtract"</b>' + " two inputs.</p><p>For example: I will subtract the values you entered in the beginning.</p><p>Variable A: " + dataAA.value + "</p><p>Variable B: " + dataBB.value + "</p ><p>" + subtract + "</p>");
	}
	else if (selectedValue == "*") {
		const multiply = (dataAA.value * dataBB.value);

		coView.innerHTML = ("<p>I am an Arithmetic operation and I " + '<b>"multiply"</b>' + " two inputs.</p><p>For example: I will multiply the values you entered in the beginning.</p><p>Variable A: " + dataAA.value + "</p><p>Variable B: " + dataBB.value + "</p ><p>" + multiply + "</p>");
	} else if (selectedValue == "/") {
		const divide = (dataAA.value / dataBB.value);

		coView.innerHTML = ("<p>I am an Arithmetic operation and I " + '<b>"divide"</b>' + " two inputs.</p><p>For example: I will divide the values you entered in the beginning.</p><p>Variable A: " + dataAA.value + "</p><p>Variable B: " + dataBB.value + "</p ><p>" + divide + "</p>");
	}
	else if (selectedValue == "%") {
		const modulous = (dataAA.value % dataBB.value);

		coView.innerHTML = ("<p>I am an Arithmetic operation and I take the" + '<b>"modulous (division remainder)"</b>' + " of the two inputs.</p><p>For example: I will mod the values you entered in the beginning.</p><p>Variable A: " + dataAA.value + "</p><p>Variable B: " + dataBB.value + "</p ><p>" + modulous + "</p>");
	}
	else if (selectedValue == "**") {
		const exponentiation = (dataAA.value ** (dataBB.value));

		coView.innerHTML = ("<p>I am an Arithmetic operation and I take the" + '<b>"exponantiation"</b>' + " of the two inputs.</p><p>For example: I will exponantiate the values you entered in the beginning.</p><p>Variable A: " + dataAA.value + "</p><p>Variable B: " + dataBB.value + "</p ><p>" + exponentiation + "</p>");
	}
	else if (selectedValue == "++") {
		let incrementA = (dataAA.value);
		let incrementB = (dataBB.value);
		incrementA++;
		incrementB++;

		coView.innerHTML = ("<p>I am an Arithmetic operation and I take the" + '<b>"increment by 1"</b>' + " of the two inputs.</p><p>For example: I will increment the values you entered in the beginning.</p><p>Variable A: " + dataAA.value + "</p><p>Variable B: " + dataBB.value + "</p ><p>" + incrementA + " OR " + incrementB + "</p>");
	}
	else if (selectedValue == "--") {
		let decrementA = (dataAA.value);
		let decrementB = (dataBB.value);
		decrementA--;
		decrementB--;

		coView.innerHTML = ("<p>I am an Arithmetic operation and I take the" + '<b>"decrement by 1"</b>' + " of the two inputs.</p><p>For example: I will decrement the values you entered in the beginning.</p><p>Variable A: " + dataAA.value + "</p><p>Variable B: " + dataBB.value + "</p ><p>" + decrementA + " &nbsp;&nbsp;OR &nbsp;&nbsp;" + decrementB + "</p>");
	}
	else {
		coView.innerHTML = ("<p>Sorry, I don't know what you are talking about. Please select and option from dropdown above.</p>");
	}
});

asOperations.addEventListener("change", function () {
	let selectedOption = this.options[this.selectedIndex];
	let selectedValue = selectedOption.value;
	console.log(selectedValue);
	if (selectedValue == "=") {
		if (dataAA.value == dataBB.value) {
			coView.innerHTML = ("<p>I am an Assignment operator and I " + '<b>"equate"</b>' + " two inputs.</p><p>For example: &nbsp;&nbsp;<b>Variable A: " + dataAA.value + "</b>&nbsp;&nbsp;" + '"is equals to OR same as"' + "&nbsp;&nbsp;<b>Variable B: " + dataBB.value + "</b></p >");
		} else {
			coView.innerHTML = ("<p>Apologies, but you need to go and see an optometrist because <b>Variable A: " + dataAA.value + "</b> is not the same as <b>Variable B: " + dataBB.value + "</b ></p>");
		}
	}
	else if (selectedValue == "+=") {
		let addAss = (dataAA.value);
		addAss = (+addAss) + (+dataBB.value);


		coView.innerHTML = ("<p>I am an Assignment Operator and I " + '<b>"add"</b>' + " two inputs.</p><p>For example: I will add the Variable B to Varaibale A and now the value of Variable A is the sum () of the two numbers you entered in the beginning.</p><p>Variable A: " + dataAA.value + "</p><p>Variable B: " + dataBB.value + "</p ><p>" + addAss + "</p>");
	}
	else if (selectedValue == "-=") {
		let addAss = (dataAA.value);
		addAss = (+addAss) + (+dataBB.value);


		coView.innerHTML = ("<p>I am an Assignment Operator and I " + '<b>"subtract"</b>' + " two inputs.</p><p>For example: I will add the values you entered in the beginning.</p><p>Variable A: " + dataAA.value + "</p><p>Variable B: " + dataBB.value + "</p ><p>" + addAss + "</p>");
	}

	else {
		coView.innerHTML = ("<p>Sorry, I don't know what you are talking about. Please select and option from dropdown above.</p>");
	}
});