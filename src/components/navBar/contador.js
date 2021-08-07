import React, {useState} from 'react'
import {VariableButton} from './variableButton.js'



// componente de clase



const Contador = ({initialStateValue})=>{

const [counter, setCounter] = useState(initialStateValue)

return (
        <>
          <div>Estado del contador actual: {counter}</div>
          <VariableButton 
            btnName='agregar'
            btnAction={()=>setCounter(counter+1)}/>
          <VariableButton 
            btnName='quitar'
            btnAction={()=>setCounter(counter-1)}/>
          <VariableButton 
            btnName='resetear'
            btnAction={()=>setCounter(initialStateValue)}/>
        </>
)
}

export default Contador