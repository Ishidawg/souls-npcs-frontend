import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Header from "../components/Header";
import List from "../components/List";
import Modal from "../components/Modal";
import Search from "../components/Search";

import {
  fetchAllNpcsWithImages as fetchAllNpcs,
  fetchNpcByIdWithImage as fetchNpcById,
  searchNpcsByNameWithImages as searchNpcsByName,
  searchNpcsByGameWithImages as searchNpcsByGame,
  // searchNpcsByGame, - remove just for now
  createNpc,
  updateNpc,
  deleteNpc
} from "../service/npcService"


export default function Npcs() {
  const [npcs, setNpcs] = useState([])
  const [searchType, setSearchType] = useState(null)  // starts null but can be: one, name or game
  const [editingNpc, setEditingNpc] = useState(null)
  const [isCreateOpen, setCreateOpen] = useState(false)
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false);

  function clearMessage() {
    setMessage(null)
  }

  useEffect(() => { loadAll() }, []) // Just to load all the data when the page loads

  async function loadAll() {
    clearMessage()
    setLoading(true)
    setSearchType(null)
    setEditingNpc(null)
    setCreateOpen(false)

    try {
      const data = await fetchAllNpcs()
      setNpcs(data)
    } catch {
      setMessage("There is no such thing....")
    } finally {
      setLoading(false)
    }
  }

  async function loadById(id) { 
    // setNpcs([await fetchNpcById(id).catch(console.error)]) - removing to test error treatment
    clearMessage()
    setLoading(true)

    try {
      const npc = await fetchNpcById(id)
      setNpcs([npc])
    } catch {
      setNpcs([])
      setMessage("Never seen this fellow around, are you going hollow?...")
    } finally {
      setLoading(false)
    }
  }

  async function loadByName(name) { 
    // setNpcs(await searchNpcsByName(name).catch(console.error)) - removing to test error treatment
    clearMessage()
    setLoading(true)

    try {
      const data = await searchNpcsByName(name).catch(err => {
        console.error(err)
        return []
      })

      setNpcs(data)

      if (data.length === 0) {
        setMessage(`“${name}” is just a myth, he never walked here before...`)
      }
    } catch {
      setMessage("There is no such thing...")
    } finally {
      setLoading(false)
    }
  }

  async function loadByGame(game) { 
    // setNpcs(await searchNpcsByGame(game).catch(console.error)) - removing it for now (old ass)
    // setNpcs(await fetchNpcsByPrimaryGame(game).catch(console.error)) - workaround to make by game sort make sense, but removing as well
    clearMessage()
    setLoading(true)

    try {

      const data = await searchNpcsByGame(game).catch(err => {
        console.error(err)
        return []
      })

      setNpcs(data)
  
      if (data.length === 0) {
        setMessage(`Maybe she/he is not from “${game}”.`)
      }
    } catch {

      setMessage("There is no such thing...")
    } finally {
      setLoading(false)
    }
  }

  async function handleCreate(data) {
    clearMessage()
    setLoading(true)
    try {
      await createNpc(data)
      await loadAll()
    } finally {
      setLoading(false)
    }
  }

  async function handleUpdate(data) {
    clearMessage()
    setLoading(true)
    try {
      await updateNpc(data.id, data)
      await loadAll()
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(id) {
    clearMessage()
    setLoading(true)
    try {
      await deleteNpc(id)
      await loadAll()
    } finally {
      setLoading(false)
    }
  }

  function handleSearchSubmit(value) {
    setSearchType(null)

    switch (searchType) {
      case 'one':
        loadById(value)
        break
      case 'name':
        loadByName(value)
        break
      case 'game':
        loadByGame(value)
        break
      default:
        alert('What you trying to do? Insolent!')
    }
  }

  return(
    <>
      <div className="npcs-container">
        <Header />
        <p className="disclaimer">This project was created in less than one day, just because we had a lot of projects in university to deliver, and let's say that me and my group forgot that this was a thing and focused on another project that is a game... So it's kinda simple how this works, you can add NPCs that already exist, add your own Dark Souls character like an NPC, or completely nuke my database with silly characters, but this would be a bad thing to do, so please don't do this to me. Also, you can edit and delete. Hey, you can access the <a className="links" href="https://github.com/Ishidawg/souls-npcs-backend" target="_blank">backend</a> and <a className="links" href="https://github.com/Ishidawg/souls-npcs-frontend" target="_blank">frontend</a> repo!</p>
        <h1 className="create-text" onClick={ () => {setCreateOpen(true)} }>Create your NPC</h1>
        <Filter
          onAll={loadAll}
          onOne={() => setSearchType('one')}
          onByName={() => setSearchType('name')}
          onByGame={() => setSearchType('game')}
          onCreate={() => {
            setEditingNpc(null)
            setCreateOpen(true)
          }}
        />

        <List
          npcs={npcs}
          loading={loading} 
          onEdit={npc => { 
            setEditingNpc(npc)
            setCreateOpen(true)
          }}
          onDelete={handleDelete}
        />

        {message && (
          <div className="message-banner">
            {message}
          </div>
        )}

        {isCreateOpen && (
          <Modal
            npc={editingNpc}
            onSubmit={editingNpc ? handleUpdate : handleCreate}
            onClose={() => setCreateOpen(false)}
          />
        )}

        {searchType && (
          <Search
            type={searchType}
            onSubmit={handleSearchSubmit}
            onClose={() => setSearchType(null)}
          />
        )}
        
      </div>
    </>
  )
}