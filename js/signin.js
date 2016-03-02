function animationShow() {
	if (!document.getElementById) return;
// get signIn button element
	var signin = document.getElementById('to-signin');
	signin.onclick = signInBoxShow;
// get signUp button element
	var signup = document.getElementById('to-signup');
	signup.onclick = signUpBoxShow;
}

function signInBoxShow() {
	if (!document.getElementById) return;
// remove sliding tape
	var tape = document.getElementById('tape');
	tape.parentNode.removeChild(tape);
// display black background
	var curtain = document.getElementById('curtain');
	curtain.style.visibility = 'visible';
// display signIn box
	var signinBox = document.getElementById('signin-box');
	signinBox.style.display = 'block';
// add fade in animation for sign in box
	addClassName(signinBox,'fade-in');
}

function signUpBoxShow() {
	if (!document.getElementById) return;

	var tape = document.getElementById('tape');
	tape.parentNode.removeChild(tape);

	var curtain = document.getElementById('curtain');
	curtain.style.visibility = 'visible';

	var signinBox = document.getElementById('signup-box');
	signinBox.style.display = 'block';

	addClassName(signinBox,'fade-in');
}

function formatCheck(argument) {
	if (!document.getElementById) return;

	if (document.getElementById('signin-username')) {
		userNameFormatCheck('signin-username');
	}
	if (document.getElementById('signup-username')) {
		userNameFormatCheck('signup-username');
	}
	if (document.getElementById('signin-email')) {
		emailFormatCheck('signin-email');
	}
	if (document.getElementById('signup-email')) {
		emailFormatCheck('signup-email');
	}
	
}

function userNameFormatCheck(elementId) {
	if (!document.getElementById) return;

	var username, usernameTxt, patrn, usernameError;
// get the username input box element
	username = document.getElementById(elementId);
// while focal point leaves username input box
	username.onblur = function() {
	// get username input box content
		usernameTxt = username.value;
	// username regular expression for only letters, numbers and underscores
		patrn = /^\w+$/;
	// get error message element for username input
		usernameError = document.getElementById('error-msg-'+elementId);
	// while not empty and not matched
		if (usernameTxt !== '' && !usernameTxt.match(patrn)) {
			usernameError.innerHTML = 'The Username can only contain letters, numbers and underscores!';
	// length less than 32 characators
		} else if(usernameTxt.length > 32) {
			usernameError.innerHTML = 'The length of your Username should less than 32 characaters!';
		} else {
	// while empty or matched
			usernameError.innerHTML = '';
		}
	}
}

function emailFormatCheck(elementId) {
	if (!document.getElementById) return;

	var email, emailTxt, patrn, emailError;
	email = document.getElementById(elementId);
	email.onblur = function() {
		emailTxt = email.value;
	// email regular expression
		patrn = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
		emailError = document.getElementById('error-msg-' + elementId);

		if (emailTxt !== '' && !emailTxt.match(patrn)) {
			emailError.innerHTML = 'Sorry you don\'t input a correct email address.';
		} else {
			emailError.innerHTML = '';
		}
	}
}
function ajax(argument) {
// sign in verification
	if (!document.getElementById) return;

	var signinButton = document.getElementById('signin');
// submit sign in information
	signinButton.onclick = function() {
		if (window.XMLHttpRequest) {
			var xhr = new XMLHttpRequest();
		} else {
			var xhr = new ActiveXObject('Microsoft.XMLHttp');
		}
	// Ajax
		//xhr.open('POST', 'http://bukoo.byethost7.com/test.html');
		xht.open('POST', 'tmp.php');
		xhr.setRequestHeader('Content-Type', 'application/json');
		//xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		var data = 'username=' + document.getElementById('signin-username').value
					+ '&password' + document.getElementById('signin-password').value;
		xhr.send(data);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
				// json
					var data = JSON.parse(xhr.responseText);
					if (data.success) {
					// jump to index.html
						window.location.href = 'index.html';
					} else {
					// display error message
						var error = document.getElementById('fail-to-signin');
						error.innerHTML = 'Invalid username or password. Please input again.'
					}
				// string
					/*if (xhr.responseText === '0') {
						window.location.href = 'index.html';
					} else {
						var error = document.getElementById('fail-to-signin');
						error.innerHTML = xhr.responseText.substring(1);
					}*/
				}
			}
		}
	}

// sign up existing username verification
	var signupUsername = document.getElementById('signup-username');
	signupUsername.onblur = function() {
	// get element for displaying error message about username
		var error = document.getElementById('error-msg-signup-username');
	// while user has input username and its format is correct
		if (error.innerHTML === '' && signupUsername.value.length !== 0) {
			if (window.XMLHttpRequest) {
				var xhr = new XMLHttpRequest();
			} else {
				var xhr = new ActiveXObject('Microsoft.XMLHttp');
			}
			xhr.open('GET', 'temp.php?username=' + document.getElementById('signup-username').value);
			xhr.send();
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						var data = JSON.parse(xhr.responseText);
					// username exsits
						if (!data.success) {
						// display error message
							error.innerHTML = data.msg;
						}
					}
				}
			}
		}
	}

}

addLoadFunction(animationShow);
addLoadFunction(formatCheck);
addLoadFunction(ajax);