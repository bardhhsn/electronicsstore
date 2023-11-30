function validateLoginForm() {
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    // Simple validation
    if (email === "bardhhyseni28@gmail.com" && password === "bardhi123") {
        document.getElementById('loginError').innerHTML = "";
        document.getElementById('loginSuccess').innerHTML = "Ju jeni kyçur me sukses!";
        setTimeout(function () {
            window.location.href = "index.html";
        }, 2000);
        } else {
        document.getElementById('loginError').innerHTML = "Email ose passwordi i dhene eshte gabim!";
        document.getElementById('loginSuccess').innerHTML = "";
    }

    // Prevent the form from submitting and refreshing the page
    return false;
}

function validateSignupForm() {
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;

    // Simple validation
    if (email === "bardhhyseni28@gmail.com" && password === "bardhi123") {
        document.getElementById('signupError').innerHTML = "";
        document.getElementById('signupSuccess').innerHTML = "Ju jeni regjistruar me sukses!";
        setTimeout(function () {
            window.location.href = "index.html";
        }, 2000);
    } else {
        document.getElementById('signupError').innerHTML = "Email ose passwordi i dhene eshte gabim!";
        document.getElementById('signupSuccess').innerHTML = "";
    }

    // Prevent the form from submitting and refreshing the page
    return false;
}

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('loaded');
});
