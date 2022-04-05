import { render } from '@redwoodjs/testing/web'

import HelloPage from './HelloPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HelloPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HelloPage />)
    }).not.toThrow()
  })
})
