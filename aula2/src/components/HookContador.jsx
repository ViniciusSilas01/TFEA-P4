import React from 'react'
import { useState } from 'react'

const HookContador = () => {

    const [contador, setContador] = useState(1) 

    function incrementaContador() {
        setContador(contador+1)
    }

    function decrementaContador() {
        setContador(contador-1)
    }


  return (
    <div>
        <h1>Contador com useState</h1>
        <button onClick={incrementaContador}>Incrementar contador</button>
        <p><button onClick={decrementaContador}>Decrementar contador</button></p>
        <h1>O contador está em: {contador}</h1>
    </div>
  )
}

export default HookContador