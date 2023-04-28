import Bar from './Bar'
import Baz from './Baz'

export default
class FooBarBaz {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y

    this.bar = new Bar(x)
    this.baz = new Baz(y)
  }

  // static fromObj = obj => {
  //   const newObj = new Foo()

  //   for (let prop in obj) {
  //     newObj[prop] = obj[prop]
  //   }

  //   newObj.bar = Bar.fromObj(obj.bar)
  //   newObj.baz = Baz.fromObj(obj.baz)

  //   return newObj
  // }
}
