import React, { useContext } from 'react'
import SharedNotesContext from './SharedNotesContext'

export const Desk2 = () => {

  const {addNotes} = useContext(SharedNotesContext)

  return (
    <div className='desk'>
      <h2>Escritorio 2</h2>
      <button onClick={() => addNotes("Esta es una nota muy importante")}>Agregar Nota</button>
    </div>
  )
}
