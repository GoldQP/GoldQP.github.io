function validatePassword() {
  const correctPassword = 'Jasmin'; // Cambia esto por la contraseña que desees
  const passwordInput = document.getElementById('passwordInput');
  const errorMessage = document.getElementById('error-message');

  if (passwordInput.value.toLowerCase() === correctPassword.toLowerCase()) {
    passwordInput.classList.remove('error');
    errorMessage.classList.add('hidden');

    window.location.href = 'success.html';
  } else {
    passwordInput.classList.add('error');
    errorMessage.classList.remove('hidden');
  }
}
const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"];

const generateSpaceLayer = (size, selector, totalStars, duration) => {
  const layer = [];
  for (let i = 0; i < totalStars; i++) {
    const color = COLORS[~~(Math.random() * COLORS.length)];
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
  }
  const container = document.querySelector(selector);
  container.style.setProperty("--size", size);
  container.style.setProperty("--duration", duration);
  container.style.setProperty("--space-layer", layer.join(","));
}

generateSpaceLayer("2px", ".space-1", 250, "25s");
generateSpaceLayer("3px", ".space-2", 100, "20s");
generateSpaceLayer("6px", ".space-3", 25, "15s");