import { Router, Route, Set } from '@redwoodjs/router'
import BrandLayout from './layouts/BrandLayout'
import BrandHomePage from 'src/pages/Brand/BrandHomePage'
import FooPage from 'src/pages/Brand/FooPage'
import HelloPage from 'src/pages/Brand/HelloPage'
import NotFoundPage from 'src/pages/App/NotFoundPage'

export const BrandRoutes = () => {
  return (
    <Router>
      <Set wrap={BrandLayout}>
        <Route path="/foo" page={FooPage} name="foo" />
        <Route path="/hello" page={HelloPage} name="hello" />
        <Route path="/" page={BrandHomePage} name="brandHome" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default BrandRoutes
