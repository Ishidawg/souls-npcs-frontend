import { NavLink } from "react-router"

export default function Header() {
  return(
    <>
      <div className="header-container">
        <ul>
          <NavLink to={"/npcs"} style={{
            textDecoration: "none",
            color: "hsl(33, 100%, 93%)",
          }}>
            <li>NPCs</li>
          </NavLink>
          <li onClick={ () => {alert("Work in progress")}}>TECH</li>
        </ul>
      </div>
    </>
  )
}