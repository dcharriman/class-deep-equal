import areDatesEqual from '../areDatesEqual'
import { expect } from 'chai'

describe('Date tests - DeepEqual', () => {
  function item() {
    const date = new Date()
    return date
  }

  it('handles matching dates' , () => {
    const x = item()
    const y = item()

    expect(areDatesEqual({x, y})).to.be.true
  })

  it('handles mismatched dates' , () => {
    const x = item()
    const y = new Date('July 1, 1999, 12:00:00')

    expect(areDatesEqual({x, y})).to.be.false
  })
})