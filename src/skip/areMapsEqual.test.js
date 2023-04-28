import areMapsEqual from '../areMapsEqual'
import DeepCompare from '../DeepCompare'
import { expect } from 'chai'

describe('Map tests - DeepEqual', () => {
  function item() {
    const map = new Map()
    map.set('Mary', 27)
    map.set('Bob', 'banana')
    return map
  }

  it('handles matching maps' , () => {
    const x = item()
    const y = item()

    const dec = new DeepCompare()
    const param = {x, y, compare: dec.compare}

    expect(areMapsEqual(param)).to.be.true
  })

  it('handles maps of different sizes' , () => {
    const x = item()
    const y = item()
    y.set('Zoe', {})

    const dec = new DeepCompare()
    const param = {x, y, compare: dec.compare}

    expect(areMapsEqual(param)).to.be.false
  })

  it('handles maps w/ mismatched keys' , () => {
    const x = item()
    const y = new Map()
    y.set('Mary', 27)
    y.set('Zoe', {})

    const dec = new DeepCompare()
    const param = {x, y, compare: dec.compare}

    expect(areMapsEqual(param)).to.be.false
  })

  it('handles maps w/ mismatched values' , () => {
    const x = item()
    const y = item()

    y.set('Bob', 'apple')

    const dec = new DeepCompare()
    const param = {x, y, compare: dec.compare}

    expect(areMapsEqual(param)).to.be.false
  })
})