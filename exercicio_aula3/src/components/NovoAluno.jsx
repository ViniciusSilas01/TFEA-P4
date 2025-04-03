import React from 'react'

const NovoAluno = ({ nome, email, curso, media }) => {
  const status = media >= 7 ? 'APROVADO(A)' : 'REPROVADO(A)';

  return (
    <>
      <p>Nome: {nome}</p>
      <p>Email: {email}</p>
      <p>Curso: {curso}</p>
      <p>Media: {media}</p>
      <p>Status: {status}</p>
      <p>------------------</p>
    </>
  )
}

export default NovoAluno
