import React from 'react'


/**
 * Componente de boton reutilizable
 * 
 * @function
 * @param {object} props - Las props para el componente.
 * @param {React.ReactNode} props.children Contenido interno del boton 
 * @returns {JSX.Element}
 */
export const Button = ({children}) => {
  return (
    <Button>{children}</Button>
  )
}
