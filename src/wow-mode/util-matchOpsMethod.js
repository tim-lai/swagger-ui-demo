export default function isPhraseMatchOpsMethod(methods, phrase) {
  if (Object.prototype.toString.call(phrase) !== "[object String]") {
    return false;
  }
  return methods.indexOf(phrase.toLowerCase()) !== -1;
}
