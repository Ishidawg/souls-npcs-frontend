export default function List({ npcs, loading, onEdit, onDelete }) {

  if (loading) {
    return (
      <>
        <div class="loader"></div>
        <p className="warning-message">Our API is hosted on Render Doc within a free plan, this means that the hardware that handles our API is off when there is no request. So if you are seeing this message, server is booting up, wait a moment, please!</p>
      </>
    )
  }

  return(
    <>
      <div className="list-container">
        <ul className="list">
          {npcs.map(npc => (
            <li className="item-list">
              <img src="src/assets/profile-picture.jpg"/>
              <div className="item-header">
                  <article>
                    <div className="name-location">
                      <h1>{npc.name}</h1>
                      <h2>from</h2>
                      <h2>{npc.birthLand}</h2>
                    </div>
                    <div className="occupation-games">
                      <h1>{npc.occupation}</h1>
                      <span>&#9679;</span>
                      <h2>{npc.game}</h2>
                    </div>
                  </article>
                  <div>
                    <button onClick={() => onEdit(npc)}>EDIT</button>
                    <button onClick={() => onDelete(npc.id)}>DELETE</button>
                  </div>
              </div>
              <div className="lore">
                <p>
                  {npc.lore}
                </p>
              </div>
              <div className="minor-info">
                <span># {npc.id}</span>
                {npc.manyGames && (
                  <>
                    <span>Also on: {npc.games.join(', ')}</span>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}