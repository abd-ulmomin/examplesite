
let topBtn = document.getElementById("topBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}


// Real-Time Clock
function updateClock() {
  const now = new Date();
  let timeString = now.toLocaleTimeString();
  document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);

// Click Counter
let count = 0;
function incrementCounter() {
  count++;
  document.getElementById("clickCount").textContent = count;
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
