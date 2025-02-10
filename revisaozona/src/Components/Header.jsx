import React from 'react'
import './Header.css'
import Boas_vindas from './Boas_vindas'
import { useState } from 'react'

function Header() {
  const [usuario,setUsuario] = useState("") /* render condicional */
 const[mensagem,setMensagem] = useState(" parabéns voce e nosso usuario de numero 10 mil")
  function fazerLogin(){


    let nome = prompt('digite seu nome de usuario:')
setUsuario(nome)









  }
 
 
 
 
 return (
    <div className='conatiner_Header'>
        
        <h1>logo</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZM6icoflElztpNCZ9RDZJ_e9WOetdImMns0QdX8xDg3iLqmgZezRpyB0h9BKBQNhMv2g&usqp=CAU" alt=""  className='tenis_foda'/>
        <div className='container_link '>

       <h1>link 1</h1>
       <h1>link 2</h1>
       <h1>link 3</h1>
        
        
        </div>
       {/* { usuario && <Boas_vindas  nome = {usuario} Mensagem={mensagem}/>}  render condicional e como usar props */}
    
   { usuario ? <Boas_vindas  nome = {usuario} Mensagem={mensagem}/> : <button onClick={fazerLogin}>login</button>} 

        
        
        </div>
  )
}

export default Header