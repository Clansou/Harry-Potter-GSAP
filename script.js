import { gsap } from "./node_modules/gsap/index.js";
let isAnimating = false;

const welcomeDiv = document.getElementById("welcome");
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
    scale: 0,
    opacity: 0,
    duration: 1,
    delay: 0.5,
  });
  gsap.from(welcomeBtn, {
    opacity: 1,
    y:-150,
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
gsap.from(welcomeBtn, {
  scale: 0,
  duration: 0.5,
  delay: 1.5,
});













function getHouse(onComplete) {
  var name = document.getElementById("name").value;
  if(name != ""){
    var hash = md5(name);
    var hashValue = parseInt(hash.substring(0, 8), 16);
  
    var houseNumber = hashValue % 4 + 1;
    var house;
  
    if (houseNumber === 1) {
      house = "Gryffondor";
    } else if (houseNumber === 2) {
      house = "Serpentard";
    } else if (houseNumber === 3) {
      house = "Poufsouffle";
    } else {
      house = "Serdaigle";
    }
  
    resultElement.innerHTML = house;
  }
  else{
    resultElement.innerHTML = "";
  }
  if (typeof onComplete === "function") {
    onComplete();
  }
 
}
function animateElement() {
  gsap.to(resultElement, { duration: 0, opacity:0, y:-100});
  gsap.to(châpô,{duration: 0.1, rotation: 20});
  gsap.to(châpô,{duration: 0.2, rotation: -20,delay:0.1});
  gsap.to(châpô,{duration: 0.2, rotation: 20,delay:0.3});
  gsap.to(châpô,{duration: 0.2, rotation: -20,delay:0.5});
  gsap.to(châpô,{duration: 0.1, rotation: 0,delay:0.6});
  gsap.to(resultElement, { duration: 1,opacity:1, y:0 ,delay:1});
}


document.querySelector(".btn").addEventListener("click", () => {
    getHouse(() => {
      if (isAnimating) {
        // If the animation is already playing, stop it and reset the element position
        gsap.killTweensOf("#result");
        isAnimating = false;
        animateElement();
        isAnimating = true;
      } else {
        // If the animation is not playing, start it
        animateElement();
        isAnimating = true;
      }
    });
});
