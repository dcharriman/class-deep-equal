/**
 * areMapsEqual
 * 
 * my responsibility - compare Maps entry by entry, comparing keys and values
 */

const areMapsEqual = param => mapSameSize(param) && entriesEqual(param)

const mapSameSize = ({x, y}) => x.size === y.size

const entriesEqual = ({x, y, compare}) => {
  const xMapIterator = x.entries()
  const yMapIterator = y.entries()
  const count = x.size

  let xKey, xValue, yKey, yValue

  for (let ix=0; ix<count; ix++) {
    nextKeysValues()
    if (!(keysMatch() && valuesMatch())) 
      return false
  }

  return true

  function nextKeysValues() {
    const xKV = xMapIterator.next().value
    const yKV = yMapIterator.next().value

    xKey = xKV[0]
    xValue = xKV[1]
    yKey = yKV[0]
    yValue = yKV[1]
  }

  function keysMatch() { return compare(xKey, yKey) }
  function valuesMatch() { return compare(xValue, yValue) }
}

export default areMapsEqual
