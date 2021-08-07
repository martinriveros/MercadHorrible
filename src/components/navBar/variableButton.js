import React from 'react'

export const VariableButton = ({btnName, btnAction})=>{

  return(
          <button onClick={btnAction}>{btnName}</button>
   )
}