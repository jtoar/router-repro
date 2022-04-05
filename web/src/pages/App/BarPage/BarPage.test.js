import { render } from '@redwoodjs/testing/web'

import BarPage from './BarPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BarPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BarPage />)
    }).not.toThrow()
  })
})
