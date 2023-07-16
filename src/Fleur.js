import './Fleur.css';
import './FleurM.css';
import {React,useState,useEffect} from 'react';
function Fleur() {

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1400;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);


  const copydiscord = () => {
    let text = "fl3ur1nestimable";
    navigator.clipboard.writeText(text);
  }

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
        let socials = document.getElementById("socdiv");
        socials.style.display = "none";
        let rose2 = document.getElementById("rose");
        rose2.style.display = "none";
        let otherrose2 = document.getElementById("rose2");
        otherrose2.style.display = "none";
        let wing = document.getElementById("wing");
        wing.style.display = "block";
        wing.style.animation = "opacityAnim 1s linear";
        let wing6 = document.getElementById("wing2");
        wing6.style.display = "block";
        wing6.style.animation = "opacityAnim 1s linear";
        let spotifydiv = document.getElementById("spotifydiv");
        spotifydiv.style.display = "none";
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
        let socials2 = document.getElementById("socdiv");
        socials2.style.display = "flex";
        socials2.style.animation = "opacityAnim 1s linear";
        let rose = document.getElementById("rose");
        rose.style.display = "block";
        rose.style.animation = "opacityAnim 1s linear, inout 2s linear infinite";
        let otherrose = document.getElementById("rose2");
        otherrose.style.display = "none";
        let wing2 = document.getElementById("wing");
        wing2.style.display = "none";
        let wing5 = document.getElementById("wing2");
        wing5.style.display = "none";
        let bluediv = document.getElementById("blue");
        bluediv.style.display = "none";
        let spotifydiv2 = document.getElementById("spotifydiv");
        spotifydiv2.style.display = "none";
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
        let socials3 = document.getElementById("socdiv");
        socials3.style.display = "none";
        let rose3 = document.getElementById("rose");
        rose3.style.display = "none";
        let otherrose3 = document.getElementById("rose2");
        otherrose3.style.display = "none";
        let wing3 = document.getElementById("wing");
        wing3.style.display = "block";
        wing3.style.animation = "opacityAnim 1s linear";
        let sim = document.getElementById("wing2");
        sim.style.display = "block";
        sim.style.animation = "opacityAnim 1s linear";
        let bluediv2 = document.getElementById("blue");
        bluediv2.style.display = "block";
        let spotifydiv3 = document.getElementById("spotifydiv");
        spotifydiv3.style.display = "none";
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
        let socials4 = document.getElementById("socdiv");
        socials4.style.display = "none";
        let rose4 = document.getElementById("rose");
        rose4.style.display = "none";
        let otherrose4 = document.getElementById("rose2");
        otherrose4.style.display = "block";
        otherrose4.style.animation = "opacityAnim 1s linear, inout 2s linear infinite";
        let wing4 = document.getElementById("wing");
        wing4.style.display = "none";
        let sim4 = document.getElementById("wing2");
        sim4.style.display = "none";
        let bluediv3 = document.getElementById("blue");
        bluediv3.style.display = "none";
        let spotifydiv4 = document.getElementById("spotifydiv");
        spotifydiv4.style.display = "block";
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
      {
        (width<breakpoint) ? (
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
                <p id='textjaune'>I try my best to share the things I do. Spread it to bring happiness and smiles to others :)<br></br>
                I'm not very active everywhere, but hey, do not hesitate to DM me or just come and see!<br></br></p>
                <div id='socdiv'>
                  <div id='instadiv'>
                    <a href="https://www.instagram.com/fleur_inestimable/" target="_blank"><img id='insta' src="insta.png" alt="instagram" /></a>
                  </div>
                  <div id='discorddiv'>
                    <img id='discord' src="discord.png" alt="discord" onClick={() => copydiscord()}/>
                    <h4 id='dtext'>fl3ur_1nestimable<br></br>(click to copy)</h4>

                  </div>
                  <div id='twitchdiv'>
                    <a href="https://www.twitch.tv/fl3ur_1nestimable" target="_blank"><img id='twitch' src="twitch.png" alt="twitch" /></a>
                  </div>
                  <div id='ytbdiv'>
                    <a href="https://www.youtube.com/@fl3ur_1nestimable" target="_blank"><img id='ytb' src="ytb.png" alt="youtube" /></a>
                  </div>
                </div>
                <img id='wing2' className='wing lw' src='wings.png'/>
                <img id='rose2' src='rose.png'/>
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
                <p id='textbrown' style={{width:'80%'}}>I Can't live without music.<br></br>I'm a musician, currently playing/learning piano and drums,I want to play as many instruments as possible.
                I'm also a music producer, in the learning phase :D. I like jazz, electro, swing, latino, and more, improvising, just playing what I love, and of course, have fun! If you want to play with me or do something, just contact me !</p>
                <div id="spotifydiv">
                <iframe id='spotify' src="https://open.spotify.com/embed/track/2Jk4bVmplmMxWdJIfLzuZh?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>       
                <iframe id= 'sd'  width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1108319149&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                </div>
                <img id='rose' src='rose.png'/>
                <img id='wing' className='wing rw' src='wings.png'/>
              </div>
              <div id='blue' hidden="false">
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
