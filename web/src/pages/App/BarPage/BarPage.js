import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

export default function() {
  return (
    <>
      <MetaTags title="Bar" description="Bar page" />

      <h1>BarPage</h1>
      <p>
        Find me in <code>./web/src/pages/BarPage/BarPage.js</code>
      </p>
      <p>
        My default route is named <code>bar</code>, link to me with `
        <Link to={routes.bar()}>Bar</Link>`
      </p>
    </>
  )
}
