import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import style from './style.module.css'
import { FiMenu, FiCrosshair } from 'react-icons/fi'

const NavbarDesktop = () => {
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleClick = () => {
    setClicked(!clicked);
    console.log(clicked);
  };

  return (
    <>
      <nav className={style.navbar}>
        <Link href="/"><Image src="/logo.png" alt="Descrição da imagem" width={90} height={90} className={style.imgs} /></Link>
        <div className={style.links}>
          <ul className={style.navbars}>
            <li><Link href="/" className={style.active}>Home</Link></li>
            <li><Link href="/about" >Sobre</Link></li>
            <li><Link href="/contact" >contato</Link></li>
          </ul>
        </div>
        <div id={style.mobile}>
          <button className={style.trashButton} onClick={() => setClicked(!clicked)}>
            {
              clicked ?
                (
                  <FiMenu id={style.bar} className={style.bar}
                    size={28} color='#ea3140' />
                ) :
                (<FiCrosshair id={style.bar} className={style.bar}
                  size={28} color='#ea3140' />)
            }
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavbarDesktop;