import classDeepEqual from '../classDeepEqual'
import { expect } from 'chai'

//  test classon primitive values
//  Primitive Types: Boolean, Null, Undefined, Number, BigInt, String, Symbol
//  ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures


describe('primitive tests - DeepEqual', () => {
  //  Boolean type
  describe('Boolean tests', () => {
    const true1 = true
    const true2 = true
    const false1 = false
    const false2 = false

    it("should equate two true values", function () {
      expect(classDeepEqual(true1, true2)).to.be.true
    })

    it("should equate two false values", function () {
      expect(classDeepEqual(false1, false2)).to.be.true
    })

    it("should not equate true and false", function () {
      expect(classDeepEqual(true1, false1)).to.be.false
    })
  })    

  //  Null type
  describe('Null tests', () => {
    const null1 = null
    const null2 = null
    const notNull = {}

    it("should equate two null values", function () {
     expect(classDeepEqual(null1, null2)).to.be.true
    })

    it("should not equate null value with non-null value", function () {
      expect(classDeepEqual(null1, notNull)).to.be.false
    })
  })

  //  Undefined type
  describe('Undefined tests', () => {
    const undef1 = undefined
    const undef2 = undefined
    const def = {}

    it("should equate two undefined values", function () {
      expect(classDeepEqual(undef1, undef2)).to.be.true
    })

    it("should not equate undefined value  with non-undefined value", function () {
      expect(classDeepEqual(undef1, def)).to.be.false
    })
  })

  //  Number type
  describe('Number tests', () => {
    const num = 27
    const numSame = num
    const numDiff = 28

    it("should equate equal number values", function () {
      expect(classDeepEqual(num, numSame)).to.be.true
    })

    it("should not equate different number values", function () {
      expect(classDeepEqual(num, numDiff)).to.be.false
    })
  })

  //  BigInt type
  describe('BigInt tests', () => {
    const num = 27n
    const numSame = num
    const numDiff = 28n

    it("should equate equal bigint values", function () {
      expect(classDeepEqual(num, numSame)).to.be.true
    })

    it("should not equate different bigint values", function () {
      expect(classDeepEqual(num, numDiff)).to.be.false
    })
  })

  //  String type
  describe('String tests', () => {
    const str = "Some string"
    const strSame = str
    const strSame2 = "Some string"
    const strDiff = "Diff"

    it("should equate a string w itself", function () {
      expect(classDeepEqual(str, str)).to.be.true
    })

    it("should equate equal string values", function () {
      expect(classDeepEqual(str, strSame)).to.be.true
    })

    it("should equate equal strings with the same value", function () {
      expect(classDeepEqual(str, strSame2)).to.be.true
    })

    it("should not equate different string values", function () {
      expect(classDeepEqual(str, strDiff)).to.be.false
    })
  })

  //  Symbol type
  describe('Symbol tests', () => {
    const sym = Symbol("Sym")
    const symSimilar = Symbol("Sym")
    const symDiff = Symbol('Diff')

    it("should equate a symbol with itself", function () {
      expect(classDeepEqual(sym, sym)).to.be.true
    })

    it("should not equate with a similar symbol", function () {
      expect(classDeepEqual(sym, symSimilar)).to.be.false
    })
    it("should not equate with a different symbol", function () {
      expect(classDeepEqual(sym, symDiff)).to.be.false
    })
  })
})