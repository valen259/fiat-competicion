const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.textContent = "☰";
  });
});

document.querySelector("#copyEmail").addEventListener("click", async () => {
  const text = "¡Hola! Quiero contactarme con Fiat Competición y sumarme a la comunidad fierrera.";
  const status = document.querySelector("#copyStatus");
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = "¡Texto copiado! Pegalo en tu mensaje.";
  } catch {
    status.textContent = text;
  }
});
