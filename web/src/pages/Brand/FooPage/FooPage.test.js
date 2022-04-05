import { render } from '@redwoodjs/testing/web'

import FooPage from './FooPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FooPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FooPage />)
    }).not.toThrow()
  })
})
