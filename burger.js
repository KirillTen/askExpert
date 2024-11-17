const menu = document.querySelector(".header__nav");
const menuBtn = document.querySelector(".menu-icon");

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });

  menu.querySelectorAll('a[href*="#').forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("lock");
    });
  });
}

const anchors = document.querySelectorAll('a[href*="#');

anchors.forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();

    const blockID = anchor.getAttribute("href").substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
