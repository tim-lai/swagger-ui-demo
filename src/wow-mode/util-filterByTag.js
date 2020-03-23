// Demo Dev Note: for reference only. We don't actually use this function anymore
// Note: modified from opsFilter.js with .toLowerCase()
// Note: avoiding regexp for now due to required regexp escaping from user input, which is slower
// https://stackoverflow.com/questions/1245930/javascript-indexof-to-ignore-case
// Note: also consider locale
export default function(taggedOps, phrase) {
  return taggedOps.filter((tagObj, tag) => tag.toLowerCase().indexOf(phrase.toLowerCase()) !== -1);
};
