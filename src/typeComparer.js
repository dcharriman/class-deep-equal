
/**
 * typeComparer
 * 
 * my responsibility - return appropriate comparer for object type
 * default: object comparer (areObjectsEqual) for type not in COMPARERS
*/

import areArraysEqual from "./areArraysEqual"
import areDatesEqual from "./areDatesEqual"
import areMapsEqual from "./areMapsEqual"
import areObjectsEqual from "./areObjectsEqual"
import areSetsEqual from "./areSetsEqual"
import { getTypeName } from "./util"

const TYPE_ARRAY = 'Array'
const TYPE_DATE = 'Date'
const TYPE_MAP = 'Map'
const TYPE_OBJECT = 'Object'
const TYPE_SET = 'Set'

const COMPARERS = {
  [TYPE_ARRAY]: areArraysEqual,
  [TYPE_DATE]: areDatesEqual,
  [TYPE_MAP]: areMapsEqual,
  [TYPE_OBJECT]: areObjectsEqual,
  [TYPE_SET]: areSetsEqual,
}

export default
function typeComparer(object) {
  return COMPARERS[getTypeName(object)] || areObjectsEqual
}