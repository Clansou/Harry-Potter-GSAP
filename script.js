export function getHouse() {
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
 
}