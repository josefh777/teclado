
document.querySelectorAll('.tecla').forEach((btn) => {
  const n = btn.dataset.som;                 // "1"..."9"
  const audio = new Audio(`sons/som-${n}.mp3`);
  audio.preload = 'auto';

  function tocar() {
    audio.currentTime = 0;                   
    audio.play().catch(console.error);      
  }

  // Clique toca
  btn.addEventListener('click', tocar);

  btn.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' || e.code === 'Space') tocar();
  });
});