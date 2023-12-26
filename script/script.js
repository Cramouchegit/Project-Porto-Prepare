const navbar = document.querySelector(".navbar");

window.onscroll = () => {
  var top = window.scrollY;
  if (top >= 950) {
    navbar.classList.add("navbarDark");
  } else {
    navbar.classList.remove("navbarDark");
  }
};
