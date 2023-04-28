import ActiveCompares from '../ActiveCompares'
import { expect } from 'chai'
import Bar from '../test/entity/Bar'
import Baz from '../test/entity/Baz'

describe('ActiveCompares tests - DeepEqual', () => {
  const ac = new ActiveCompares()
  const x = new Bar(42)
  const y = new Bar(42)
  const z = new Bar(42)

  it('returns false for empty compareTable' , () => {
    expect(ac.beingCompared(x, y)).to.be.false
  })

  it('returns true for beingCompared both ways after push' , () => {
    ac.push(x, y)
    expect(ac.beingCompared(x, y)).to.be.true
    expect(ac.beingCompared(y, x)).to.be.true
  })

  it('returns false for unseen pair' , () => {
    expect(ac.beingCompared(x, z)).to.be.false
    expect(ac.beingCompared(z, x)).to.be.false
  })

  it('returns true for beingCompared both ways after push 2' , () => {
    ac.push(z, y)
    expect(ac.beingCompared(y, z)).to.be.true
    expect(ac.beingCompared(z, y)).to.be.true
  })

  it('returns false for unseen pair 2' , () => {
    expect(ac.beingCompared(x, z)).to.be.false
    expect(ac.beingCompared(z, x)).to.be.false
  })

  it('returns false for beingCompared both ways after pop' , () => {
    ac.pop()
    expect(ac.beingCompared(y, z)).to.be.false
    expect(ac.beingCompared(z, y)).to.be.false
  })

  it('returns true for beingCompared in stack' , () => {
    const a = {}
    const b = {}
    const c = []
    const d = []
    const e = new Baz('potato')
    const f = new Baz('tomato')
    ac.push(a, b)
    ac.push(c, d)
    ac.push(e, f)

    expect(ac.beingCompared(b, a)).to.be.true
    expect(ac.beingCompared(d, c)).to.be.true
  })

})