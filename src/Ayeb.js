import './Ayeb.css';
import './AyebM.css';
import React from 'react';
function Ayeb() {
  console.log("Ayeb here");
  return (
    <>
      {
        (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? (
          <>

          </>
        ) : (
          <>
            <div id='ayebpage'>
              <div id='banner ayeb'>
                <div id='menu'>
                  <button id='btn_menu'>Portfolio</button>
                  <button id='btn_menu'>Resume</button>
                  <button id='btn_menu'>Projects</button>
                </div>
              </div>
            </div>
          </>
        )
      }
    </>
  );
}

export default Ayeb;
