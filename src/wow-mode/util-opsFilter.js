import isPhraseMatchOpsMethod from './util-matchOpsMethod';
import findInOpsMethod from './util-filterByOpsMethod';
import findInOpsOperation from './util-filterByOpsOperation'
// import filterByTag from './util-filterByTag';

// imported clone
export const SWAGGER2_OPERATION_METHODS = [
  "get",
  "put",
  "post",
  "delete",
  "options",
  "head",
  "patch"
];

// This function was original source, which we don't need anymore
// export function filterByOpsTag(taggedOps, phrase) {
//   return filterByTag(taggedOps, phrase);
// };

// This function is no longer necessary because
// findInOpsOperation will now also filterByTag
// export function filterByOpsMethodAndTag(taggedOps, phrase) {
//   if (!isPhraseMatchOpsMethod(SWAGGER2_OPERATION_METHODS, phrase)) {
//     return filterByTag(taggedOps, phrase);
//   }
//   return findInOpsMethod(taggedOps, phrase);
// };

export default function filterByOpsMethodAndOperation(taggedOps, phrase) {
  if (!isPhraseMatchOpsMethod(SWAGGER2_OPERATION_METHODS, phrase)) {
    return findInOpsOperation(taggedOps, phrase);
  }
  return findInOpsMethod(taggedOps, phrase);
};
