function sendMessage(e) {
  e.preventDefault();
  alert("Message sent successfully!");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// scroll animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    let top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// 3D tilt effect
const box = document.getElementById("tiltBox");

document.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.clientX) / 25;
  let y = (window.innerHeight / 2 - e.clientY) / 25;

  if (box) {
    box.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  }
});
