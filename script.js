// Nav bar
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const header = document.getElementById('header');

navToggle.addEventListener('click', () => {
  links.classList.toggle('show-links');
  header.classList.toggle('move-header');
})


// Flip cards
const cards = document.querySelectorAll(".card");

function flipcard() {
    this.classList.toggle("flip");
}

cards.forEach(card => card.addEventListener("click", flipcard));


