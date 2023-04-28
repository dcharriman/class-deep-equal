import classDeepEqual from '../classDeepEqual'
import { expect } from 'chai'

import FooBarBaz from '../test/entity/FooBarBaz'

describe('nested instances test - DeepEqual', () => {
  it('handles object with nested instances' , () => {
    function item() {
      return new FooBarBaz("Apple", 7)
    }

    const x = item()
    const y = item()

    expect(classDeepEqual(x, y)).to.be.true
  })
})