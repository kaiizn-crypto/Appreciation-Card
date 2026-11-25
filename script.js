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

// One click anywhere on the card opens or closes it
card.addEventListener("click", toggleCard);

card.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleCard();
  }
});

// Switch between English and Khmer without closing the card
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