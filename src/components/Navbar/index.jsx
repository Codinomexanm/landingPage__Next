import NavBarMobile from './mobile'
import NavbarDesktop from './desktop'
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {isMobile ? <NavBarMobile /> : <NavbarDesktop />}
    </>
  );
};

export default Navbar;

