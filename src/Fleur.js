import './Fleur.css';
import './FleurM.css';
import React from 'react';
function Fleur() {

  const rotatePetale = () => {
    let petale = document.getElementById("petale");
    petale.style.animation = "rotate 1s linear";
    setTimeout(() => {
      petale.style.animation = "none";
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
        let titlenoir = document.getElementById("titlenoir");
        titlenoir.style.display = "block";
        titlenoir.style.animation = "opacityAnim 1s linear";
        let textnoir = document.getElementById("textnoir");
        textnoir.style.display = "block";
        textnoir.style.animation = "opacityAnim 1s linear";
        let titlejaune = document.getElementById("titlejaune");
        titlejaune.style.display = "none";
        let textjaune = document.getElementById("textjaune");
        textjaune.style.display = "none";
        let titleblue = document.getElementById("titleblue");
        titleblue.style.display = "none";
        let textblue = document.getElementById("textblue");
        textblue.style.display = "none";
        let titlebrown = document.getElementById("titlebrown");
        titlebrown.style.display = "none";
        let textbrown = document.getElementById("textbrown");
        textbrown.style.display = "none";
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
        let titlejaune2 = document.getElementById("titlejaune");
        titlejaune2.style.display = "block";
        titlejaune2.style.animation = "opacityAnim 1s linear";
        let textjaune2 = document.getElementById("textjaune");
        textjaune2.style.display = "block";
        textjaune2.style.animation = "opacityAnim 1s linear";
        let titlenoir2 = document.getElementById("titlenoir");
        titlenoir2.style.display = "none";
        let textnoir2 = document.getElementById("textnoir");
        textnoir2.style.display = "none";
        let titleblue2 = document.getElementById("titleblue");
        titleblue2.style.display = "none";
        let textblue2 = document.getElementById("textblue");
        textblue2.style.display = "none";
        let titlebrown2 = document.getElementById("titlebrown");
        titlebrown2.style.display = "none";
        let textbrown2 = document.getElementById("textbrown");
        textbrown2.style.display = "none";
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
        let titleblue3 = document.getElementById("titleblue");
        titleblue3.style.display = "block";
        titleblue3.style.animation = "opacityAnim 1s linear";
        let textblue3 = document.getElementById("textblue");
        textblue3.style.display = "block";
        textblue3.style.animation = "opacityAnim 1s linear";
        let titlenoir3 = document.getElementById("titlenoir");
        titlenoir3.style.display = "none";
        let textnoir3 = document.getElementById("textnoir");
        textnoir3.style.display = "none";
        let titlejaune3 = document.getElementById("titlejaune");
        titlejaune3.style.display = "none";
        let textjaune3 = document.getElementById("textjaune");
        textjaune3.style.display = "none";
        let titlebrown3 = document.getElementById("titlebrown");
        titlebrown3.style.display = "none";
        let textbrown3 = document.getElementById("textbrown");
        textbrown3.style.display = "none";
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
        let titlebrown4 = document.getElementById("titlebrown");
        titlebrown4.style.display = "block";
        titlebrown4.style.animation = "opacityAnim 1s linear";
        let textbrown4 = document.getElementById("textbrown");
        textbrown4.style.display = "block";
        textbrown4.style.animation = "opacityAnim 1s linear";
        let titlenoir4 = document.getElementById("titlenoir");
        titlenoir4.style.display = "none";
        let textnoir4 = document.getElementById("textnoir");
        textnoir4.style.display = "none";
        let titleblue4 = document.getElementById("titleblue");
        titleblue4.style.display = "none";
        let textblue4 = document.getElementById("textblue");
        textblue4.style.display = "none";
        let titlejaune4 = document.getElementById("titlejaune");
        titlejaune4.style.display = "none";
        let textjaune4 = document.getElementById("textjaune");
        textjaune4.style.display = "none";
        break;
    }
    let picks = document.querySelectorAll('[id="pick"]');
    picks.forEach(pick => {
      pick.style.display = "none";
    });
    let pickp = document.getElementById("pickp");
    pickp.style.display = "none";
  }

  const displaySelectedM = (color) => {
    let text = document.getElementById("textpick");
    text.style.display = "none";
    switch (color) {
      case "noir":
        let noir = document.getElementById("menunoir");
        noir.style.border = "2px solid white";
        noir.style.transform = "translate(0,-50%)";
        document.body.style.backgroundColor = "black";
        document.body.style.transitionDuration = "1s";
        let jaune = document.getElementById("menujaune");
        let blue = document.getElementById("menublue");
        let brown = document.getElementById("menubrown");
        jaune.style.transform = "translate(0,0)";
        blue.style.transform = "translate(0,0)";
        brown.style.transform = "translate(0,0)";
        jaune.style.border = "none";
        blue.style.border = "none";
        brown.style.border = "none";
        jaune.style.opacity = "50%";
        blue.style.opacity = "50%";
        brown.style.opacity = "50%";
        noir.style.opacity = "100%";
        break;

      case "jaune":
        let jaune2 = document.getElementById("menujaune");
        jaune2.style.border = "2px solid white";
        jaune2.style.transform = "translate(0,-50%)";
        document.body.style.backgroundColor = "#FFDE59";
        document.body.style.transitionDuration = "1s";
        let noir2 = document.getElementById("menunoir");
        let blue2 = document.getElementById("menublue");
        let brown2 = document.getElementById("menubrown");
        noir2.style.border = "none";
        blue2.style.border = "none";
        brown2.style.border = "none";
        noir2.style.transform = "translate(0,0)";
        blue2.style.transform = "translate(0,0)";
        brown2.style.transform = "translate(0,0)";
        noir2.style.opacity = "50%";
        blue2.style.opacity = "50%";
        brown2.style.opacity = "50%";
        jaune2.style.opacity = "100%";
        break;

      case "blue":
        let blue3 = document.getElementById("menublue");
        blue3.style.border = "2px solid white";
        blue3.style.transform = "translate(0,-50%)";
        document.body.style.backgroundColor = "#5CE1E6";
        document.body.style.transitionDuration = "1s";
        let jaune3 = document.getElementById("menujaune");
        let noir3 = document.getElementById("menunoir");
        let brown3 = document.getElementById("menubrown");
        jaune3.style.border = "none";
        noir3.style.border = "none";
        brown3.style.border = "none";
        jaune3.style.transform = "translate(0,0)";
        noir3.style.transform = "translate(0,0)";
        brown3.style.transform = "translate(0,0)";
        jaune3.style.opacity = "50%";
        noir3.style.opacity = "50%";
        brown3.style.opacity = "50%";
        blue3.style.opacity = "100%";
        break;

      case "brown":
        let brown4 = document.getElementById("menubrown");
        brown4.style.border = "2px solid white";
        brown4.style.transform = "translate(0,-50%)";
        document.body.style.backgroundColor = "#863B0B";
        document.body.style.transitionDuration = "1s";
        let jaune4 = document.getElementById("menujaune");
        let blue4 = document.getElementById("menublue");
        let noir4 = document.getElementById("menunoir");
        jaune4.style.border = "none";
        blue4.style.border = "none";
        noir4.style.border = "none";
        jaune4.style.transform = "translate(0,0)";
        blue4.style.transform = "translate(0,0)";
        noir4.style.transform = "translate(0,0)";
        jaune4.style.opacity = "50%";
        blue4.style.opacity = "50%";
        noir4.style.opacity = "50%";
        brown4.style.opacity = "100%";
        break;


    }
  }

  return (
    <>
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v17.0" nonce="a3WPTSHI"></script>
      {
        (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? (
          <>
            <div id='fleurpageM'>
              <img id="fraiseM" src="strawberryfull.png" alt="fraise" />
              <div id='textpickM'>
                <p id='textpick'>Pick your poison</p>
              </div>
              <div id='menu'>
                <button id='menunoir' onClick={() => displaySelectedM("noir")}></button>
                <button id='menubrown' onClick={() => displaySelectedM("brown")}></button>
                <button id='menublue' onClick={() => displaySelectedM("blue")}></button>
                <button id='menujaune' onClick={() => displaySelectedM("jaune")}></button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div id='fleurpage'>
              <div id='noir'>
                <h1 id='pick'>Hi.</h1>
                <h1 id='titlenoir'>Fl3ur_1nestimable</h1>
                <p id='textnoir'>Hi! Welcome to Fl3ur_1nestimable's page.<br></br>Take a seat, drink some thea.<br></br> Enjoy your life.<br></br></p>
              </div>
              <div id='jaune'>
                <h1 id='pick'>Pick</h1>
                <h1 id='titlejaune'>Socials</h1>
                <p id='textjaune'>Find me anywhere (not on tiktok tho).</p>
                <h2><a href="https://www.instagram.com/fleur_inestimable/" target="_blank">Instagram</a></h2><img id='insta' src="insta.png" alt="instagram" />
                
              </div>
              <div id="petale">
                <button id="petalenoir" onClick={() => displaySelected("noir")}></button>
                <button id="petalebrown" onClick={() => displaySelected("brown")}></button>
                <button id="petaleblue" onClick={() => displaySelected("blue")}></button>
                <button id="petalejaune" onClick={() => displaySelected("jaune")}></button>
                <div id="centerfraise">
                  <img id="fraise" src="strawberryfull.png" alt="fraise" onClick={rotatePetale} />
                </div>
              </div>
              <div id='brown'>
                <h1 id='pick'>Your</h1>
                <h1 id='titlebrown'>Music</h1>
                <p id='textbrown'>Can't live without music.</p>
              </div>
              <div id='blue'>
                <h1 id='pick'>Poison</h1>
                <h1 id='titleblue'>Sports</h1>
                <p id='textblue'>I love sports.</p>
                <p id='pickp'>Or spin Me :D</p>
              </div>
            </div>
          </>
        )
      }
    </>
  );
}

export default Fleur;
