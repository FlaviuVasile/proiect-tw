const newPassword = document.getElementById('new_password');
const confirmPassword = document.getElementById('confirm_password');
const resetButton = document.getElementById('resetButton');
const passwordError = document.getElementById('passwordError');
const passwordMatchError = document.getElementById('passwordMatchError');

const eyeIcons = document.querySelectorAll('.input-box img');
eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener('click', function () {
        const input = this.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            this.src = 'eye-open.png';
        } else {
            input.type = 'password';
            this.src = 'eye-close.png';
        }
    });
});

function isValidPassword(password) {
    const letters = password.match(/[a-zA-Z]/g) || [];
    const digits = password.match(/\d/g) || [];
    return letters.length === 3 && digits.length === 2;
}

function validatePasswordsMatch() {
    const doPasswordsMatch = newPassword.value === confirmPassword.value;
    passwordMatchError.classList.toggle('hidden', doPasswordsMatch);
    confirmPassword.parentElement.classList.toggle('invalid', !doPasswordsMatch);
    return doPasswordsMatch;
}

function validateForm() {
    const isPasswordValid = isValidPassword(newPassword.value);
    passwordError.classList.toggle('hidden', isPasswordValid);
    newPassword.parentElement.classList.toggle('invalid', !isPasswordValid);

    const doPasswordsMatch = validatePasswordsMatch();
    resetButton.disabled = !(isPasswordValid && doPasswordsMatch);
}

newPassword.addEventListener('input', validateForm);
confirmPassword.addEventListener('input', validateForm);
