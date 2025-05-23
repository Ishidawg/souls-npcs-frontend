const API_ROOT = 'https://souls-npcs.onrender.com/api/v1/npcs' // dont worry mr code reviewer, its a public API

export async function fetchAllNpcs() {
  const res = await fetch(API_ROOT)
  if (!res.ok) throw new Error(`Fetch all failed: ${res.status}`)
  return res.json()
}

export async function fetchNpcById(id) {
  const res = await fetch(`${API_ROOT}/${id}`)
  if (!res.ok) throw new Error(`Fetch by ID failed: ${res.status}`)
  return res.json()
}

export async function searchNpcsByName(name) {
  const res = await fetch(`${API_ROOT}/search?name=${encodeURIComponent(name)}`)
  if (!res.ok) throw new Error(`Search by name failed: ${res.status}`)
  return res.json()
}

export async function searchNpcsByGame(game) {
  const res = await fetch(`${API_ROOT}/search?game=${encodeURIComponent(game)}`)
  if (!res.ok) throw new Error(`Search by game failed: ${res.status}`)
  return res.json()
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
