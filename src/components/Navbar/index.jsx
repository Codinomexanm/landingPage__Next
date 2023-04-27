import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import style from './style.module.css'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleClick = () => {
    setClicked(!clicked);
    alert("clicado")
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
        <button id={style.mobile} onClick={handleClick} className={style.trashButton}>
          <FiMenu id={style.bar}
            size={28} color='#ea3140' />
        </button>
      </nav>
    </>
  );
};

export default Navbar;