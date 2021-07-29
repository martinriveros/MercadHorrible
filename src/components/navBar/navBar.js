import React from 'react'
import { NavItems } from './navitems.js';
import { Logo } from './logo.js';



export function NavBar (){
  return <>
    <div className='navContainer'>
      <Logo/>
      <NavItems/>
    </div>
  </>
  
};