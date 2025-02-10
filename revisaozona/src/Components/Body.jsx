import React from 'react'
import "./Body.css"
import Demo_Um from './Demo_Um'
import Aviso from './Aviso'
import Demo_dois from './Demo_dois'

function Body() {
  return (
    <div className='container_Body'>
        
        
        <h1>Body</h1>
    
        <img src="https://imgnike-a.akamaihd.net/1920x1920/0249955B.jpg" alt=""  className='tenis_legal_laranja'/>
        
        
        <Demo_Um/>
        <Aviso/>
        <Demo_dois/>
        
        
        
        </div>
  )
}

export default Body