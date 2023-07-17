import DesktopWelcome from './desktopComponents/DesktopWelcome';
import MobileWelcome from './mobileComponents/MobileWelcome';
import React, { useEffect, useState } from 'react';
function Welcome() {

  const [width , setWidth] = useState(window.innerWidth);
  const breakpoint = 1400;

  useEffect(() => {
    window.addEventListener("resize", () => {setWidth(window.innerWidth)});
  }, []);

  return (
    <>
      {
        (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? (
            <MobileWelcome width={width} breakpoint={breakpoint}/>
        ) : (
            <DesktopWelcome width={width} breakpoint={breakpoint}/>
        )
      }
    </>
  );
}

export default Welcome;
