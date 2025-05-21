export default function List({ npcs }) {
  return(
    <>
      <ul className="list bg-base-100 rounded-box shadow-md">
  
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">All NPCs</li>
          
          {npcs.map(npc => (
            <li className="list-row">
              <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
              <div>
                <div>{npc.name}</div>
                <div className="flex gap-4">
                  <div className="text-xs uppercase font-semibold opacity-60">{npc.birthLand}</div>
                  <div className="text-xs uppercase font-semibold opacity-60">{npc.occupation}</div>
                  <div className="text-xs uppercase font-semibold opacity-60">{npc.game}</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-xs lowercase font-semibold opacity-60">Also in: </div>
                  <div className="text-xs lowercase font-light opacity-60">{npc.games.join(", ")}</div>
                </div>
                {/* <div className="flex gap-4">
                  <div className="text-xs lowercase font-light opacity-60">Many games</div>
                  <div className="text-xs lowercase font-light opacity-60">Game</div>
                  <div className="text-xs lowercase font-light opacity-60">Game</div>
                </div> */}
              </div>
              <p className="list-col-wrap text-xs">
                {npc.lore}
              </p>
              <button className="btn btn-accen">
                Edit
              </button>
              <button className="btn btn-error">
                Delete
              </button>
            </li>
          ))}

        </ul>
    </>
  );
}