
/**
 * DeepCompare(x, y)
 * 
 * my responsibility - engine driving deep compare
 * 
*/

import { isObject, areSameObjectType, areSameValue } from "./util"
import EqualObjects from "./EqualObjects"
import ActiveCompares from "./ActiveCompares"
import typeComparer from "./typeComparer"

const areBothObjects = (x, y) => isObject(x) && isObject(y)

export default
class DeepCompare {
  constructor() {
    this.eqObj = new EqualObjects()
    this.activeCompares = new ActiveCompares()
    this.compare = this.compare.bind(this)
  }

  compare(x, y) {
    if (areSameValue(x, y)) return true   //  (equal primitives, or equal references)

    if (!(areBothObjects(x, y) && areSameObjectType(x, y))) return false

    if (this.previouslyEqual(x, y)) return true

    if (this.beingCompared(x, y)) return true

    return this.doCompare(x, y)
  }

  doCompare(x, y) {
    this.activeCompares.push(x, y)

    const comparer = typeComparer(x)
    let retVal = false
    if (comparer({x, y, compare: this.compare})) {
      this.eqObj.add(x, y)
      retVal = true
    }

    this.activeCompares.pop()

    return retVal
  }

  previouslyEqual(x, y) {
    return this.eqObj.knownEquals(x, y)
  }

  beingCompared(x, y) {
    return this.activeCompares.beingCompared(x, y)
  }
}

