const header = document.querySelector("header");
const button = document.querySelector(".nav__button");
const menu = document.querySelector(".nav__phone");
const iconNav = document.querySelector(".nav__icon");
const logo = document.querySelector(".logo");
const body = document.querySelector("body");

window.addEventListener("scroll", (e) => {
  header.classList.toggle("sticky", window.scrollY > 0);
  button.classList.toggle("sticky", window.scrollY > 0);
});

const toggle = () => {
  button.classList.toggle("open");
  if (
    button.className === "nav__button open" ||
    button.className === "nav__button sticky open"
  ) {
    menu.classList.add("flex");
    menu.animate(
      [
        // keyframes
        { opacity: "0" },
        { opacity: "100%" },
      ],
      {
        // timing options
        duration: 1000,
      }
    );

    body.style.overflow = "hidden";
    if (window.scrollY > 0) {
      header.classList.remove("sticky");
      button.classList.remove("sticky");
      header.classList.add("activeBxY");
      logo.classList.add("activeBxY");
    } else {
      header.classList.add("activeLxY");
    }
  } else {
    menu.classList.remove("flex");
    body.style.overflow = "visible";
    if (window.scrollY > 0) {
      header.classList.add("sticky");
      button.classList.add("sticky");
      header.classList.remove("activeBxY");
      logo.classList.remove("activeBxY");
    } else {
      header.classList.remove("activeLxY");
    }
  }
};

const goTo = () => {
  button.classList.remove("open");
  menu.classList.remove("flex");
  body.style.overflow = "visible";
  if (window.scrollY > 0) {
    header.classList.add("sticky");
    button.classList.add("sticky");
    header.classList.remove("activeBxY");
    logo.classList.remove("activeBxY");
  } else {
    header.classList.remove("activeLxY");
  }
};
