import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DpoLgpd = () => {

  const [dpoLgpd, setDpoLgpd] = useState ([])

  useEffect(() => {
    axios.get("http://localhost:3000/dpoLgpd") //request
    .then(response => setDpoLgpd(response.data)) //response
    .catch(error => console.error("Erro ao carregar DpoLgpd", error))
  }, [])

  return (
    <div>
        <h1>DPO Lgpd</h1>
          {
            dpoLgpd.map((dpoLgpd) => (
              <div key={dpoLgpd.id}>
                <h3>{dpoLgpd.titulo}</h3>
                <h3>{dpoLgpd.texto}</h3>
              </div>
            ))
          }
    </div>
  )
}

export default DpoLgpd