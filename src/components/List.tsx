export default function List() {
  return(
    <>
      <div className="list-container">
        <ul className="list">
          <li className="item-list">
            <img src="src/assets/profile-picture.jpg"/>
            <div className="item-header">
                <article>
                  <div className="name-location">
                    <h1>Npc Name</h1>
                    <h2>from</h2>
                    <h2>Location</h2>
                  </div>
                  <div className="occupation-games">
                    <h1>Occupation</h1>
                    <span>&#9679;</span>
                    <h2>Game</h2>
                    {/* <span>&#9679;</span>
                    <h2>Also on: Game, Game</h2> */}
                  </div>
                </article>
                <div>
                  <button>EDIT</button>
                  <button>DELETE</button>
                </div>
            </div>
            <div className="lore">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis iste id autem. Reiciendis praesentium quibusdam vero aspernatur veritatis cupiditate provident rem nostrum non, quasi corrupti mollitia hic expedita ipsam aliquam.
              </p>
            </div>
            <div className="minor-info">
              <span># 1</span>
              <span className="symbol">&#9679;</span>
              <span>Also on: Game, Game</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}