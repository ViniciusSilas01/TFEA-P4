import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
    return (
        <div>

        <h1>Exercício 1 da aula 1</h1>

        <h3>
         <Adicao num1={1} num2={1} />     
         <Subtracao num1={6} num2={6} />  
         <Multiplicacao num1={1} num2={2} />    
         <Divisao num1={10} num2={2} />
        </h3>
         
        <h1>Exercício 2 da aula 1</h1>

        <h6>
         <PrecisoEstudar nomeDaTecnologia={"JavaScript"}></PrecisoEstudar>
        </h6>

        </div>
        
    )

}

export default App