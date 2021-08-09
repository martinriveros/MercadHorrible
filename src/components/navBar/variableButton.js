import React from 'react'

export const VariableButton = ({btnName, btnAction})=>{

  return(
          <button type='button' onClick={btnAction}>{btnName}</button>
   )
}