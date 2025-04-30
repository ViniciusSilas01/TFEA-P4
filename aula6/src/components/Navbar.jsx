import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Inicial</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/noticias">Noticias</Link>
        <Link to="/dpo-lgpd">DpoLgpd</Link> 
        <Link to="/a-faculdade">Faculdade</Link>
    </nav>
  )
}

export default Navbar