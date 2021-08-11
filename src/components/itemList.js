import React, {useState}from 'react';
import {data} from '../components/data.js'
import { Item } from './item.js';

export const ItemList = ()=>{

   const [dataFromFakeApiCall, setdataFromFakeApiCall]=useState([''])
   const [loading, setLoading] = useState('true')
   
   

   const fakeApiCall = new Promise ((resolve, reject)=>{

      setTimeout(()=>resolve(data),2000)
    
   })

   fakeApiCall.then(res =>{  
      setdataFromFakeApiCall(res)
      setLoading(false)}
   )

    return (
        <>
             {loading ? <h2>LOADING</h2> :  
            dataFromFakeApiCall.map((item)=>{
               const {id, title, description, picture, stockInicial} = item;
               
               return (
                  <div key={id}>

                    <Item 
                         id={id}
                         title={title}
                         description={description}
                         piscture={picture}
                         stockInicial={stockInicial}
                                                   
                    />


                  </div>


               )
            }
            )}
        </>
   )
}