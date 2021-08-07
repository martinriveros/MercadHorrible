import { Greetings } from './greetings.js'
import Contador from './contador.js'

export const ItemListContainer = (props)=>{
  return (
    <>
      <section id='itemListContainer'>

       <Greetings/>
        <Contador
          initialStateValue={10}
        />

      </section>

    </>
  )
}