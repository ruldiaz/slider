const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

// Configure carousel size and counter
const slideWidth = images[0].clientWidth;
let counter = 1;

function nextSlide() {
  if (counter >= images.length) {
    carouselSlide.style.transition = 'none'; // Disable transition for instant reset
    counter = 1; // Reset counter to start from the first image after reaching the last
    carouselSlide.style.transform = 'translateX(0)';
    setTimeout(() => {
      carouselSlide.style.transition = 'transform 0.8s ease'; // Re-enable transition
    }, 50);
  } else {
    carouselSlide.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
    counter++;
  }
}

// Automatic slide every 3 seconds
setInterval(nextSlide, 3000);
