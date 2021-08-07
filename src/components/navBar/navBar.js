import React from 'react'
import {Logo} from './logo.js';
import { CartWidget } from './CartWidget.js';


export function NavBar (){
  return <>
    <div className='logo-container'>
      <Logo/>
      
    </div>
    <div className='nav-container'>
      <ul className="nav-list">
        <li className="item-menu"><a href="#algo">Nosotros</a></li>
        <li className="item-menu"><a href="#algo">Contacto</a></li>
        <li className="item-menu"><a href="#algo">HOT</a></li>
        <li className="item-menu"><a href="#algo">Productos</a></li>
       </ul>
       <CartWidget/>
    </div>
  </>
  
};