document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("coverflowTrack");
  if (!track) return;

  const images = Array.from(track.querySelectorAll("img"));
  let current = 0;

  let startX = 0;
  let isDragging = false;

  function render() {
    images.forEach((img, i) => {
      img.className = "";

      if (i === current) img.classList.add("active");
      else if (i === current - 1) img.classList.add("left");
      else if (i === current + 1) img.classList.add("right");
      else img.classList.add("far");
    });
  }

  render();

  /* ===== MOUSE ===== */
  track.addEventListener("mousedown", e => {
    isDragging = true;
    startX = e.clientX;
  });

  window.addEventListener("mouseup", e => {
    if (!isDragging) return;
    handleSwipe(e.clientX);
    isDragging = false;
  });

  /* ===== TOUCH ===== */
  track.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  track.addEventListener("touchend", e => {
    handleSwipe(e.changedTouches[0].clientX);
  });

  function handleSwipe(endX) {
    const diff = endX - startX;

    if (Math.abs(diff) < 50) return; // ignore small moves

    if (diff < 0) {
      // swipe left → next
      current = (current + 1) % images.length;
    } else {
      // swipe right → prev
      current = (current - 1 + images.length) % images.length;
    }

    render();
  }
});
