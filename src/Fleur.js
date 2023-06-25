import './Fleur.css';
import './Fleur.css';
import React from 'react';
import Slider from 'infinite-react-carousel';
function Fleur(props) {

  return (
    <>
      {
        (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? (
          <>
          </>
        ) : (
          <>
            <div id='fleurpage'>
              <div id='bannerfleur'>
                <div id="bannercontent">
                  <div id='contentleft'>
                    <img id="strawberry" src="strawberryfull.png" alt="strawberry" />
                  </div>
                  <div id='contentright'>
                    <h1 id='titlefleur'>
                      Fl3ur_1nestimable
                    </h1>
                    <div id='wlcmsg'>
                      <p id='wlcmsgp'>
                        <span id='wlcmsgspan'>Welcome to Fl3ur_1nestimable !<br />
                          So here I will right something, one day. So for now, just enjoy the lorem ipsum :
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor nunc, tincidunt consectetur sodales a, volutpat vestibulum sem. Donec sagittis imperdiet lorem id condimentum.</span>
                      </p>
                    </div>
                  </div>
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
