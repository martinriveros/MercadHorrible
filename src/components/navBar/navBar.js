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
        <li className="item-menu"><a href="#">Nosotros</a></li>
        <li className="item-menu"><a href="#">Contacto</a></li>
        <li className="item-menu"><a href="#">HOT</a></li>
        <li className="item-menu"><a href="#">Productos</a></li>
       </ul>
       <CartWidget/>
    </div>
  </>
  
};