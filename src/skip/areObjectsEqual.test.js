import areObjectsEqual from '../areObjectsEqual'
import DeepCompare from '../DeepCompare'
import { expect } from 'chai'

describe('Object tests - DeepEqual', () => {
  it('handles a minimum pojo' , () => {
    const x = {}
    const y = {}

    const dec = new DeepCompare()
    const param = {x, y, compare: dec.compare}

    expect(areObjectsEqual(param)).to.be.true
  })

  it('handles a simple pojo' , () => {
    function item() {
      return { foo: 'I am groot', bar: 999 }
    }
    const x = item()
    const y = item()

    const dec = new DeepCompare()
    const param = {x, y, compare: dec.compare}

    expect(areObjectsEqual(param)).to.be.true
  })

  it('handles pojos of different sizes' , () => {
    const x = {a: 1}
    const y = {a:1, b:2}

    const dec = new DeepCompare()
    const param = {x, y, compare: dec.compare}

    expect(areObjectsEqual(param)).to.be.false
  })

  it('handles pojos w/ unmatched properties' , () => {
    const x = { foo: 'K', bar: 9 }
    const y = { foo: 'K', baz: 9 }

    const dec = new DeepCompare()
    const param = {x, y, compare: dec.compare}

    expect(areObjectsEqual(param)).to.be.false
  })

  it('handles pojos w/ unequal property values' , () => {
    const x = { foo: 'K', bar: 9 }
    const y = { foo: 'Z', bar: 9 }

    const dec = new DeepCompare()
    const param = {x, y, compare: dec.compare}

    expect(areObjectsEqual(param)).to.be.false
  })
})