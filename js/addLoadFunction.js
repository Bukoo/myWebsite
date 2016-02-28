function addLoadFunction(func) {
	var old = window.onload;
	if (typeof old == 'function') {
		window.onload = function() {
			old();
			func();
		};
	} else {
		window.onload = func;
	}
}