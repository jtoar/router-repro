import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

export default function BrandHomePage() {
  return (
    <>
      <MetaTags title="BrandHome" description="BrandHome page" />

      <h1>BrandHomePage</h1>
      <p>
        Find me in <code>./web/src/pages/BrandHomePage/BrandHomePage.js</code>
      </p>
      <p>
        My default route is named <code>brandHome</code>, link to me with `
        <Link to={routes.brandHome()}>BrandHome</Link>`
      </p>
    </>
  )
}

