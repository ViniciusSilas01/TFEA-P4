import React from 'react'

const RenderizaBackOuFront = () => {

    function escolhaDeRenderizacao(oQueRenderizar) {
        if (oQueRenderizar === "Java") {
            return <h1>Back-End dentro de h1</h1>
        } else if (oQueRenderizar === "React") {
            return <b>React dentro de b</b> 
        } else if (oQueRenderizar === "Aws") {
            return <i>Aws em itálico</i> 
        }
    }

  return (
    <div>
        {escolhaDeRenderizacao("Java")}
        <p>{escolhaDeRenderizacao("React")}</p>
        <p>{escolhaDeRenderizacao("Aws")}</p>
    </div>
  )
}

export default RenderizaBackOuFront