export default function Filter({ onAll, onOne, onByName, onByGame }) {

  return (
    <>
      <div className="filter-container">
        <ul>
          <li>
            <button className="btn" onClick={onAll}>All</button>
          </li>
          <li>
            <button className="btn" onClick={onOne}>One</button>
          </li>
          <li>
            <button className="btn" onClick={onByName}>By Name</button>
          </li>
          <li>
            <button className="btn" onClick={onByGame}>By Game</button>
          </li>
        </ul>
      </div>
    </>
  )
}