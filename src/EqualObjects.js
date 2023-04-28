
/**
 * EqualObjects
 * 
 * my responsibility is to track successful compares
 * 
 * maintains a type table object, this.typeTable,
 * whose property keys are object type names 
 * (e.g. 'Array', 'Object', 'Foo', 'Bar' ...)
 * and values are Maps:
 *  key: obj = object of type T 
 *  value: array of objects of type T found equal to obj
 * 
 * when adding an equal pair x,y 
 * y is added to the array of x map entry
 * x is added to the array of y map entry
 * 
 * Example:
    const eq = new EqualObjects()
    const x = new Bar(42)
    const y = new Bar(42)
    const z = new Bar(42)

    console.log(eq.knownEquals(x, y))    // false

    eq.add(x, y)
    console.log(eq.knownEquals(x, y))    // true
    console.log(eq.knownEquals(x, z))    // false

    eq.add(z, y)
    console.log(eq.knownEquals(y, z))    // true
    console.log(eq.knownEquals(x, z))    // false

  Structure:
    typeTable:  {
      Bar: Map(3) {
        Bar { val: 42 } => [ [Bar] ],             //  key: x  value: [ y ]
        Bar { val: 42 } => [ [Bar], [Bar] ],      //  key: y  value: [ x, z ]
        Bar { val: 42 } => [ [Bar] ]              //  key: z  value: [ y ]
      }
    }
*/
import { getTypeName } from "./util"

export default
class EqualObjects {
  constructor() {
    this.typeTable = {}
  }

  add(x, y) {
    const typeMap = this.getTypeMap(x)

    //  never know if will compare x,y or y,x later on
    doAdd(x, y)
    doAdd(y, x)

    function doAdd(x, y) {
      const xEquals = typeMap.get(x)
      xEquals ? xEquals.push(y) : typeMap.set(x, [y])
    }
  }

  knownEquals(x, y) {
    const typeMap = this.getTypeMap(x)
    return lookup(x, y) || lookup(y, x)

    function lookup(x, y) {
      //  optional chaining returns undefined when short circuits
      //  !! forces undefined to false
      return !!(typeMap?.get(x)?.includes(y))
    }
  }

  getTypeMap(x) {
    const type = getTypeName(x)

    if (!this.typeTable[type]) {
      this.typeTable[type] = new Map()
    }    
    
    return this.typeTable[type]
  }
}
