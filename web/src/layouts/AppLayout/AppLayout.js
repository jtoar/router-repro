import { NavLink, routes } from '@redwoodjs/router'

const AppLayout = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to={routes.home()}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to={routes.bar()}>
              bar
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default AppLayout
