const buttonEl = document.querySelector('.magnetic-button');

buttonEl.addEventListener('mousemove', (e) => {
  const rect = buttonEl.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  
  const distance = Math.sqrt(x * x + y * y);
  const maxDistance = 100;
  
  if (distance < maxDistance) {
    const strength = (maxDistance - distance) / maxDistance;
    const moveX = x * strength * 0.3;
    const moveY = y * strength * 0.3;
    buttonEl.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }
});

buttonEl.addEventListener('mouseleave', () => {
  buttonEl.style.transform = 'translate(0, 0)';
});