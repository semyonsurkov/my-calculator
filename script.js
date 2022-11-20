let op;

const calc = (number1, number2) => {
	let esult
	number1 = Number(document.getElementById("number1").value);
	number2 = Number(document.getElementById("number2").value);

	switch (op) {
		case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        result = number1 / number2;
        break;
	}

	document.getElementById("result").innerHTML = result;
};
