import typeComparer from '../typeComparer'
import { expect } from 'chai'

import areArraysEqual from '../areArraysEqual'
import areObjectsEqual from '../areObjectsEqual'
import areMapsEqual from '../areMapsEqual'
import areSetsEqual from '../areSetsEqual'
import areDatesEqual from '../areDatesEqual'

import Baz from '../test/entity/Baz'


describe('typeComparer tests - DeepEqual', () => {
  it('handles minimum pojo' , () => {
    expect(typeComparer({})).to.equal(areObjectsEqual)
  })

  it('handles a simple pojo' , () => {
    const x = { foo: 'I am groot', bar: 999 }

    expect(typeComparer(x)).to.equal(areObjectsEqual)
  })

  it('handles a class' , () => {
    expect(typeComparer(new Baz(10))).to.equal(areObjectsEqual)
  })

  it('handles array' , () => {
    expect(typeComparer([])).to.equal(areArraysEqual)
  })

  it('handles map' , () => {
    expect(typeComparer(new Map())).to.equal(areMapsEqual)
  })

  it('handles set' , () => {
    expect(typeComparer(new Set())).to.equal(areSetsEqual)
  })

  it('handles date' , () => {
    expect(typeComparer(new Date())).to.equal(areDatesEqual)
  })
})