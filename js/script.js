// Typ-animation för "Clara Lunak" (headern)
document.addEventListener("DOMContentLoaded", function () {
  const headerText = "Clara Lunak";
  const element = document.getElementById("typing-text");
  let index = 0;

  function typeLetter() {
    if (index < headerText.length) {
      element.textContent += headerText.charAt(index);
      index++;
      setTimeout(typeLetter, 150); // tid i ms per bokstav
    }
  }

  typeLetter();
});


// Typ-animation för "Om mig"-sektionen
const aboutText = document.getElementById('about-text');
if (aboutText) {
  const aboutContent = aboutText.textContent;
  aboutText.textContent = '';

  function typeText(element, text, index = 0) {
    if (index < text.length) {
      element.textContent += text[index];
      setTimeout(() => typeText(element, text, index + 1), 30);
    }
  }

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  function checkScroll() {
    if (isInViewport(aboutText) && aboutText.textContent === '') {
      typeText(aboutText, aboutContent);
      window.removeEventListener('scroll', checkScroll);
    }
  }

  window.addEventListener('scroll', checkScroll);
}


// Scroll-animation för rubriker
const headings = document.querySelectorAll('h2');
function revealHeadings() {
  headings.forEach(h => {
    const top = h.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      h.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealHeadings);
revealHeadings();


// Dynamiskt generera projektkort från JSON (projects.html)
const container = document.getElementById('projects-container');
if (container) {
  fetch('data/projects.json')
    .then(res => res.json())
    .then(data => {
      data.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${proj.image}" alt="Projektbild">
          <h3>${proj.title}</h3>
          <p>${proj.description}</p>
          <a href="${proj.link}" class="btn" target="_blank">Se på GitHub</a>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => console.error("Kunde inte ladda projekten:", err));
}
