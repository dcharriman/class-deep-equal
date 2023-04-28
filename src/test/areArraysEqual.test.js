import areArraysEqual from '../areArraysEqual'
import DeepCompare from '../DeepCompare.js'
import { expect } from 'chai'

describe('Array tests - DeepEqual', () => {
  it('handles empty arrays' , () => {
    const x = []
    const y = []

    const dec = new DeepCompare()
    const param = {x, y, compare: dec.compare}

    expect(areArraysEqual(param)).to.be.true
  })

  it('handles matching arrays' , () => {
    const x = [ 'Mary', 'Bob' ]
    const y = [ 'Mary', 'Bob' ]

    const dec = new DeepCompare()
    const param = {x, y, compare: dec.compare}

    expect(areArraysEqual(param)).to.be.true
  })

  it('handles arrays of different sizes' , () => {
    const x = [ 'Mary', 'Bob' ]
    const y = [ 'Mary', 'Bob', 'Joe' ]

    const dec = new DeepCompare()
    const param = {x, y, compare: dec.compare}

    expect(areArraysEqual(param)).to.be.false
  })

  it('handles mismatched arrays' , () => {
    const x = [ 'Mary', 'Bob' ]
    const y = [ 'Mary', 'Joe' ]

    const dec = new DeepCompare()
    const param = {x, y, compare: dec.compare}

    expect(areArraysEqual(param)).to.be.false
  })
})