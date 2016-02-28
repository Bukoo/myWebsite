function animationShow() {
	var signin = document.getElementById('to-signin');
	signin.onclick = curtainShow;
}

function curtainShow() {
	var tape = document.getElementById('tape');
	tape.parentNode.removeChild(tape);
	var curtain = document.getElementById('curtain');
	curtain.style.visibility = 'visible';
	var signinBox = document.getElementById('signin-box');
	signinBox.style.visibility = 'visible';
	addClassName(signinBox,'fade-in');
}

addLoadFunction(animationShow);