/*const cards = document.querySelectorAll('.card');
const hero = document.querySelector('.hero');

cards.forEach(card => {
  card.addEventListener('click', () => {
    hero.innerHTML = card.innerHTML;
    hero.classList.add('active');
  });
});

hero.addEventListener('click', () => {
  hero.classList.remove('active');
});


const cards = document.getElementById('hamburger');
const menu = document.getElementById('menu');

cards.addEventListener('click', function() {
    menu.classList.toggle('open');
})