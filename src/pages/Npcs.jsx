import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Header from "../components/Header";
import List from "../components/List";
import Modal from "../components/Modal";
import Search from "../components/Search";

import {
  fetchAllNpcs, fetchNpcById,
  searchNpcsByName, searchNpcsByGame,
  createNpc, updateNpc, deleteNpc
} from "../service/npcService"


export default function Npcs() {
  const [npcs, setNpcs] = useState([])
  const [searchType, setSearchType] = useState(null)  // starts null but can be: one, name or game
  const [editingNpc, setEditingNpc] = useState(null)
  const [isCreateOpen, setCreateOpen] = useState(false)

  useEffect(() => { loadAll() }, []) // Just to load all the data when the page loads

  async function loadAll() { 
    setSearchType(null);
    setEditingNpc(null);
    setCreateOpen(false)
    setNpcs(await fetchAllNpcs().catch(console.error))
  }

  async function loadById(id) { 
    setNpcs([await fetchNpcById(id).catch(console.error)])
  }

  async function loadByName(name) { 
    setNpcs(await searchNpcsByName(name).catch(console.error)) 
  }

  async function loadByGame(game) { 
    setNpcs(await searchNpcsByGame(game).catch(console.error)) 
  }

  async function handleCreate(data) {
    await createNpc(data).catch(console.error)
    await loadAll()
  }

  async function handleUpdate(data) {
    await updateNpc(data.id, data).catch(console.error)
    await loadAll()
  }

  async function handleDelete(id) {
    await deleteNpc(id).catch(console.error)
    await loadAll()
  }

  function handleSearchSubmit(value) {
    setSearchType(null)

    if (searchType === 'one') loadById(value)
    if (searchType === 'name') loadByName(value)
    if (searchType === 'game') loadByGame(value)
  }

  return(
    <>
      <div className="npcs-container">
        <Header />
        <p className="disclaimer">This project was created in less than one day, just because we had a lot of projects in university to deliver, and let's say that me and my group forgot that this was a thing and focused on another project that is a game... So it's kinda simple how this works, you can add NPCs that already exist, add your own Dark Souls character like an NPC, or completely nuke my database with silly characters, but this would be a bad thing to do, so please don't do this to me. Also, you can edit and delete. Hey, you can access the <a className="links" href="https://github.com/Ishidawg/souls-npcs-backend" target="_blank">backend</a> and <a className="links" href="https://github.com/Ishidawg/souls-npcs-frontend" target="_blank">frontend</a> repo!</p>
        <h1 className="create-text" onClick={ () => {setCreateOpen(true)} }>Create you NPC!</h1>
        <Filter
          onAll={loadAll}
          onOne={()    => setSearchType('one')}
          onByName={() => setSearchType('name')}
          onByGame={() => setSearchType('game')}
          onCreate={() => { setEditingNpc(null); setCreateOpen(true) }}
        />

        <List
          npcs={npcs}
          onEdit={npc => { setEditingNpc(npc); setCreateOpen(true) }}
          onDelete={handleDelete}
        />

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