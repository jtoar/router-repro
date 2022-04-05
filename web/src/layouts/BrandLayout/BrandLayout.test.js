import { render } from '@redwoodjs/testing/web'

import BrandLayout from './BrandLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BrandLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BrandLayout />)
    }).not.toThrow()
  })
})
