document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission if validation fails

    let isValid = true;

    // Get form values

    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value.trim();

    // Clear previous error messages
    document.querySelectorAll(".error").forEach(el => el.innerText = "");

    // Role validation
    if (role === "") {
        document.getElementById("roleError").innerText = "Please select a role.";
        isValid = false;
    }

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
        document.getElementById("nameError").innerText = "Only alphabets are allowed.";
        isValid = false;
    }

    // Mobile validation
    if (mobile === "") {
        document.getElementById("mobileError").innerText = "Mobile number is required.";
        isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
        document.getElementById("mobileError").innerText = "Enter a valid 10-digit mobile number.";
        isValid = false;
    }

    // Email validation
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email.";
        isValid = false;
    }

    // DOB validation
    if (dob === "") {
        document.getElementById("dobError").innerText = "Date of birth is required.";
        isValid = false;
    } else {
        let birthDate = new Date(dob);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        if (age < 18) {
            document.getElementById("dobError").innerText = "You must be at least 18 years old.";
            isValid = false;
        }
    }

    // Address validation
    if (address === "") {
        document.getElementById("addressError").innerText = "Address is required.";
        isValid = false;
    }

    // If all validations pass, submit form
    if (isValid) {
        alert("Registration successful!");
        document.getElementById("registrationForm").reset();
    }
});
