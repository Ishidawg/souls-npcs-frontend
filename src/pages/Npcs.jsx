import { useState } from "react";
import Filter from "../components/Filter";
import Header from "../components/Header";
import List from "../components/List";
import Modal from "../components/Modal";

export default function Npcs() {

  const [isDialogOpen, setDialogOpen] = useState(false);


  return(
    <>
      <div className="npcs-container">
        <Header />
        <p className="disclaimer">This project was created in less than one day, just because we had a lot of projects in university to deliver, and let's say that me and my group forgot that this was a thing and focused on another project that is a game... So it's kinda simple how this works, you can add NPCs that already exist, add your own Dark Souls character like an NPC, or completely nuke my database with silly characters, but this would be a bad thing to do, so please don't do this to me. Also, you can edit and delete. Hey, you can access the <a className="links" href="https://github.com/Ishidawg/souls-npcs-backend" target="_blank">backend</a> and <a className="links" href="https://github.com/Ishidawg/souls-npcs-frontend" target="_blank">frontend</a> repo!</p>
        <h1 className="create-text" onClick={ () => {setDialogOpen(true)} }>Create you NPC!</h1>
        <Filter />
        <List />
        {isDialogOpen && <Modal onClose={() => setDialogOpen(false)} />}
      </div>
    </>
  )
}