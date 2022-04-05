import { NavLink, routes } from '@redwoodjs/router'

const BrandLayout = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to={routes.brandHome()}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to={routes.foo()}>
              foo
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to={routes.hello()}>
              hello
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default BrandLayout
