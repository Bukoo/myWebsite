function animationShow() {
	var signin = document.getElementById('to-signin');
	signin.onclick = signInBoxShow;
	var signup = document.getElementById('to-signup');
	signup.onclick = signUpBoxShow;
}

function signInBoxShow() {
	var tape = document.getElementById('tape');
	tape.parentNode.removeChild(tape);
	var curtain = document.getElementById('curtain');
	curtain.style.visibility = 'visible';
	var signinBox = document.getElementById('signin-box');
	signinBox.style.display = 'block';
	addClassName(signinBox,'fade-in');
}
function signUpBoxShow() {
	var tape = document.getElementById('tape');
	tape.parentNode.removeChild(tape);
	var curtain = document.getElementById('curtain');
	curtain.style.visibility = 'visible';
	var signinBox = document.getElementById('signup-box');
	signinBox.style.display = 'block';
	addClassName(signinBox,'fade-in');
}

addLoadFunction(animationShow);