/* === General Site Interactions === */

document.addEventListener("DOMContentLoaded", function () {

    // Handle Sign Up Form Submission
    const signupForm = document.querySelector(".signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Signup successful! Redirecting to your dashboard...");
            window.location.href = "./Dashboard.html";
        });
    }

    // Handle Login Form Submission
    const loginForm = document.querySelector(".login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Login successful! Redirecting to your dashboard...");
            window.location.href = "./Dashboard.html";
        });
    }

});

/* === Marketplace Actions === */
function viewMarket() {
    alert("Redirecting to the marketplace...");
    window.location.href = "./Marketplace.html";
}

function goToCheckout(productName) {
    alert(`You have selected ${productName}. Redirecting to checkout...`);
    window.location.href = "./OrderConfirmation.html";
}
