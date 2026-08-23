const words = ['Software Developer', 'Web Developer', 'CSE Student', 'Problem Solver'];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;
const typing = document.querySelector('.hero h2');

function typeLoop() {
  const current = words[wordIndex];
  const typed = current.slice(0, charIndex);
  typing.innerHTML = `${typed}<span class="cursor">|</span>`;

  if (!deleting) {
    charIndex += 1;
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(typeLoop, 1200);
      return;
    }
  } else {
    charIndex -= 1;
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(typeLoop, deleting ? 55 : 90);
}
typeLoop();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
menu.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('theme').addEventListener('click', () => {
  document.body.classList.toggle('light');
});

document.getElementById('year').textContent = new Date().getFullYear();
