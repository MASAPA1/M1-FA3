document.addEventListener('DOMContentLoaded', () => {
  const mp1 = document.getElementById('mp1');
  const mp2 = document.getElementById('mp2');
  const back = document.getElementById('btnBackPortfolio');

  const go = (url) => { window.location.href = url; };

  if (mp1) mp1.addEventListener('click', () => go('https://masapa1.github.io/M1-FA3_botton1/'));
  if (mp2) mp2.addEventListener('click', () => go('https://masapa1.github.io/M1-FA3_botton2/'));
  if (back) back.addEventListener('click', () => go('https://masapa1.github.io/Portfolio/'));
});
