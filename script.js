document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.getElementById('about');
  for (let i = 0; i < 10; i++) {
    let bubble = document.createElement('div');
    bubble.classList.add('bubble');
    aboutSection.appendChild(bubble);
  }
});
