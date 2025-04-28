import React from 'react'
import styles from './Campanha.module.css'

const Campanha = (props) => {

    function definirMensagem(mes) {
        if (mes === "janeiro") {
            return "Prevenção e tratamento a hanseníase"
        } else if (mes === "fevereiro") {
            return "Sensibilização sobre a leucemia"
        } else if (mes === "março") { 
            return "Prevenção ao câncer colorretal"
        }
    }

    function definirCor(mes) {
        if (mes === "janeiro") {
            return styles.janeiro
        } else if (mes === "fevereiro") {
            return styles.fevereiro
        } else if (mes === "março") {
            return styles.março
        }
    }

  return (
    <div
        className={definirCor(props.mes)}>
        {definirMensagem(props.mes)}    
    </div>
  )
}

export default Campanha