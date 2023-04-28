import classDeepEqual from '../classDeepEqual'
import { expect } from 'chai'

import Bar from '../test/entity/Bar'
import Baz from '../test/entity/Baz'


describe('multiple instances test - DeepEqual', () => {
  it('handles object with multiple instances' , () => {
    function item() {
      const bar = new Bar('I am Groot!')
      const baz = new Baz(999)
      return { one: { x: bar, y: baz }, two: { a: bar, b: baz } }
    }
    const x = item()
    const y = item()

    expect(classDeepEqual(x, y)).to.be.true
  })

  it('handles two ref to one object' , () => {
    function item() {
      const obj = { x: 17 }
      return { one: obj, two: obj }
    }
    const x = item()
    const y = item()

    expect(classDeepEqual(x, y)).to.be.true
  })
  
  it('handles object multiple refs 2' , () => {
    function item() {
      const bar = new Bar('a Bar')
      const baz = new Baz('a Baz')
      const foo = { x: bar, y: baz }
      return { one: foo, two: foo }
    }
    const x = item()
    const y = item()

    expect(classDeepEqual(x, y)).to.be.true
  })
})