import { gsap } from "./node_modules/gsap/index.js";
let isAnimating = false;

const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeTitle = document.getElementById("welcomeTitle");
const welcomeSub = document.getElementById("welcomeSub");
const seeSchoolDiv = document.getElementById("seeSchoolDiv")
const resultElement = document.getElementById("result");
const châpô = document.getElementById("chapeauchapeau");

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

function getHouse(onComplete) {
  const name = document.getElementById("name").value;
  const resultElement = document.getElementById("result");

  if(name !== ""){
    const hash = md5(name);
    const hashValue = parseInt(hash.substring(0, 8), 16);
    const houseNumber = hashValue % 4 + 1;

    const houseList = ["Gryffondor", "Serpentard", "Poufsouffle", "Serdaigle"];
    const imgList = ["img/gry.webp", "img/serp.png", "img/pouf.png", "img/ser.png"];

    const house = houseList[houseNumber - 1] || "";
    const imgSrc = imgList[houseNumber - 1] || "img/wood.png";

    resultElement.innerHTML = house;
    const houseImg = document.getElementById("houseImg")
    houseImg.style.display = "block";
    houseImg.src = imgSrc;
  }

  if (typeof onComplete === "function") {
    onComplete();
  }
}



function animateElement() {
  gsap.to(resultElement, { duration: 0, opacity:0, y:-100});
  gsap.to(houseImg,{opacity:0 ,scale:0, duration:0})
  gsap.to(châpô,{duration: 0.1, rotation: 20});
  gsap.to(châpô,{duration: 0.2, rotation: -20,delay:0.1});
  gsap.to(châpô,{duration: 0.2, rotation: 20,delay:0.3});
  gsap.to(châpô,{duration: 0.2, rotation: -20,delay:0.5});
  gsap.to(châpô,{duration: 0.1, rotation: 0,delay:0.6});
  gsap.to(houseImg,{opacity:1 ,scale:1, duration:1})
  gsap.to(resultElement, { duration: 1,opacity:1, y:0 ,delay:1});
}

document.querySelector(".btn").addEventListener("click", () => {
    getHouse(() => {
      if (isAnimating) {
        gsap.killTweensOf("#result");
        isAnimating = false;
        animateElement();
        isAnimating = true;
      } else {
        animateElement();
        isAnimating = true;
      }
    });
});