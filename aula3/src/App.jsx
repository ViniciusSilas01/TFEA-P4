import React from 'react'
import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>
      {
        [ {nome: "Joao", email: "joao@gmail.com", curso: "Sistemas para Internet"},
          {nome: "Maria", email: "maria@gmail.com", curso: "Sistemas para Internet"},
          {nome: "Jose", email: "jose@gmail.com", curso: "Sistemas para Internet"}
        ].map((aluno) => 
          <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} />
        ) 
      }
    </div>
  )
}

export default App

