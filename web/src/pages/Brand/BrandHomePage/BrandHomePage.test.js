import { render } from '@redwoodjs/testing/web'

import BrandHomePage from './BrandHomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BrandHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BrandHomePage />)
    }).not.toThrow()
  })
})
