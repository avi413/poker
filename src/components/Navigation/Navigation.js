import React from 'react';
import { NavLink } from 'react-router-dom';


function Navigation({menu}) {
  return (
    <nav className='navigation'>
      <ul className='menu'>
        {menu.map((item, i) => (
          <li className='menu__item' key={i}>
            <NavLink to='#x'>{item.item}</NavLink>
            <ul className='subMenu'>
              {Object.values(item.subItem).map((subItem, j) => (
                <li className='subMenu__item' key={j}>
                  <NavLink to='#x'>{subItem}</NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
