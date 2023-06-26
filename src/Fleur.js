import './Fleur.css';
import './Fleur.css';
import React from 'react';
function Fleur() {

  const rotatePetale = () => {
    let petale = document.getElementById("petale");
    petale.style.transform = "translate(-50%,-50%) rotate(360deg)";
    petale.style.transformOrigin = "center";
    petale.style.transition = "transform 1s ease-in-out";
    setTimeout(() => {
      petale.style.transform = "translate(-50%,-50%) rotate(0deg)";
      petale.style.transformOrigin = "none";
      petale.style.transition = "transform 1s ease-in-out";
    }, 1000);
  }

  const displaySelected = (color) => {
    switch (color) {
      case "noir":
        let noir = document.getElementById("petalenoir");
        noir.style.border = "2px solid white";
        noir.style.transform = "translate(50%,-15%) rotate(45deg)";
        document.body.style.backgroundColor = "black";
        document.body.style.transitionDuration = "1s";
        let jaune = document.getElementById("petalejaune");
        let blue = document.getElementById("petaleblue");
        let brown = document.getElementById("petalebrown");
        jaune.style.border = "none";
        blue.style.border = "none";
        brown.style.border = "none";
        jaune.style.transform = "translate(0,-50%) rotate(45deg)";
        blue.style.transform = "translate(-50%,0) rotate(45deg)";
        brown.style.transform = "translate(0,-50%) rotate(45deg)";
        jaune.style.opacity = "50%";
        blue.style.opacity = "50%";
        brown.style.opacity = "50%";
        noir.style.opacity = "100%";
        break;
      
      case "jaune":
        let jaune2 = document.getElementById("petalejaune");
        jaune2.style.border = "2px solid white";
        jaune2.style.transform = "translate(-15%,-50%) rotate(45deg)";
        document.body.style.backgroundColor = "#FFDE59";
        document.body.style.transitionDuration = "1s";
        let noir2 = document.getElementById("petalenoir");
        let blue2 = document.getElementById("petaleblue");
        let brown2 = document.getElementById("petalebrown");
        noir2.style.border = "none";
        blue2.style.border = "none";
        brown2.style.border = "none";
        noir2.style.transform = "translate(50%,0) rotate(45deg)";
        blue2.style.transform = "translate(-50%,0) rotate(45deg)";
        brown2.style.transform = "translate(0,-50%) rotate(45deg)";
        noir2.style.opacity = "50%";
        blue2.style.opacity = "50%";
        brown2.style.opacity = "50%";
        jaune2.style.opacity = "100%";
        break;

      case "blue":
        let blue3 = document.getElementById("petaleblue");
        blue3.style.border = "2px solid white";
        blue3.style.transform = "translate(-50%,15%) rotate(45deg)";
        document.body.style.backgroundColor = "#5CE1E6";
        document.body.style.transitionDuration = "1s";
        let jaune3 = document.getElementById("petalejaune");
        let noir3 = document.getElementById("petalenoir");
        let brown3 = document.getElementById("petalebrown");
        jaune3.style.border = "none";
        noir3.style.border = "none";
        brown3.style.border = "none";
        jaune3.style.transform = "translate(0,-50%) rotate(45deg)";
        noir3.style.transform = "translate(50%,0) rotate(45deg)";
        brown3.style.transform = "translate(0,-50%) rotate(45deg)";
        jaune3.style.opacity = "50%";
        noir3.style.opacity = "50%";
        brown3.style.opacity = "50%";
        blue3.style.opacity = "100%";
        break;
      
      case "brown":
        let brown4 = document.getElementById("petalebrown");
        brown4.style.border = "2px solid white";
        brown4.style.transform = "translate(15%,-50%) rotate(45deg)";
        document.body.style.backgroundColor = "#863B0B";
        document.body.style.transitionDuration = "1s";
        let jaune4 = document.getElementById("petalejaune");
        let blue4 = document.getElementById("petaleblue");
        let noir4 = document.getElementById("petalenoir");
        jaune4.style.border = "none";
        blue4.style.border = "none";
        noir4.style.border = "none";
        jaune4.style.transform = "translate(0,-50%) rotate(45deg)";
        blue4.style.transform = "translate(-50%,0) rotate(45deg)";
        noir4.style.transform = "translate(50%,0) rotate(45deg)";
        jaune4.style.opacity = "50%";
        blue4.style.opacity = "50%";
        noir4.style.opacity = "50%";
        brown4.style.opacity = "100%";
        break;
    }
  }

  return (
    <>
      {
        (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? (
          <>
          </>
        ) : (
          <>
            <div id='fleurpage'>
             <div id="petale">
              <button id="petalenoir" onClick={() => displaySelected("noir")}></button>
              <button id="petalebrown" onClick={() => displaySelected("brown")}></button>
              <button id="petaleblue" onClick={() => displaySelected("blue")}></button>
              <button id="petalejaune" onClick={() => displaySelected("jaune")}></button>
              <div id="centerfraise">
                <img id="fraise" src="strawberryfull.png" alt="fraise" onClick={rotatePetale} />
              </div>
             </div>
            </div>
          </>
        )
      }
    </>
  );
}

export default Fleur;
