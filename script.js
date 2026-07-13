document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Loaded Successfully!");
  alert("Welcome to Jayrome Malaubang's Portfolio!");

  const toggle = document.querySelector('.nav-toggle');
  const links = document.getElementById('nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      links.classList.toggle('open');
    });

    
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }
});