// Placeholder data
let pot = 110.00;
let users = 1000;

function updateStats() {
  document.getElementById("potAmount").innerText = `£${pot.toFixed(2)}`;
  document.getElementById("users").innerText = users;
  document.getElementById("odds").innerText = `1 in ${Math.round(users)}`;
}

// Animate the gold fill height (cap at 100%)
const goldFill = document.querySelector('.gold-fill');
const maxAmount = 1000; // adjust this to your target pot max
const fillPercent = Math.min((potAmount / maxAmount) * 100, 100);
goldFill.style.height = `${fillPercent}%`;

// Example: simulate new entries every few seconds
setInterval(() => {
  pot += 0.11;
  users += 1;
  updateStats();
}, 2000);

updateStats();
