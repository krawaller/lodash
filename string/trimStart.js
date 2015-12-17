define(['../internal/charsStartIndex', '../internal/stringToArray', '../lang/toString', '../internal/trimmedStartIndex'], function(charsStartIndex, stringToArray, toString, trimmedStartIndex) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * Removes leading whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as an iteratee for functions like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trimStart('  abc  ');
   * // => 'abc  '
   *
   * _.trimStart('-_-abc-_-', '_-');
   * // => 'abc-_-'
   */
  function trimStart(string, chars, guard) {
    string = toString(string);
    if (!string) {
      return string;
    }
    if (guard || chars === undefined) {
      return string.slice(trimmedStartIndex(string));
    }
    chars = (chars + '');
    if (!chars) {
      return string;
    }
    var strSymbols = stringToArray(string);
    return strSymbols.slice(charsStartIndex(strSymbols, stringToArray(chars))).join('');
  }

  return trimStart;
});
