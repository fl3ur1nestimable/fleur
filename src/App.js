import './AppW.css';
import './AppM.css';
import React from 'react';
function App() {

  const animateRightClicked = () => {
    let right = document.getElementById('right');
    right.style.transition = 'width 1s ease-in-out';
    right.style.width = '100%';
    let imgright = document.getElementById('imgright');
    imgright.style.filter = 'grayscale(0)';
    let left = document.getElementById('left');
    let btnright = document.getElementById('btn_right');
    btnright.style.visibility = 'hidden';
    let mainright = document.getElementById('mainright');
    mainright.style.color = 'rgb(255, 0, 85)';
    let subright = document.getElementById('subright');
    subright.style.visibility = 'visible';
    setTimeout(() => {
      left.remove();
      var i = 0;
      function move() {
        if (i == 0) {
          i = 1;
          var elem = document.getElementById("barright");
          var width = 0;
          var id = setInterval(frame, 15);
          function frame() {
            if (width >= 100) {
              clearInterval(id);
              i = 0;
            } else {
              width++;
              elem.style.width = width + "%";
              elem.innerHTML = width + "%";
            }
          }
        }
      }
      let progressright = document.getElementById('progressright');
      progressright.style.visibility = 'visible';
      move();
    }, 1000);
    setTimeout(() => {
      right.style.transition = 'height 1s ease-in-out';
      right.style.height = '0%';
    }, 3000);
  }

  const animateLeftClicked = () => {
    console.log('left clicked');
    let left = document.getElementById('left');
    left.style.transition = 'width 1s ease-in-out';
    left.style.width = '100%';
    left.style.zIndex = '2';
    let right = document.getElementById('right');
    let imgleft = document.getElementById('imgleft');
    imgleft.style.filter = 'grayscale(0)';
    let btnleft = document.getElementById('btn_left');
    btnleft.style.visibility = 'hidden';
    let mainleft = document.getElementById('mainleft');
    mainleft.style.color = 'rgb(133, 73, 24)';
    let subleft = document.getElementById('subleft');
    subleft.style.visibility = 'visible';
    subleft.style.color = 'rgb(0, 162, 255)';
    setTimeout(() => {
      right.remove();
      var i = 0;
      function move() {
        if (i == 0) {
          i = 1;
          var elem = document.getElementById("barleft");
          var width = 0;
          var id = setInterval(frame, 15);
          function frame() {
            if (width >= 100) {
              clearInterval(id);
              i = 0;
            } else {
              width++;
              elem.style.width = width + "%";
              elem.innerHTML = width + "%";
            }
          }
        }
      }
      let progressleft = document.getElementById('progressleft');
      progressleft.style.visibility = 'visible';
      move();
    }, 1000);
    setTimeout(() => {
      left.style.transition = 'height 1s ease-in-out';
      left.style.height = '0%';
    }
      , 3000);
  }


  return (
    <>
      {
        (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? (
          <>
            <div className="splitM top" id='top'>
              <div className="fleurM">
                <h1 id='maintop'>Fl3ur_1nestimable</h1>
                <h2 id='subtop'>Music | Sports | Socials</h2>
                <button id="btn_top">Let's go</button>
              </div>
              <img src="arrivalyellowfull.png" alt="arrivalyellow" id='imgtop' />
            </div>
            <div className="splitM bot" id='bot'>
              <div className="ayebM">
                <h1 id='mainbot'>Antoine Yebouet</h1>
                <h2 id='subbot'>Music | Sports | Socials</h2>
                <button id="btn_bot">Let's go</button>
              </div>
              <img src="arrivalrosefull.png" alt="arrivalyellow" id='imgbot' />
            </div>
          </>
        ) : (
          <>
            <div className="split left" id='left'>
              <div className="fleur">
                <h1 id='mainleft'>Fl3ur_1nestimable</h1>
                <h2 id='subleft'>Music | Sports | Socials</h2>
                <button id="btn_left" onClick={animateLeftClicked}>Let's go</button>
                <div id="progressleft">
                  <div id="barleft">0%</div>
                </div>
              </div>
              <img src="arrivalyellowfull.png" alt="arrivalyellow" id='imgleft' />
            </div>
            <div className="split right" id='right'>
              <div className="ayeb">
                <h1 id='mainright'>Antoine Yebouet</h1>
                <h2 id='subright'>Portfolio | Resume | Projects</h2>
                <button id="btn_right" onClick={animateRightClicked}>Enter</button>
                <div id="progressright">
                  <div id="barright">0%</div>
                </div>
              </div>
              <img src="arrivalrosefull.png" alt="arrivalrose" id='imgright' />
            </div>
          </>
        )
      }
    </>
  );
}

export default App;
