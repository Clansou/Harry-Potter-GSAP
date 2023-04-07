import { gsap } from "./node_modules/gsap/index.js";
let isAnimating = false;

const welcomeDiv = document.getElementById("welcome");
const welcomeBtn = document.getElementById("welcomeBtn");
const seeSchoolDiv = document.getElementById("seeSchoolDiv")

welcomeBtn.addEventListener("click", () => {
  welcomeDiv.style.display = "none";
  seeSchoolDiv.style.zIndex = "2";
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
  
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = name + ", vous êtes à " + house + " !";
  }
  else{
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Il faut écrire un mot pour savoir dans quel école c'est.";
  }
  if (typeof onComplete === "function") {
    onComplete();
  }
 
}
function animateElement() {
  gsap.to("#result", { duration: 1, x: 100, y: 100 });
}


document.querySelector(".btn").addEventListener("click", () => {
    getHouse(() => {
      if (isAnimating) {
        // If the animation is already playing, stop it and reset the element position
        gsap.killTweensOf("#result");
        gsap.set("#result", { x: 0, y: 0 });
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