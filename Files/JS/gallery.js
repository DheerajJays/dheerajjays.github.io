const track = document.getElementById("carouselTrack");

if (track) {
  let index = 0;
  let images = Array.from(track.children);

  // Shuffle once at start
  images.sort(() => Math.random() - 0.5);
  images.forEach(img => track.appendChild(img));

  function moveCarousel() {
    index++;
    if (index >= images.length) {
      index = 0;
    }

    track.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(moveCarousel, 5000);
}
