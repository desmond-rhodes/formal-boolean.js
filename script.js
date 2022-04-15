const expression = document.getElementById("expression");
expression.addEventListener("keydown", enter);

const button = document.getElementById("calculate");
button.addEventListener("click", calculate);

const template = document.getElementById("output");

function calculate() {
	const output = template.cloneNode(true);

	const message = document.createElement("p");
	message.innerHTML = expression.value;

	output.appendChild(message);

	const replace = document.getElementById("output");
	replace.parentNode.replaceChild(output, replace);
}

function enter(event) {
	/* 13 for return key */
	if (event.keyCode === 	13)
		button.click();
}
