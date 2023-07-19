import DesktopAyeb from './desktopComponents/DesktopAyeb';
import MobileAyeb from './mobileComponents/MobileAyeb';
import {React,useState,useEffect} from 'react';
function Ayeb() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1400;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <>
      {
        (width<breakpoint) ? (
          <MobileAyeb/>
        ) : (
          <DesktopAyeb/>
        )
      }
    </>
  );
}

export default Ayeb;
