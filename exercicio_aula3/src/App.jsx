import React from 'react'
import NovoAluno from './components/NovoAluno'

const App = () => {
  return (
    <div>
      {
        [ 
          {nome: "Vinicius", email: "vinicius@gmail.com", curso: "Sistemas para Internet", media: "10"}, 
          {nome: "Silas", email: "silas@gmail.com", curso: "Sistemas de Informação", media: "8"},
          {nome: "Junior", email: "junior@gmail.com", curso: "Análise de Sistemas", media: "6.5"}
        ].map((novoaluno) =>
          <NovoAluno nome={novoaluno.nome} email={novoaluno.email} curso={novoaluno.curso} media={novoaluno.media} />
        )  
        }
    </div>
  )
}

export default App