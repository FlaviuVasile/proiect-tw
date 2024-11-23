const csrf = document.getElementById('csrf');
fetch("http://localhost:8000")
  .then((response) => response.json())
  .then((json) => csrf.value=json.Token);
fetch("http://localhost:8000")
  .then((response) => response.json())
  .then((json) => csrf.value=json.Token);

function togglePasswordVisibility(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    if (input.type === 'password') {
        input.type = 'text';
        icon.src = 'eye-open.png'; 
    } else {
        input.type = 'password';
        icon.src = 'eye-close.png'; 
    }
}

document.getElementById('eyeicon1').addEventListener('click', function() {
    togglePasswordVisibility('new_password', 'eyeicon1');
});

document.getElementById('eyeicon2').addEventListener('click', function() {
    togglePasswordVisibility('confirm_password', 'eyeicon2');
});

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let isValid = true;

    const password = document.getElementById('new_password');
    const confirmPassword = document.getElementById('confirm_password');
    const email = document.getElementById('email');
    const name = document.getElementById('name');
    const appName = document.getElementById('appName');
    const termsCheckbox = document.getElementById('terms');

    const passwordError = document.getElementById('passwordError');
    const passwordMatchError = document.getElementById('passwordMatchError');
    
    [name, appName, email].forEach(input => {
        if (input.value.trim() === "") {
            input.style.borderColor = "red";
            isValid = false;
        } else {
            input.style.borderColor = "";
        }
    });

    const passwordPattern = /^(?=(.*[a-zA-Z]){3})(?=(.*\d){2}).*$/;
    if (!passwordPattern.test(password.value)) {
        password.style.borderColor = "red";
        passwordError.classList.remove("hidden");
        isValid = false;
    } else {
        password.style.borderColor = "";
        passwordError.classList.add("hidden");
    }

    if (password.value !== confirmPassword.value) {
        confirmPassword.style.borderColor = "red";
        passwordMatchError.classList.remove("hidden");
        isValid = false;
    } else {
        confirmPassword.style.borderColor = "";
        passwordMatchError.classList.add("hidden");
    }

    if (!termsCheckbox.checked) {
        alert("You must accept the terms and conditions.");
        isValid = false;
    }

    if (isValid) {
        this.submit();
    } else {
        alert("Please correct the errors in the form.");
    }
});
