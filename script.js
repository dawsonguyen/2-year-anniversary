function updateTime() {
    var now = new Date();
    var eventDate = new Date(2024, 1, 19, 20, 56); // set the event date (Note: JavaScript counts months from 0 to 11)
    
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currentTime;
    
    if (remTime <= 0) {
        // Redirect to the password page
        window.location.href = 'password-page.html';
        return; // Stop the countdown
    }
    
    // Existing countdown code
    var seconds = Math.floor(remTime / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    
    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("seconds").textContent = seconds;
    
    setTimeout(updateTime, 1000);
}

updateTime(); // initial call to start the timer



