import DesktopFleur from './desktopComponents/DesktopFleur';
import MobileFleur from './mobileComponents/MobileFleur';
import {React,useState,useEffect} from 'react';
function Fleur() {

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1400;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <>
      {
        (width<breakpoint) ? (
          <MobileFleur/>
        ) : (
          <DesktopFleur/>
        )
      }
    </>
  );
}

export default Fleur;
