document.addEventListener("DOMContentLoaded", function () {

const btn = document.getElementById("joinBtn");

const status = document.getElementById("status");

btn.addEventListener("click", function () {

status.textContent =
"You're on the list — we'll email you before the next roast.";

btn.textContent = "Added";

btn.disabled = true;

btn.style.opacity = "0.7";

});

});