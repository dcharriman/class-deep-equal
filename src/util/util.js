const typeofObject = 'object'

const getConstructor = item => item.constructor
const getTypeName = item => item.constructor.name

//  "for legacy reasons", typeof(null) is 'object'
const isObject = item => (typeof(item) === typeofObject) && (item !== null)
const isPrimitive = item => !isObject(item)


const areSameValue = (x, y) => x === y
// const areSameValue = (x, y) => Object.is(x, y)
/*
Object.is() and === differ in their treatment of signed zeroes and NaNs. 
For example, === (and ==) treats -0 and +0 as equal, Object.is() as not equal.
=== operator treats Number.NaN and NaN as not equal, Object.is() as equal.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
*/

const areSameObjectType = (x, y) => getTypeName(x) === getTypeName(y)

export { 
  getConstructor, 
  getTypeName, 
  isObject,
  isPrimitive,
  areSameValue,
  areSameObjectType,
}
