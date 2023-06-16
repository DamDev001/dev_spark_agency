/*-----------------------------------*\
  #script.js
\*-----------------------------------*\

/**
 * copyright 2023 DevSpark
 */


/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

/**
 * Projects tab section
 */

const filter_btns = document.getElementsByClassName("filter-btn");
const gridList = document.getElementsByClassName("grid-list")

function projectLink(tabName) {
  for(link of filter_btns){
    link.classList.remove("active")
  }

  for(project of gridList){
    project.classList.remove("active-project")
  }


  event.currentTarget.classList.add("active")
  document.getElementById(tabName).classList.add("active-project")
}

gsap.registerPlugin(ScrollTrigger)

gsap.from(".hero-content", 2, {
  x: -400,
})

gsap.from(".hero-banner", 2, {
  x: 400,
})

const tl = gsap.timeline()

gsap.from(".top-section", 2, {
  scrollTrigger: ".top-section",
  opacity: 1,
  y:100
})

gsap.from(".stagger", 1, {
  scrollTrigger: ".stagger",
  stagger: 1, 
  opacity: 0,
  y: 200
})


gsap.from(".feature-banner", 2, {
  scrollTrigger: ".feature-banner",
  stagger: 1, 
  opacity: 0,
  x: -200
})

gsap.from(".feature-content", 3, {
  scrollTrigger: ".feature-banner",
  stagger: 1, 
  opacity: 0,
  x: 200,
  delay: 1,
})

gsap.from(".top-sub-cont", 2, {
  scrollTrigger: ".top-sub-cont",
  opacity: 0,
  y: -100,
})

gsap.from(".filter-list", 2, {
  scrollTrigger: ".filter-list",
  opacity: 0,
  y: -100,
  delay: 1
})

gsap.from(".project-card", {
  scrollTrigger: ".filter-list",
  duration: 1,
  scale: 0.1,
  y: 40,
  ease: "power1.inOut",
  stagger: {
    grid: [7,15],
    from: "edges",
    axis: "x",
    ease: "power3.inOut",
    amount: 1.5
  }
});

gsap.from(".newsletter-banner", 2, {
  scrollTrigger: ".newsletter-banner",
  opacity: 0,
  x: -100,
})

gsap.from(".form-title", 2, {
  scrollTrigger: ".form-title",
  opacity: 0,
  x: 100,
})

