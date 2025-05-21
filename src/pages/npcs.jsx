import { useState } from 'react'
import List from '../components/List'

export default function Npcs() {
  const [npcs, setNpcs] = useState([])

  // temporary shit, just to be sure that is working, afterwards I'll be creating a service/entity e if using pagination, a context
  const fetchAll = async () => {
    const res = await fetch('https://souls-npcs.onrender.com/api/v1/npcs')
    const data = await res.json()
    setNpcs(data)
  }

  const fetchByName = async (name) => {
    const res = await fetch(`https://souls-npcs.onrender.com/api/v1/npcs/search?name=${name}`)
    const data = await res.json()
    setNpcs(data)
  }

  const fetchByGame = async (game) => {
    const res = await fetch(`https://souls-npcs.onrender.com/api/v1/npcs/search?game=${game}`)
    const data = await res.json()
    setNpcs(data)
  }

  const fetchById = async (id) => {
    const res = await fetch(`https://souls-npcs.onrender.com/api/v1/npcs/${id}`)
    const data = await res.json()
    setNpcs([data])
  }

  return (
    <>
      <div className="bg-base-200 min-h-screen">
        <div className='flex justify-center p-8 gap-4 flex-wrap'>
          <button className="btn" onClick={fetchAll}>All</button>

          <button className="btn" onClick={() => {
            const id = prompt("Enter NPC ID:")
            if (id) fetchById(id)
          }}>One</button>

          <button className="btn" onClick={() => {
            const name = prompt("Enter NPC Name:")
            if (name) fetchByName(name)
          }}>By Name</button>

          <button className="btn" onClick={() => {
            const game = prompt("Enter Game:")
            if (game) fetchByGame(game)
          }}>By Game</button>
        </div>

        <div className="flex justify-center flex-wrap">
          <List npcs={npcs} />
        </div>
      </div>
    </>
  )
}
