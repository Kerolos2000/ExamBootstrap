let buttonmain = document.querySelector(".carousel-control-next");
setInterval(function () {
  buttonmain.click();
}, 5000);
/////////////////////////////////////////////////////////////
let centerIcon = document.querySelector(".centerIcon");
centerIcon.onclick = function () {
  window.scrollTo(0, 0);
};
/////////////////////////////////////////////////////////////
let gears = document.querySelector("#gears")
let floatDiv = document.querySelector(".floatDiv")
gears.onclick = function () {
  floatDiv.classList.toggle("showDiv")
};
/////////////////////////////////////////////////////////////
let sections = document.querySelectorAll("section");
let nav = document.querySelector("#nav");
let navbarBrand = document.querySelector(".navbar-brand img");
let navItem = document.querySelectorAll(".nav-item");
let progressBar = document.querySelectorAll(".progress-bar");
window.onscroll = function () {
  let scrollTop = document.documentElement.scrollTop;

  if(scrollY > 200){
    nav.classList.add("shownav")
  }else{
    nav.classList.remove("shownav")
  }
/////////////////////////////////////////////////////////////
  let label = document.querySelectorAll("label");
  let About = document.querySelector("#About");
  if (window.scrollY >= About.offsetTop - 250) {
    progressBar.forEach((item) => {
      let value = item.dataset.width;
      item.style.width = `${value}%`;
    });
    label.forEach((item) => {
      item.style.opacity = '1';
    });
  } else {
    progressBar.forEach((item) => {
      item.style.width = "0%";
    });
    label.forEach((item) => {
      item.style.opacity = '0';
    });
  }
/////////////////////////////////////////////////////////////
  sections.forEach((section) => {
    if (
      scrollTop > section.offsetTop * 0.9 &&
      scrollTop < section.offsetTop + section.offsetHeight * 0.9
    ) {
      let thisSection = section.id;
      navItem.forEach(() => {
        removeClassActive();
        document
          .querySelector(`[data-dir='${thisSection}']`)
          .classList.add("active");
      });
    }
  });
};
function removeClassActive() {
  navItem.forEach((item) => {
    item.classList.remove("active");
  });
}
