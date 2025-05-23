import { useState } from "react";

export default function Modal({ onClose }) {

  if (closed) return null;

  return(
    <>
      <div className="modal-container">
        <div className="modal-form">
          <h1>NPCs Creation</h1>
          <div className="inputs">
              <input type="text" placeholder="Alexia..."/>
              <input type="text" placeholder="Drangleic.."/>
              <input type="text" placeholder="Warrior.."/>
              <label>First appear: </label>
              <select value={"game"}>
                <option value="" disabled>Select an option</option>
                <option value="Dark Souls 1">Dark Souls 1</option>
                <option value="Dark Souls 2">Dark Souls 2</option>
                <option value="Dark Souls 3">Dark Souls 3</option>
              </select>
              <textarea placeholder="Alexia came from the far lands of Lordran..." rows={4} cols={30} />
              <div>
                <label>Many games? </label>
                <input type="checkbox" className="checkbox" value={"true"} />
              </div>
              <label>Also Apears: </label>
              <select value={"games"} multiple className="multiple">
                <option value="" disabled>Select an option</option>
                <option value="Dark Souls 1">Dark Souls 1</option>
                <option value="Dark Souls 2">Dark Souls 2</option>
                <option value="Dark Souls 3">Dark Souls 3</option>
              </select>
            <button onClick={ () => { console.log("sendData") }}>Criar!</button>
            <button onClick={onClose}>Cancelar</button>
          </div>
        </div>
      </div>
    </>
  )
}