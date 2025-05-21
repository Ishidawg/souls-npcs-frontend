import { NavLink } from 'react-router'
import './App.css'

export default function App() {

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Souls NPCs</h1>
            <p className="py-6">This is a frontend application for a university project focused on lean more about: Kotlin, Spring Boot, Databases, HTTP Protocols, Hosting services, Docker, React and Web Development in general</p>
            <p className="pb-6">The project ideia come from my girlfriend, that loves dark souls franchise, so she says something like "What if we do a website that can list dark souls npcs?", about create your own was my idea tho.</p>
            <NavLink to="/npcs">
              <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Enter Nexus</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}