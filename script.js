// Pot data
const pots = [
  { id: 1, entry: 0.5, pot: 0, users: 0 },
  { id: 2, entry: 1, pot: 0, users: 0 },
  { id: 3, entry: 2, pot: 0, users: 0 },
  { id: 4, entry: 5, pot: 0, users: 0 }
];

// Update stats for all pots
function updateStats() {
  pots.forEach(p => {
    const prize = p.pot * 0.75;
    const charity = p.pot * 0.20;
    const odds = p.users > 0 ? `1 in ${p.users}` : "1 in 0";
    
    document.getElementById(`pot${p.id}Prize`).innerText = `£${prize.toFixed(2)}`;
    document.getElementById(`pot${p.id}Charity`).innerText = `Charity: £${charity.toFixed(2)}`;
    document.getElementById(`pot${p.id}Users`).innerText = p.users;
    document.getElementById(`pot${p.id}Odds`).innerText = odds;

    updateGlow(p.id, p.pot);
  });
}

// Glow effect per pot
function updateGlow(id, potValue) {
  const potElement = document.getElementById(`pot${id}`);
  const glowIntensity = Math.min(potValue / 10, 40);
  potElement.style.setProperty('--glow-strength', `${glowIntensity}px`);
}

// Simulate random entries for all 4 pots
setInterval(() => {
  pots.forEach(p => {
    const randomJoin = Math.random() < 0.3; // 30% chance to add player per tick
    if (randomJoin) {
      p.users += 1;
      p.pot += p.entry;
    }
  });
  updateStats();
}, 300);

updateStats();
