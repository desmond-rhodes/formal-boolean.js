const expression = document.getElementById("expression");
expression.addEventListener("keydown", enter);

const button = document.getElementById("calculate");
button.addEventListener("click", calculate);

function calculate() {
	console.log(expression.value);
}

function enter(event) {
	/* 13 for return key */
	if (event.keyCode === 	13)
		button.click();
}
