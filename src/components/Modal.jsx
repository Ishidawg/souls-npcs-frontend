import { useEffect, useState } from "react";

export default function Modal({ npc, onSubmit, onClose }) {

  const [form, setForm] = useState({
    name: '',
    birthLand: '',
    occupation: '',
    game: '',
    lore: '',
    manyGames: false,
    games: []
  })

  useEffect(() => {
    if (npc) setForm(npc)
  }, [npc])

  function handleChange(e) {
    const { name, type, checked, value, selectedOptions } = e.target

    if (type === 'checkbox') {
      setForm(f => ({ ...f, [name]: checked }))
    }
    else if (e.target.multiple) {
      const values = Array.from(selectedOptions).map(opt => opt.value)
      setForm(f => ({ ...f, [name]: values }))
    }
    else {
      setForm(f => ({ ...f, [name]: value }))
    }
  }

  if (closed) return null;

  return(
    <>
      <div className="modal-container">
        <div className="modal-form">
          <h1>NPCs Creation</h1>
          <div className="inputs">
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Alexia..."/>
            <input type="text" name="birthLand" value={form.birthLand} onChange={handleChange} placeholder="Drangleic.."/>
            <input type="text" name="occupation" value={form.occupation} onChange={handleChange} placeholder="Warrior.."/>
            <label>First appear: </label>
            <select name="game" value={form.game} onChange={handleChange}>
              <option value="" disabled>Select an option</option>
              <option value="Dark Souls 1">Dark Souls 1</option>
              <option value="Dark Souls 2">Dark Souls 2</option>
              <option value="Dark Souls 3">Dark Souls 3</option>
            </select>
            <textarea name="lore" value={form.lore} onChange={handleChange} placeholder="Alexia came from the far lands of Lordran..." rows={4} cols={30} />
            <div>
              <label className="many-games">
                Many games?
                <input
                  type="checkbox"
                  name="manyGames"
                  checked={form.manyGames}
                  onChange={handleChange}
                  className="checkbox"
                />
              </label>
            </div>
            <label>Also Apears: </label>
            <select name="games" value={form.games} onChange={handleChange} multiple className="multiple">
              <option value="Dark Souls 1">Dark Souls 1</option>
              <option value="Dark Souls 2">Dark Souls 2</option>
              <option value="Dark Souls 3">Dark Souls 3</option>
            </select>
            <button onClick={() => onSubmit(form)}>{npc ? 'Save' : 'Create'}</button>
            <button onClick={onClose}>Cancelar</button>
          </div>
        </div>
      </div>
    </>
  )
}