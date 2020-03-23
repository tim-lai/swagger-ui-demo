import { Map } from "immutable"

export default function findInOpsMethod(taggedOps, phrase) {
  phrase = phrase || ""
  // console.log('start findInOpsMethod, phrase:', phrase)
  let foundInMap = taggedOps.map((tagObj, tag) => {
    /* Dev Note:
      Improved initialization of filteredMap would be to iterate over keys, except "operations"
      E.g. Initialize Map to return with clone of those keys,
      then only append filtered operations,
      and delete the placeholder "operations" key/value pair
      This way, we could be agnostic to handle future additional keys
    */
    let filteredMap = Map({
      tagDetails: tagObj.getIn(["tagDetails"]),
      operations: null
    });
    let filteredOps = tagObj.getIn(["operations"]).filter(operation => {
      return operation.getIn(["method"]) === phrase.toLowerCase();
    });
    // console.log("filteredOps size:", filteredOps.size);
    if (filteredOps.size < 1) {
      return null;
    }
    return (filteredMap = filteredMap.set("operations", filteredOps));
  });
  // get the original keys
  const [...foundInMapKeys] = foundInMap.keys();
  // console.log('test foundInMapKeys:', foundInMapKeys);
  foundInMapKeys.forEach((key, value) => {
    // Todo: why doesn't !foundInMap.includes(key) work here?
    // delete key if does not exist in filteredMap, to return clean Map
    if (!foundInMap.get(key)) {
      // console.log("should delete key:", key);
      foundInMap = foundInMap.delete(key);
    }
  });
  return foundInMap;
};
