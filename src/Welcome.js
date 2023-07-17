import './Welcome.css';
import './WelcomeM.css';
import DesktopWelcome from './desktopComponents/DesktopWelcome';
import MobileWelcome from './mobileComponents/MobileWelcome';
import React, { useEffect, useState } from 'react';
function Welcome() {

  const [witdh , setWidth] = useState(window.innerWidth);
  const breakpoint = 1400;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <>
      {
        (witdh<breakpoint) ? (
            <MobileWelcome />
        ) : (
            <DesktopWelcome />
        )
      }
    </>
  );
}

export default Welcome;
