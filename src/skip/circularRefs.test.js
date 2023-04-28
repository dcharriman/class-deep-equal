import classDeepEqual from '../classDeepEqual'
import { expect } from 'chai'

describe('circular refs test - DeepEqual', () => {
  it('handles circular refs' , () => {
    const Mary = { name: "Mary" }
    const Bob = { name: "Bob"}

    Mary.friend = Bob
    Bob.friend = Mary

    const x = { Mary, Bob }
    const y = { Mary, Bob }

    expect(classDeepEqual(x, y)).to.be.true
  })

})