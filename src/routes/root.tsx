import { NavLink as BaseNavLink, Outlet } from 'react-router-dom'

type NavLinkProps = React.PropsWithChildren<{ to: string }>
const NavLink = ({ children, to }: NavLinkProps) => {
  return (
    <BaseNavLink
      className={({ isActive }) =>
        `font-semibold text-teal-900 bg-teal-50 px-2 py-1 rounded-md hover:bg-teal-700 hover:text-teal-50 ${
          isActive ? `text-teal-50 bg-teal-700 underline` : null
        }`
      }
      to={to}
    >
      {children}
    </BaseNavLink>
  )
}

function Root() {
  return (
    <div className="bg-gray-800 text-gray-50 h-screen max-w-3xl mx-auto flex flex-col xl:max-w-7xl">
      <header className="py-2 bg-gray-700 border-b-2 border-teal-400">
        <h1 className="px-2 text-4xl font-black text-gross-50 ">
          Tailwind Intro
        </h1>
        <nav className="px-2 py-1 space-x-2 hidden md:block">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <nav className="px-2 py-1 space-x-2 block md:hidden">hamburger</nav>
      </header>
      <main className="flex-1 px-2 py-3">
        <Outlet />
      </main>
      <footer className="px-2 pt-3 pb-2 border-t-2 border-teal-500">
        Generic Footer - &copy; 2022
      </footer>
    </div>
  )
}

export default Root
