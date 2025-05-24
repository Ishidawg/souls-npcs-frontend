import { fetchNpcImage } from './imageService'


const API_ROOT = 'https://souls-npcs.onrender.com/api/v1/npcs' // dont worry mr code reviewer, its a public API

export async function fetchAllNpcs() {
  const res = await fetch(API_ROOT)
  if (!res.ok) throw new Error(`Fetch all failed: ${res.status}`)
  return res.json()
}

export async function fetchAllNpcsWithImages() {
  const list = await fetchAllNpcs()
  return Promise.all(
    list.map(async npc => ({
      ...npc,
      imageUrl: await fetchNpcImage(npc.name, npc.game)
    }))
  )
}

export async function fetchNpcById(id) {
  const res = await fetch(`${API_ROOT}/${id}`)
  if (!res.ok) throw new Error(`Fetch by ID failed: ${res.status}`)
  return res.json()
}

export async function fetchNpcByIdWithImage(id) {
  const npc = await fetchNpcById(id)
  return {
    ...npc,
    imageUrl: await fetchNpcImage(npc.name, npc.game)
  }
}

export async function searchNpcsByName(name) {
  const res = await fetch(`${API_ROOT}/search?name=${encodeURIComponent(name)}`)
  if (!res.ok) throw new Error(`Search by name failed: ${res.status}`)
  return res.json()
}

export async function searchNpcsByNameWithImages(name) {
  const list = await searchNpcsByName(name)
  return Promise.all(
    list.map(async npc => ({
      ...npc,
      imageUrl: await fetchNpcImage(npc.name, npc.game)
    }))
  )
}

export async function searchNpcsByGame(game) {
  const res = await fetch(`${API_ROOT}/search?game=${encodeURIComponent(game)}`)
  if (!res.ok) throw new Error(`Search by game failed: ${res.status}`)
  return res.json()
}

// This function is a work around, because I'm not able to modify the API, the time to delivery it to my professor has already done
// So I will not use the route /search?game=, because in the frontend just dont make sense to search like this
export async function searchNpcsByPrimaryGame(game) {
  const all = await fetchAllNpcs()
  return all.filter(npc =>
    npc.game.toLowerCase() === game.toLowerCase()
  )
}

export async function searchNpcsByGameWithImages(game) {
  const list = await searchNpcsByPrimaryGame(game)
  return Promise.all(
    list.map(async npc => ({
      ...npc,
      imageUrl: await fetchNpcImage(npc.name, npc.game)
    }))
  )
}

export async function createNpc(npc) {
  const res = await fetch(API_ROOT, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(npc)
  })
  if (!res.ok) throw new Error(`Create failed: ${res.status}`)
  return res.json()
}

export async function updateNpc(id, npc) {
  const res = await fetch(`${API_ROOT}/${id}`, {
    method: 'PUT',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(npc)
  })
  if (!res.ok) throw new Error(`Update failed: ${res.status}`)
  return res.json()
}

export async function deleteNpc(id) {
  const res = await fetch(`${API_ROOT}/${id}`, {
    method: 'DELETE'
  })
  if (!res.ok) throw new Error(`Delete failed: ${res.status}`)
  return
}
