let password = document.getElementById('password');
let eyeicon = document.getElementById('eyeicon');

eyeicon.onclick = function() {
    if (password.type === "password") {
        password.type = "text";
        eyeicon.src = "eye-open.png"; 
    } else {
        password.type = "password";
        eyeicon.src = "eye-close.png"; 
    }
};

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
        
function isValidUsername(username) {
    return username.length >= 5;
}

function isValidPassword(password) {
    const letters = password.match(/[a-zA-Z]/g) || [];
    const digits = password.match(/\d/g) || [];
    return letters.length >= 3 && digits.length >= 2;
}

function validateForm() {
    const isUsernameValid = isValidUsername(usernameInput.value);
    const isPasswordValid = isValidPassword(passwordInput.value);

    if (!isUsernameValid) {
        usernameError.classList.remove('hidden');
    } else {
        usernameError.classList.add('hidden');
    }

            
    if (!isPasswordValid) {
        passwordError.classList.remove('hidden');
    } else {
        passwordError.classList.add('hidden');
    }

    loginButton.disabled = !(isUsernameValid && isPasswordValid);
}

usernameInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);


