import { NavLink } from "react-router";

export default function App() {
  return (
    <>
      <div className="home-container">
        <h1 className="title">Souls NPCs</h1>
        <article>
          <p>This is a fullstack for a university project focused on lean more about: <span className="italic">Kotlin,Spring Boot, Databases, HTTP Protocols, Hosting services, Docker, React and Web Development</span> in general.</p>
          <p>The project ideia come from my girlfriend, that loves dark souls franchise, so she says something like "What if we do a website that can list dark souls npcs?", about create your own was my idea tho.</p>
        </article>
        <NavLink to="/npcs">
          <button>Enter Nexus</button>
        </NavLink>
      </div>
    </>
  )
}