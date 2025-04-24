import React, { useEffect, useState } from 'react'

const url = "http://localhost:3000/alunos"

const ListaAlunos = () => {
    const [alunos, setAlunos] = useState([])

    //  Trabalhando com requisição GET
    useEffect(() => {
        async function fetch() {

            const res = await fetch(url)

            const data = await res.json() 

            setAlunos(data)
        }
        fetchData()
    }, [])


  return (
    <div>
       
        <table>            
            <thead>
                <tr>
                    <th>Matricula</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Curso</th>
                </tr>
            </thead>
            
            <tbody>
                {alunos.map((aluno) => (
                    <tr key={aluno.id}>
                        <td>{aluno.id}</td>
                        <td>{aluno.nome}</td>
                        <td>{aluno.email}</td>
                        <td>{aluno.curso}</td>
                    </tr>
      ))}   
  </tbody>
</table>

    </div>
  )
}

export default ListaAlunos