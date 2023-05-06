import React, { useEffect, useState } from 'react';

import NavbarDesktop from './desktop';
import NavBarMobile from './mobile';

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
      {isMobile ? <NavBarMobile /> : <NavbarDesktop />}
    </>
  );
};

export default NavbarContainer;
