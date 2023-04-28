import classDeepEqual from '../classDeepEqual'
import { expect } from 'chai'

describe('multiType tests - DeepEqual', () => {
  const symbolKey = Symbol('symbolKey');
  const x = {
    num: 0,
    str: '',
    boolean: true,
    unf: void 0,
    nul: null,
    obj: { name: 'object', id: 1 },
    arr: [0, 1, 2],
    date: new Date(0),
    [symbolKey]: 'symbol',
  };

  const y = {
    num: 0,
    str: '',
    boolean: true,
    unf: void 0,
    nul: null,
    obj: { name: 'object', id: 1 },
    arr: [0, 1, 2],
    date: new Date(0),
    [symbolKey]: 'symbol',
  };
  // Object.defineProperty(originValue, 'innumerable', {
  //   // writable is true to ensure that the assignment operator can be used
  //   writable: true,
  //   enumerable: false,
  //   value: 'innumerable',
  // });

  it('handles obj with multi type properties' , () => {
    expect(classDeepEqual(x, y)).to.be.true
  })

})


/*
Source:
How to Get a Perfect Deep Copy in JavaScript?
Zachary Lee
https://levelup.gitconnected.com/use-pure-javascript-to-get-a-perfect-deep-copy-5fdc2d9e3d42

*/
