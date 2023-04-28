
/**
 * classDeepEqual
 * 
 * my responsibility - interface to deep compare two items
 * 
 * return true if:
 *  items are deep equal
*/

import DeepCompare from "./DeepCompare"

export const classDeepEqual = (item1, item2) => new DeepCompare().compare(item1, item2)

// export default classDeepEqual