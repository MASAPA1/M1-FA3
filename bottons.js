document.addEventListener('DOMContentLoaded', () => {
  const mp1 = document.getElementById('mp1');
  const mp2 = document.getElementById('mp2');

  if (mp1) {
    mp1.addEventListener('click', () => {
      // navigate in same tab:
      window.location.href = 'https://masapa1.github.io/M1-FA3_botton1/';
    });
  }

  if (mp2) {
    mp2.addEventListener('click', () => {
      window.location.href = 'https://example.org';
      
    });
  }

});
