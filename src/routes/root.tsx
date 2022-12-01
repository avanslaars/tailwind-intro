import { NavLink, Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
      <header>
        <h1>Tailwind Intro</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">about</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Generic Footer - &copy; 2022</footer>
    </div>
  )
}

export default Root
