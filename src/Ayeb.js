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
                  42
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