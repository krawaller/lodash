define(['../internal/baseRange', '../internal/isIterateeCall'], function(baseRange, isIterateeCall) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * This method is like `_.range` except that it populates values in
   * descending order.
   *
   * @static
   * @memberOf _
   * @category Utility
   * @param {number} [start=0] The start of the range.
   * @param {number} end The end of the range.
   * @param {number} [step=1] The value to increment or decrement by.
   * @returns {Array} Returns the new array of numbers.
   * @example
   *
   * _.rangeRight(4);
   * // => [3, 2, 1, 0]
   *
   * _.rangeRight(-4);
   * // => [-3, -2, -1, 0]
   *
   * _.rangeRight(1, 5);
   * // => [4, 3, 2, 1]
   *
   * _.rangeRight(0, 20, 5);
   * // => [15, 10, 5, 0]
   *
   * _.rangeRight(0, -4, -1);
   * // => [-3, -2, -1, 0]
   *
   * _.rangeRight(1, 4, 0);
   * // => [1, 1, 1]
   *
   * _.rangeRight(0);
   * // => []
   */
  function rangeRight(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    return baseRange(start, end, step, true);
  }

  return rangeRight;
});
