// Typ-animation för "Om mig"
const aboutText = document.getElementById('about-text');
const text = aboutText.textContent;
aboutText.textContent = '';

function typeText(element, text, index = 0) {
  if(index < text.length) {
    element.textContent += text[index];
    index++;
    setTimeout(() => typeText(element, text, index), 30);
  }
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function checkScroll() {
  if(isInViewport(aboutText) && aboutText.textContent === '') {
    typeText(aboutText, text);
    window.removeEventListener('scroll', checkScroll);
  }
}
window.addEventListener('scroll', checkScroll);

// Rubrik-animation
const headings = document.querySelectorAll('h2');
function revealHeadings() {
  headings.forEach(h => {
    const top = h.getBoundingClientRect().top;
    if(top < window.innerHeight - 50) {
      h.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealHeadings);
revealHeadings();

// Dynamiskt generera projektkort från JSON
fetch('data/projects.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('projects-container');
    data.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${proj.image}" alt="Projektbild">
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <a href="${proj.link}" class="btn">Se på GitHub</a>
      `;
      container.appendChild(card);
      document.addEventListener("DOMContentLoaded", function () {
  const text = "Clara Lunak";
  const element = document.getElementById("typing-text");
  let index = 0;

  function typeLetter() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(typeLetter, 150); // tid i ms per bokstav
    }
  }

  typeLetter();
});

    });
  });
