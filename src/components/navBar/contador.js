import React, {useState} from 'react'
import {VariableButton} from './variableButton.js'

export const Contador = (initialStateValue)=>{

const [stockLeft, setStockLeft] = useState(initialStateValue.stock)
const [cart, setCart] = useState(0)

const onAdd=()=>{
    if(stockLeft>0){
      setStockLeft(stockLeft-1)
      setCart(cart+1)
    } else{
      alert('no stock left')
    }
  }

  const onSub=()=>{
    if(cart>0){
      setStockLeft(stockLeft+1)
      setCart(cart-1)
    } else{
      alert('nothing ordered')
    }
  }
  const onReset = ()=>{
    setStockLeft(initialStateValue.stock)
    setCart(0)
  }


return (
        <>
          <div>Estado del contador actual: {stockLeft}</div>
          <div>Estado del cart actual: {cart}</div>
          <VariableButton 
            btnName='agregar'
            btnAction={()=>onAdd()}/>
          <VariableButton 
            btnName='quitar'
            btnAction={()=>onSub()}/>
          <VariableButton 
            btnName='resetear'
            btnAction={()=>onReset(initialStateValue)}/>
        </>
)
}
