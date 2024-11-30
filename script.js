const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Your message has been sent!');
});
