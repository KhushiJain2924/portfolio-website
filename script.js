const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const body = document.getElementById("body").value;

  const mailto = `mailto:khushi.jain2931@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`;
  window.open(mailto,'_blank');
});