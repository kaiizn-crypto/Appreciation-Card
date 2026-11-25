const card = document.getElementById("card");
const btnEn = document.getElementById("btn-en");
const btnKm = document.getElementById("btn-km");
const letterEn = document.getElementById("letter-en");
const letterKm = document.getElementById("letter-km");
const quoteEn = document.getElementById("quote-en");
const quoteKm = document.getElementById("quote-km");

function toggleCard() {
  card.classList.toggle("is-open");
}

card.addEventListener("click", toggleCard);

card.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleCard();
  }
});

btnEn.addEventListener("click", (e) => {
  e.stopPropagation();
  btnEn.classList.add("active");
  btnKm.classList.remove("active");
  letterEn.classList.remove("hidden");
  letterKm.classList.add("hidden");
  quoteEn.classList.remove("hidden");
  quoteKm.classList.add("hidden");
});

btnKm.addEventListener("click", (e) => {
  e.stopPropagation();
  btnKm.classList.add("active");
  btnEn.classList.remove("active");
  letterKm.classList.remove("hidden");
  letterEn.classList.add("hidden");
  quoteKm.classList.remove("hidden");
  quoteEn.classList.add("hidden");
});

function createFallingSunflowers() {
  const container = document.getElementById("falling-sunflowers");
  if (!container) return;

  const symbols = ["🌻", "🌻", "🍂", "🍁", "🌼"];
  const totalItems = 30;

  for (let i = 0; i < totalItems; i++) {
    const item = document.createElement("div");
    item.className = "falling-item";
    item.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    item.style.left = Math.floor(Math.random() * 96) + "vw";
    item.style.fontSize = Math.floor(Math.random() * 14 + 16) + "px";
    item.style.opacity = (Math.random() * 0.45 + 0.45).toFixed(2);
    item.style.animationDuration = (Math.random() * 7 + 8).toFixed(1) + "s";
    item.style.animationDelay = (Math.random() * 6).toFixed(1) + "s";

    container.appendChild(item);
  }
}

createFallingSunflowers();