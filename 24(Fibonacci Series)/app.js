function fib() {
	document.getElementById('fibSeries').innerHTML = '';

	var a = 0;
	var b = 1;
	var c;

	var n = document.getElementById('number').value;

	document.getElementById('fibSeries').innerHTML += a + '<br>' + b + '<br>';
	for (var i = 3; i <= n; i++) {
		c = a + b;
		a = b;
		b = c;
		document.getElementById('fibSeries').innerHTML += c + '<br>';
	}
}
