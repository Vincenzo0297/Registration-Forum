function validationRegistered(event) {

    event.preventDefault(); // THIS stops the page from reloading
    const name = document.getElementById('name');
    const errorName = document.getElementById('errorName');

    const password = document.getElementById('password');
    const errorPassword = document.getElementById('errorPassword');

    const message = document.getElementById('message');
    const errorMessage = document.getElementById('errorMessage');

    const success = document.getElementById('successMessage');

    let isValid = true;
    try {
         // Validate name
        const nameRegex = /^[A-Za-z\s'-]+$/;
        if (!nameRegex.test(name.value.trim())) {
            errorName.textContent = "Name must be in letters";
            isValid = false;
        } else {
            errorName.textContent = "";
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!passwordRegex.test(password.value.trim())) {
            errorPassword.textContent = "Password must be 8+ chars with uppercase, lowercase, number, and special character";
            isValid = false;
        } else {
            errorPassword.textContent = "";
        }

        // Validate message

        // Line 2: Get what the user typed
        // message        → the textarea element
        // message.value  → the actual text inside
        // .trim()        → removes spaces from start and end
        // 
        // Example:
        // User typed: "   hello world   "
        // Without trim: "   hello world   "  (with extra spaces)
        // With trim:    "hello world"        (clean)
        const msg = message.value.trim();
        const msgRegex = /^[A-Za-z0-9\s.,!?'"():;-]+$/;
        if (!msgRegex.test(msg)) {
            errorMessage.textContent = "Invalid message";
            isValid = false;
        } else if (msg.length < 80) {
            errorMessage.textContent = "Must be more than 80 characters";
            isValid = false;
        } else {
            errorMessage.textContent = "";
        }

        if (isValid) {
            success.textContent = "✅ Form submitted successfully!";
        } else {
            success.textContent = "";
        }     
    } catch(error) {
        console.log("Error submitting the forum", error);
    }
}

function Login(event) {

    event.preventDefault();

    const loginEmail = document.getElementById("email");
    const errorLoginEmail = document.getElementById("errorLoginEmail");

    const loginPassword = document.getElementById("password");
    const errorLoginPassword = document.getElementById("errorLoginPassword");
    
    const successLogin = document.getElementById('successMessage');
    let isValid = true;
    try{
        if(loginEmail.value.trim() === "") {
            errorLoginEmail.textContent = "Invalid Email";
            isValid = false;
        } else {
            errorLoginEmail.textContent = "";
        }

        if(loginPassword.value.trim() === "") {
            errorLoginPassword.textContent = "Invalid Password";
            isValid = false;
        } else {
            errorLoginPassword.textContent = "";
        }

        if(isValid) {
            successLogin.textContent = "✅ Form successfully Login!"
        } else {
            successLogin.textContent = "";
        }
    } catch(error) {
        console.log("Error Login", error);
    }
}