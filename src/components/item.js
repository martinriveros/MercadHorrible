import React from 'react';
import {Contador} from "./navBar/contador.js"


export const Item=({id, title, description, picture, stockInicial})=>{

  return(
    <>
      <div>Id: {id}</div>
      <div>Articulo: {title}</div>
      <div>Descripcion: {description}</div>
            
      <Contador stock={stockInicial}/>
    </>
  )
}