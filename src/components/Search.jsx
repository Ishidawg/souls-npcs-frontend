import { useState } from 'react'

export default function Search({ type, onSubmit, onClose }) {
  const [value, setValue] = useState('')

  const labels = {
    one:  'Enter NPC ID',
    name: 'Enter NPC Name',
    game: 'Enter Game'
  }

  const gameOptions = [
    'Demon\'s Souls',
    'Dark Souls 1',
    'Dark Souls 2',
    'Dark Souls 3'
  ]

  return(
    <>
      <div className="modal-container">
        <div className="modal-form">
          <h1>{labels[type]}</h1>
          <div className="inputs">
            {type === 'game' ? (
              <select
                value={value}
                onChange={e => setValue(e.target.value)}
              >
                <option value="" disabled>Select an option</option>
                {gameOptions.map(game => (
                  <option key={game} value={game}>{game}</option>
                ))}
              </select>
            ) : type === 'one' ? (
              <input
                type="text"
                value={value}
                onChange={e => {
                  const newValue = e.target.value
                  // Regex to allow only decimal, dont want the user typing letters on IDs
                  if (/^\d*$/.test(newValue)) {
                    setValue(newValue)
                  } else {
                    alert('Only decimal values!')
                  }
                }}
                placeholder={labels[type]}
              />
            ) : (
              <input
                type="text"
                value={value}
                onChange={e => {
                  const newValue = e.target.value
                  // Regex to allow only char and spaces, dont want the user typing some random symbol or number on Names
                  if (/^[A-Za-z\s]+$/.test(newValue)) {
                    setValue(newValue)
                  } else {
                    alert('Type only letters... bruh')
                  }
                }}
                placeholder={labels[type]}
              />
            )} 
            <button onClick={() => {
              if (!value) return alert('Do not leave empty field!')
              onSubmit(value)
            }}>Buscar</button>
            <button onClick={onClose}>Cancelar</button>
          </div>
        </div>
      </div>
    </>
  )
}