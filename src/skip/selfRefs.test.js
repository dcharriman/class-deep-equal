import classDeepEqual from '../classDeepEqual'
import { expect } from 'chai'

describe('self refs test - DeepEqual', () => {
  it('handles self refs' , () => {
    const x = buildIt()
    const y = buildIt()

    expect(classDeepEqual(x, y)).to.be.true
  })

  function buildIt() {
    const foo = { r: 5, s: 'text' }
    const ugh = [7, 22]
    const x = {}
    const baz = { c: x, ugh, foo }
    const bar = { b: x, ugh, baz }
    x.a = x
    x.bar = bar
    return x
  }

/*
    // console.log("x = { a: x, bar: { b: x, ugh: [7, 22], baz: { c: x, ugh: [7, 22], foo: { r: 5, s: 'text' } } }}")
    // console.log('x: ', x)
    // console.log('bar: ', bar)
    // console.log('baz: ', baz)
    // console.log('foo: ', foo)

console.log() output:
  x = { a: x, bar: { b: x, ugh: [7, 22], baz: { c: x, ugh: [7, 22], foo: { r: 5, s: 'text' } } }}
  x:  <ref *1> {
    a: [Circular *1],
    bar: {
      b: [Circular *1],
      ugh: [ 7, 22 ],
      baz: { c: [Circular *1], ugh: [Array], foo: [Object] }
    }
  }
  bar:  <ref *2> {
    b: <ref *1> { a: [Circular *1], bar: [Circular *2] },
    ugh: [ 7, 22 ],
    baz: {
      c: <ref *1> { a: [Circular *1], bar: [Circular *2] },
      ugh: [ 7, 22 ],
      foo: { r: 5, s: 'text' }
    }
  }
  baz:  <ref *2> {
    c: <ref *1> {
      a: [Circular *1],
      bar: { b: [Circular *1], ugh: [Array], baz: [Circular *2] }
    },
    ugh: [ 7, 22 ],
    foo: { r: 5, s: 'text' }
  }
  foo:  { r: 5, s: 'text' }
in debugger:
  x = { a: x, bar: { b: x, ugh: [7, 22], baz: { c: x, ugh: [7, 22], foo: { r: 5, s: 'text' } } }}
  x:  {a: {…}, bar: {…}}
  bar:  {b: {…}, ugh: Array(2), baz: {…}}
  baz:  {c: {…}, ugh: Array(2), foo: {…}}
  foo:  {r: 5, s: 'text'}  
*/
  
})