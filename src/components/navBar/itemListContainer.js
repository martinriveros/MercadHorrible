import { Greetings } from './greetings.js'
import Contador from './contador.js'

export const ItemListContainer = (props)=>{
  return (
    <>
      <section id='itemListContainer'>

       <Greetings 
        text1="prueba"
        text2='de children'>
        <Contador
          initialStateValue={10}/>
      </Greetings>
      </section>

    </>
  )
}