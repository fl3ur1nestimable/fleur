import './Fleur.css';
import './Fleur.css';
import React from 'react';
function Fleur() {

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

export default Fleur;
