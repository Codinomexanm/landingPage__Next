import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import NavBarMobile from './NavBarMobile';

const NavbarContainer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <NavBarMobile /> : <NavBar />}
    </>
  );
};

export default NavbarContainer;
