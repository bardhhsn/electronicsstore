function validateLoginForm() {
    var email = document.getElementById('loginemail').value;
    var password = document.getElementById('loginPassword').value;

    if (email === "" || password === "") {
        document.getElementById('loginError').innerHTML = "Email-i dhe passwordi jane te domosdoshem";
        return false;
    } else {

        if (email === "email" && password === "password") {
            document.getElementById('loginError').innerHTML = ""; 
            alert("Ju jeni kyqur me suskses!");
            return true;
        } else {
            document.getElementById('loginError').innerHTML = "Email ose password eshte gabim!";
            return false;
        }
    }
}

function validateSignupForm() {
    var email = document.getElementById('signupemail').value;
    var password = document.getElementById('signupPassword').value;

    // Simple validation
    if (email === "" || password === "") {
        document.getElementById('signupError').innerHTML = "Email-i dhe passwordi jane te domosdoshem";
        return false;
    } else {
        // You can add more sophisticated validation here, such as checking if the email is unique.
        alert("Ju jeni regjistruar me sukses!");
        return true;
    }
}