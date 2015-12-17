define(['../lang/toInteger'], function(toInteger) {

  /**
   * Creates a function that returns its nth argument.
   *
   * @static
   * @memberOf _
   * @category Utility
   * @param {number} [n=0] The index of the argument to return.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var func = _.nthArg(1);
   *
   * func('a', 'b', 'c');
   * // => 'b'
   */
  function nthArg(n) {
    n = toInteger(n);
    return function() {
      return arguments[n];
    };
  }

  return nthArg;
});
