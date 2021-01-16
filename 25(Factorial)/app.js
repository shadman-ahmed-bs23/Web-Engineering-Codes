function calcFactorial() {
	document.getElementById('factorial').innerHTML = '';

	var num = document.getElementById('number').value;

	var result = 1;
	for (var i = 1; i <= num; i++) {
		result *= i;
	}

	document.getElementById('factorial').innerHTML +=
		'The factorial of ' + num + ' is = ' + result;
}
