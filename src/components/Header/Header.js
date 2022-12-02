import React from 'react';
import PcLogo from '../../media/poker-20-years-logo-PC.png';
import Navigation from '../Navigation/Navigation';
import { menu } from '../../const/menu';
import MobileNav from '../MobileNav/MobileNav';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
      <MobileNav menu={menu}/>
        <div className='header__logo-container'>
        <a href="/" className="header__logo_item">
             <span>
                 <img className="header__logo_img" src={PcLogo} rel="preload" alt="poker" id="poker-logo" />
             </span>
         </a>
        </div>
        <div className='header__menu'>
        <Navigation menu={menu}/>
        </div>

        <button className='btn btn-primary'>play Now</button>
      </div>
    </header>
  )
}

export default Header