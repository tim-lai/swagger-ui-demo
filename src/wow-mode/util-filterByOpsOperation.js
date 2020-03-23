import { Map } from "immutable"

export default function findInOpsOperation (taggedOps, phrase) {
  phrase = phrase || ""
  // console.log('start findInOpsOperation, phrase:', phrase);
  let foundInMap = taggedOps.map((tagObj, tag) => {
    // filterByTag first, return entire List of operations if true
    if (tag.toLowerCase().indexOf(phrase.toLowerCase()) !== -1) {
      return tagObj
    }
    /* Dev Note:
      Improved initialization of filteredMap would be to iterate over keys, except "operations"
      E.g. Initialize Map to return with clone of those keys,
      then only append filtered operations,
      and delete the placeholder "operations" key/value pair
      This way, we could be agnostic to handle future additional keys
    */
    // Now filter operations List to pick specific operations with tagObj
    let filteredMap = Map({
      tagDetails: tagObj.getIn(["tagDetails"]),
      operations: null
    })
    let filteredOps = tagObj.getIn(["operations"]).filter(operation => {
      let bySummary = operation
        .getIn(["operation", "summary"])
        .toLowerCase()
        .includes(phrase.toLowerCase())
      let byDescription = operation
        .getIn(["operation", "description"])
        .toLowerCase()
        .includes(phrase.toLowerCase())
      let byOperationId = operation
        .getIn(["operation", "operationId"])
        .toLowerCase()
        .includes(phrase.toLowerCase())
      let byOperationParameterName = operation
        .getIn(["operation", "parameters"])
        .reduce((acc, parameter) => {
          if (acc) return acc
          if (
            parameter.get("in") === "path" &&
            parameter
              .get("name")
              .toLowerCase()
              .includes(phrase.toLowerCase())
          ) {
            return true
          }
          return false
        }, false)

      if (
        bySummary ||
        byDescription ||
        byOperationId ||
        byOperationParameterName
      ) {
        return operation
      }
      return null
    })
    // console.log("filteredOps size:", filteredOps.size)
    if (filteredOps.size < 1) {
      return null
    }
    return (filteredMap = filteredMap.set("operations", filteredOps))
  })
  // get the original keys
  const [...foundInMapKeys] = foundInMap.keys()
  // console.log('test foundInMapKeys:', foundInMapKeys);
  foundInMapKeys.forEach((key, value) => {
    // Todo: why doesn't !foundInMap.includes(key) work here?
    // delete key if does not exist in filteredMap, to return clean Map
    if (!foundInMap.get(key)) {
      // console.log("should delete key:", key);
      foundInMap = foundInMap.delete(key)
    }
  })
  // console.log('returning foundInMap', foundInMap.toJS())
  return foundInMap
}
