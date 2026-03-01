const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");

menu.onclick = () => {
  nav.classList.toggle("show");
};