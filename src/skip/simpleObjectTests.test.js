import classDeepEqual from '../classDeepEqual'
import { expect } from 'chai'

describe('simple object type tests - DeepEqual', () => {
  describe('Array', () => {
    it('handles matching arrays' , () => {
      const x = [ 'Mary', 'Bob' ]
      const y = [ 'Mary', 'Bob' ]

      expect(classDeepEqual(x, y)).to.be.true
    })

    it('handles mismatched arrays' , () => {
      const x = [ 'Mary', 'Bob' ]
      const y = [ 'Mary', 'Joe' ]

      expect(classDeepEqual(x, y)).to.be.false
    })
  })

  describe('Date', () => {
    function item() {
      const date = new Date()
      return date
    }

    it('handles matching dates' , () => {
    const x = item()
    const y = item()

    expect(classDeepEqual(x, y)).to.be.true
    })

    it('handles mismatched dates' , () => {
      const x = item()
      const y = new Date('July 1, 1999, 12:00:00')

      expect(classDeepEqual(x, y)).to.be.false
    })
  })

  describe('Map', () => {
    function item() {
      const map = new Map()
      map.set('Mary', 27)
      map.set('Bob', 'banana')
      return map
    }

    it('handles matching maps' , () => {

      expect(classDeepEqual(item(), item())).to.be.true
    })

    it('handles mismatched maps' , () => {
      const x = item()
      const y = item()
      y.set('Bob', 'apple')
      expect(classDeepEqual(x, y)).to.be.false
    })
  })

  describe('Object', () => {
    it('handles a minimum pojo' , () => {
      const x = {}
      const y = {}

      expect(classDeepEqual(x, y)).to.be.true
    })

    it('handles a simple pojo' , () => {
      function item() {
        return { foo: 'I am groot', bar: 999 }
      }

      expect(classDeepEqual(item(), item())).to.be.true
    })
  })

  describe('Set', () => {
    it('handles a simple set' , () => {
      function item() {
        const s = new Set()
        s.add('Mary')
        s.add('Bob')

        return s
      }

      expect(classDeepEqual(item(), item())).to.be.true
    })
  })

})