// --- Typ-animation för header ---
document.addEventListener("DOMContentLoaded", function () {
  const headerText = "Clara Lunak";
  const headerElement = document.getElementById("typing-text");
  let index = 0;

  function typeHeader() {
    if (index < headerText.length) {
      headerElement.textContent += headerText.charAt(index);
      index++;
      setTimeout(typeHeader, 150);
    }
  }
  typeHeader();

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
    setTimeout(() => {
      bar.style.width = value + "%";
    }, 500);
  });
});
