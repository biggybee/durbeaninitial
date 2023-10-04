// Set the date and time for the countdown (change this to your desired date)
const countdownDate = new Date("2023-12-31 23:59:59").getTime();

// Update the countdown every second
const timerInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the HTML elements with the calculated values
  document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days;
  document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "we are live! Look us up on ur App/Play Store";
  }
}

// Initial call to update the countdown immediately
updateCountdown();
