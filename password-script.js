document.addEventListener('DOMContentLoaded', (event) => {
    var attempt = 0; // Variable to keep track of the number of attempts

    document.getElementById('password-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the form from submitting in the traditional way
        var password = document.getElementById('password').value;
        if (password === "athenabaka66") {
            // Redirect to the home page
            window.location.href = 'home.html';
        } else {
            attempt++;
            var message = "Incorrect password, try again.";
            // Change the message based on the number of attempts
            if (attempt === 1) {
                message = "Hint: It's not your name. Try again.";
            } else if (attempt === 2) {
                message = "Hint: It includes numbers. Try again.";
            } else if (attempt === 3) {
                message = "Last hint: Grubhub email";
            } else {
                message = "No more hints. You don't love me.";
            }
            alert(message);
            document.getElementById('password').value = ''; // Clear the password field
        }
    });
});
