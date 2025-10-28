// Placeholder data
let pot = 127.34;
let users = 231;

function updateStats() {
  document.getElementById("potAmount").innerText = `£${pot.toFixed(2)}`;
  document.getElementById("users").innerText = users;
  document.getElementById("odds").innerText = `1 in ${Math.round(users)}`;
}

// Example: simulate new entries every few seconds
setInterval(() => {
  pot += 0.11;
  users += 1;
  updateStats();
}, 2000);

updateStats();
