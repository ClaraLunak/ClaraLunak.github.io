document.addEventListener("DOMContentLoaded", function () {
  // --- Typ-animation för header ---
  const headerText = "Clara Lunak";
  const headerElement = document.getElementById("typing-text");
  if (headerElement) {
    let index = 0;
    function typeHeader() {
      if (index < headerText.length) {
        headerElement.textContent += headerText.charAt(index);
        index++;
        setTimeout(typeHeader, 150);
      }
    }
    typeHeader();
  }

  // --- Studieprogress ---
  const studyBar = document.getElementById("study-progress");
  const progressText = document.getElementById("progress-text");
  if (studyBar && progressText) {
    const start = new Date("2023-08-26");
    const end = new Date("2026-06-15");
    const today = new Date();

    let progress = ((today - start) / (end - start)) * 100;
    progress = Math.min(Math.max(progress, 0), 100);

    studyBar.style.width = progress + "%";
    progressText.textContent = `Studier: ${progress.toFixed(1)}% klara`;
  }

  // --- Kompetens-bars ---
  const skillBars = document.querySelectorAll(".skill-bar .progress[data-progress]");
  skillBars.forEach(bar => {
    const value = bar.getAttribute("data-progress");

    // Sätt width till 0 först (säkerhet)
    bar.style.width = "0%";

    setTimeout(() => {
      bar.style.width = value + "%";
      bar.textContent = value + "%"; // visar siffran i baren
    }, 300); // liten delay så animationen syns
  });
  const footerPlaceholder = document.getElementById("footer-placeholder");
if (footerPlaceholder) {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      footerPlaceholder.innerHTML = data;
    })
    .catch(error => console.error('Kunde inte ladda footern:', error));
}
// background.js
const canvas = document.getElementById("background-canvas");
const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const binary = "01"; // binära tecken
const fontSize = 16;
const columns = Math.floor(width / fontSize);
const drops = Array(columns).fill(1);

// Resize canvas vid fönsterändring
window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

// Rita bakgrund och siffror
function draw() {
  ctx.fillStyle = "rgba(10, 10, 10, 0.05)"; // semi-transparent bakgrund
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "#00BFA6"; // cyan accent
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = binary.charAt(Math.floor(Math.random() * binary.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 50);

});
