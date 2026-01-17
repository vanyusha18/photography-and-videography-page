// optional cinematic polish
document.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.style.background =
    window.scrollY > 50 ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0.85)";
});