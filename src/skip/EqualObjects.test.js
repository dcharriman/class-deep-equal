import EqualObjects from '../EqualObjects'
import { expect } from 'chai'
import Bar from '../test/entity/Bar'
import Baz from '../test/entity/Baz'

describe('EqualObjects tests - DeepEqual', () => {
  const eq = new EqualObjects()
  const x = new Bar(42)
  const y = new Bar(42)
  const z = new Bar(42)

  it('returns false for empty typeMaps' , () => {
    expect(eq.knownEquals(x, y)).to.be.false
  })

  it('returns true for knownEquals both ways after add' , () => {
    eq.add(x, y)
    expect(eq.knownEquals(x, y)).to.be.true
    expect(eq.knownEquals(y, x)).to.be.true
  })

  it('returns false for unseen pair' , () => {
    expect(eq.knownEquals(x, z)).to.be.false
    expect(eq.knownEquals(z, x)).to.be.false
  })

  it('returns true for knownEquals both ways after add 2' , () => {
    eq.add(z, y)
    expect(eq.knownEquals(y, z)).to.be.true
    expect(eq.knownEquals(z, y)).to.be.true
  })

  it('returns false for unseen pair 2' , () => {
    expect(eq.knownEquals(x, z)).to.be.false
    expect(eq.knownEquals(z, x)).to.be.false
  })
})