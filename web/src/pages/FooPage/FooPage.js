import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FooPage = () => {
  return (
    <>
      <MetaTags title="Foo" description="Foo page" />

      <h1>FooPage</h1>
      <p>
        Find me in <code>./web/src/pages/FooPage/FooPage.js</code>
      </p>
      <p>
        My default route is named <code>foo</code>, link to me with `
        <Link to={routes.foo()}>Foo</Link>`
      </p>
    </>
  )
}

export default FooPage
