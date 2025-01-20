document.addEventListener("DOMContentLoaded", () => {
  const marqueeText = document.getElementById("marquee-text");

  // Posisi awal teks di luar layar kanan
  let startPosition = window.innerWidth;

  function animateMarquee() {
    const textWidth = marqueeText.offsetWidth; // Hitung lebar teks
    startPosition -= 3; // Atur kecepatan animasi (semakin kecil, semakin lambat)

    // Reset posisi jika teks sudah sepenuhnya keluar dari layar kiri
    if (startPosition < -textWidth) {
      startPosition = window.innerWidth; // Kembali ke luar layar kanan
    }

    // Terapkan posisi teks dengan transform
    marqueeText.style.transform = `translateX(${startPosition}px)`;
    requestAnimationFrame(animateMarquee); // Panggil ulang animasi
  }

  // Jalankan animasi
  animateMarquee();
});


// Animasi hover untuk card portfolio (opsional)
const portfolioCards = document.querySelectorAll('.portfolio-card');

portfolioCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});


// Animasi untuk gambar saat scroll
const image = document.querySelector('#about-us img');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    image.classList.add('animate__animated', 'animate__fadeIn');
  }
});
