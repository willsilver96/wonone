// Placeholder data
let pot = 110.00;
let users = 1000;

const potElement = document.querySelector('.pot');

// Update pot stats
function updateStats() {
  document.getElementById("potAmount").innerText = `£${pot.toFixed(2)}`;
  document.getElementById("users").innerText = users;
  document.getElementById("odds").innerText = `1 in ${Math.round(users)}`;
  updateGlow();
}

// Dynamic glow based on pot size
function updateGlow() {
  const glowIntensity = Math.min(pot / 10, 40); // scales with pot size, caps at 40px
  potElement.style.setProperty('--glow-strength', `${glowIntensity}px`);
}

// Simulate new entries every few seconds
setInterval(() => {
  pot += 0.11;
  users += 1;
  updateStats();
}, 2000);

// Initialize display
updateStats();
