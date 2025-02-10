
import './Boas_vindas.css'
import { useState } from 'react'
// function Boas_vindas(props)
function Boas_vindas({nome,Mensagem}) {
  
  const [usuario,setUsuario] = useState('')
  
  
    return (
    <div className='container_Boas_vindas'>
        
        ola,😁{nome} {/* render condicional e como usar props */}
        {Mensagem} {/* render condicional e como usar props */}
        
        {/* <button onClick={()=>{console.log(props)}}>log</button> */}
        
        
        </div>
  )
}

export default Boas_vindas