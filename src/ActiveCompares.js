
/**
 * ActiveCompares
 * 
 * my responsibility - keep track of objects being compared
 * 
*/

export default
class ActiveCompares {
  constructor() {
    this.stack = []
  }

  push(x, y) {
    this.stack.push([x, y])
  }

  pop() {
    return this.stack.pop()
  }

  beingCompared(x, y) {
    const count = this.stack.length

    for (let ix=0; ix<count; ix++) {
      const pair = this.stack[ix]
      if (((pair[0] === x) && (pair[1] === y)) || 
          ((pair[0] === y) && (pair[1] === x))) {
        return true
      }
    }
    return false
  }
}

