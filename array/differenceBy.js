define(['../internal/baseDifference', '../internal/baseFlatten', '../internal/baseIteratee', '../lang/isArrayLikeObject', './last', '../function/rest'], function(baseDifference, baseFlatten, baseIteratee, isArrayLikeObject, last, rest) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * This method is like `_.difference` except that it accepts `iteratee` which
   * is invoked for each element of `array` and `values` to generate the criterion
   * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {...Array} [values] The values to exclude.
   * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * _.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
   * // => [3.1, 1.3]
   *
   * // using the `_.property` callback shorthand
   * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
   * // => [{ 'x': 2 }]
   */
  var differenceBy = rest(function(array, values) {
    var iteratee = last(values);
    if (isArrayLikeObject(iteratee)) {
      iteratee = undefined;
    }
    return isArrayLikeObject(array)
      ? baseDifference(array, baseFlatten(values, false, true), baseIteratee(iteratee))
      : [];
  });

  return differenceBy;
});
