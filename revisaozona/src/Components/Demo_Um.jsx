import React from 'react'
import "./Demo_um.css"
import { useState } from 'react'


function Demo_Um() {
 let cornometro =0
   const [estado,setEstado] =
  
   useState(0)


   function incrementa_Cornometro (){

        cornometro++
console.log(cornometro)

}
 
 
 function alert_user(){

alert('oiiii😊')

    }
 function incrementar_estado(){

setEstado(estado+1)


 } function diminuir_estado(){


    setEstado(estado-1)


 }
 
    return (
    <div className='Container_Demo_um'>
        
        
        
        
        <h2>demo 1</h2>
        
        <button onClick={alert_user}>clica em mim🤬</button>
        
        <button onClick={()=>alert('oiii😉')}>exemplo arrow function</button>{ /* como usar arrow function */}
        
        <p>cornometro {cornometro}</p>
        
        <button className='incrementa_Cornometro'>aumentar cornometro</button>
        <p>estado:{estado}</p>
       <button onClick={incrementar_estado}>aumentar estado💩💩💩💩💩💩</button>
       <button onClick={diminuir_estado}> diminuir_estado estado🥶🥶🥶🥶🥶</button>
       </div>
  )
}

export default Demo_Um