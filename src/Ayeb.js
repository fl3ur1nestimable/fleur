import './Ayeb.css';
import './AyebM.css';
import React from 'react';
function Ayeb() {

  return (
    <>
      {
        (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? (
          <>
            
          </>
        ) : (
          <>
            
          </>
        )
      }
    </>
  );
}

export default Ayeb;
