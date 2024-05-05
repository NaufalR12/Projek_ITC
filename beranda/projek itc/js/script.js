//Toggle class active
const navbarNav = document.querySelector(".navbarr-nav");
//ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const container = document.querySelector(".container");
const carouser1 = document.querySelector(".scroll-horizontal");

let isDragging = false;
let startX;
let startScrollLeft;
let hoverScrollInterval;

const startHoverScroll = () => {
  hoverScrollInterval = setInterval(() => {
    carouser1.scrollLeft += 5; // Menyesuaikan kecepatan scroll
  }, 50); // Interval scroll
};

const stopHoverScroll = () => {
  clearInterval(hoverScrollInterval);
};

const dragStart = (e) => {
  isDragging = true;
  startX = e.pageX - carouser1.offsetLeft; // Hitung posisi mouse relative terhadap elemen carouser1
  startScrollLeft = carouser1.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  e.preventDefault(); // Mencegah seleksi teks saat drag
  const x = e.pageX - carouser1.offsetLeft; // Hitung posisi mouse relative terhadap elemen carouser1
  const walk = (x - startX) * 2; // Menyesuaikan kecepatan scroll
  carouser1.scrollLeft = startScrollLeft - walk;
};

const dragStop = () => {
  isDragging = false;
};

container.addEventListener("mouseenter", startHoverScroll);
container.addEventListener("mouseleave", stopHoverScroll);
container.addEventListener("mousedown", dragStart);
container.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
