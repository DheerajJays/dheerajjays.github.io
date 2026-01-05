document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("coverflowTrack");
  if (!track) {
    console.error("Coverflow track not found");
    return;
  }

  const images = [...track.querySelectorAll("img")];
  let index = 0;

  function render() {
    images.forEach((img, i) => {
      img.className = "";

      if (i === index) img.classList.add("active");
      else if (i === index - 1) img.classList.add("left");
      else if (i === index + 1) img.classList.add("right");
      else img.classList.add("far");
    });
  }

  render();

  setInterval(() => {
    index = (index + 1) % images.length;
    render();
  }, 5000);
});
