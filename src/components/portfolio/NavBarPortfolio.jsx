import React from 'react'
import styled from 'styled-components'

const NavBarNav = styled.nav`
grid-area: navbar;

`

const NavBarPortfolio = () => {
  return (
    <NavBarNav >
      <ul>
        <li>Portafolio</li>
        <li>Servicios</li>
        <li>Conocimientos</li>
        <li>Tecnologías</li>
        <li>Proyectos</li>
        <li>Contacto</li>
      </ul>
    </NavBarNav >
  )
}

export default NavBarPortfolio
