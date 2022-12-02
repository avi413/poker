import React, { useState } from 'react';

function MobileNav({menu}) {
  const [selectAria, setSelectAria] = useState('false');
  const [dataState, setDataState] = useState('closing');
  const handleClick = (e) => {
    const isOpen = selectAria === 'true';
    if ( isOpen ) {
      setSelectAria('false');
      setDataState('closing');
    } else {
      setSelectAria('true');
      setDataState('opened');
    }
    
  };
  return (
    <nav className='mobile-nav'>
      <button
        className='mobile-nav__btn'
        aria-controls='mobile-nav__menu'
        aria-expanded={selectAria}
        onClick={handleClick}
      >
        <span className='mobile-nav__hidden-name'>Menu</span>
        <div className='mobile-nav__hamburger' aria-hidden='true'></div>
      </button>
      <ul className='mobile-nav__menu' data-state={dataState}>
      {menu.map((item, i) => (
        <li className='mobile-nav__menu-item' key={i}>
          <a className='mobile-nav__item-link' href='/#'>
            {item.item}
          </a>
        </li>
      ))}
       
      </ul>
    </nav>
  );
}

export default MobileNav;
