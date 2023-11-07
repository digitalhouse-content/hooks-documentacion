import React from 'react'


/**
 * @function
 * @param {object} props - Las props del componente
 * @param {string} props.title El titulo del encabezado
 * @param {string} [props.subtitle] - El subtitulo opcional del encabezado 
 * @returns {JSX.Element} El componente de encabezado
 */
export const Header = ({title, subtitle}) => {
  return (
    <header>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </header>
  )
}
