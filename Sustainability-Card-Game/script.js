// script.js
const cards = [
  { name: "Drive 10km", co2: 2.3 },
  { name: "Eat beef burger", co2: 3.6 },
  { name: "Drink tap water", co2: 0.01 },
];

function pickRandomCard() {
  return cards[Math.floor(Math.random() * cards.length)];
}

function playRound() {
  const player1 = pickRandomCard();
  const player2 = pickRandomCard();
  alert(`Player 1: ${player1.name} (${player1.co2} kg)\nPlayer 2: ${player2.name} (${player2.co2} kg)\n${player1.co2 < player2.co2 ? "Player 1 wins!" : "Player 2 wins!"}`);
}
