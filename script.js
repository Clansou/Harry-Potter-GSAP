import { gsap } from "./node_modules/gsap/index.js";
let isAnimating = false;

const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeTitle = document.getElementById("welcomeTitle");
const welcomeSub = document.getElementById("welcomeSub");
const seeSchoolDiv = document.getElementById("seeSchoolDiv")
const resultElement = document.getElementById("result");
const châpô = document.getElementById("chapeauchapeau");


function animateElement() {
  gsap.to(resultElement, { duration: 0, opacity:0, y:-100});
  gsap.to(châpô,{duration: 0.1, rotation: 20});
  gsap.to(châpô,{duration: 0.2, rotation: -20,delay:0.1});
  gsap.to(châpô,{duration: 0.2, rotation: 20,delay:0.3});
  gsap.to(châpô,{duration: 0.2, rotation: -20,delay:0.5});
  gsap.to(châpô,{duration: 0.1, rotation: 0,delay:0.6});
  gsap.to(resultElement, { duration: 1,opacity:1, y:0 ,delay:1});
}

welcomeBtn.addEventListener("click", () => {
  seeSchoolDiv.style.scale = "1";
  seeSchoolDiv.style.display = "block";
  welcomeTitle.style.left= "-150px";
  welcomeTitle.style.opacity= "0";
  welcomeSub.style.opacity= "0";
  welcomeSub.style.left= "150px";
  welcomeBtn.style.opacity="0";
  welcomeBtn.style.top="150px";

  gsap.from(seeSchoolDiv, {
    opacity: 0,
    duration: 1,
    delay: 0.5,
  });
  gsap.from(welcomeBtn, {
    opacity: 1,
    duration: 1,
    delay: 0,
  });
  gsap.from(welcomeTitle, {
    opacity: 1,
    x: 150,
    duration: 1,
    delay: 0,
  });
  
  gsap.from(welcomeSub, {
    opacity: 1,
    x: -150,
    duration: 1,
    delay: 0,
  });

  gsap.to("#imgPoud", {
    opacity: 0,
    duration: 1,
    scale: 2,
  });

});

gsap.from("#welcomeTitle", {
  opacity: 0,
  x: -150,
  duration: 1,
  delay: 1,
});

gsap.from("#welcomeSub", {
  opacity: 0,
  x: 150,
  duration: 1,
  delay: 1,
});
gsap.from("#welcomeBtn", {
  opacity: 0,
  duration: 1,
  delay: 2,
});
gsap.from("#welcomeBtn", {
  opacity: 0,
  duration: 1,
  delay: 1.5,
});

gsap.to(welcomeBtn, {
  y: -20, 
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut", 
  duration: 1.5
});
