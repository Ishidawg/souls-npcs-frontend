import { useState } from 'react'

export default function Search({ type, onSubmit, onClose }) {
  const [value, setValue] = useState('')

  const labels = {
    one:  'Enter NPC ID',
    name: 'Enter NPC Name',
    game: 'Enter Game'
  } 

  return(
    <>
      <div className="modal-container">
        <div className="modal-form">
          <h1>{labels[type]}</h1>
          <div className="inputs">
              <input
                type="text" 
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={labels[type]}   
              />
              <button onClick={() => onSubmit(value)}>Buscar</button>
              <button onClick={onClose}>Cancelar</button>
          </div>
        </div>
      </div>
    </>
  )
}