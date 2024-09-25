let keyClick = document.getElementsByClassName("key");

   

for (let index = 0; index < keyClick.length; index++) {
   keyClick[index].addEventListener("click", (e) => playSound(e.target.innerHTML));  
}


function playSound(i) {
   
   switch (i){
      case "C":
         let cSound = new Audio('sounds/C.mpeg');
         cSound.play();
         break;

      case "C#":
         let chashSound = new Audio('sounds/C%23.mpeg');
         chashSound.play();
         break;
      case "D":
         let dSound = new Audio('sounds/D.mpeg');
         dSound.play();
         break;
      case "D#":
         let dhashSound = new Audio('sounds/D%23.mpeg');
         dhashSound.play();
         break;
      case "E":
         let eSound = new Audio('sounds/E.mpeg');
         eSound.play();
         break;
      case "F":
         let fSound = new Audio('sounds/F.mpeg');
         fSound.play();
         break;
      case "F#":
         let fhashSound = new Audio('sounds/F%23.mpeg');
         fhashSound.play();
         break;
      case "G":
         let gSound = new Audio('sounds/G.mpeg');
         gSound.play();
         break;
      case "G#":
         let ghashSound = new Audio('sounds/G%23.mpeg');
         ghashSound.play();
         break;
      case "A":
         let aSound = new Audio('sounds/A.mpeg');
         aSound.play();
         break;
      case "A#":
         let ahashSound = new Audio('sounds/A%23.mpeg');
         ahashSound.play();
         break;
      case "B":
         let bSound = new Audio('sounds/B.mpeg');
         bSound.play();
         break;  
      case "C1":
         let c1Sound = new Audio('sounds/C1.mpeg');
         c1Sound.play();
         break;  
      default:
         break;
   }
   
}