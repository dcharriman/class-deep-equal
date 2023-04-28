import areSetsEqual from '../areSetsEqual'
import DeepCompare from '../DeepCompare'
import { expect } from 'chai'

describe('Set tests - DeepEqual', () => {
  function item() {
    const s = new Set()
    s.add('Mary')
    s.add('Bob')

    return s
  }
  
  it('handles a simple set' , () => {
    const x = item()
    const y = item()

    const dec = new DeepCompare()
    const param = {x, y, compare: dec.compare}

    expect(areSetsEqual(param)).to.be.true
  })

  it('handles mismatched sets' , () => {
    const x = item()
    const y = item()
    y.add('Zoe')

    const dec = new DeepCompare()
    const param = {x, y, compare: dec.compare}

    expect(areSetsEqual(param)).to.be.false
  })
})