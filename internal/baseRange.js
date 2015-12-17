define(['../lang/toNumber'], function(toNumber) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeCeil = Math.ceil,
      nativeMax = Math.max;

  /**
   * The base implementation of `_.range` and `_.rangeRight`.
   *
   * @private
   * @param {number} [start=0] The start of the range.
   * @param {number} end The end of the range.
   * @param {number} [step=1] The value to increment or decrement by.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Array} Returns the new array of numbers.
   */
  function baseRange(start, end, step, fromRight) {
    start = toNumber(start);
    start = start === start ? start : 0;

    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toNumber(end) || 0;
    }
    step = step === undefined ? (start < end ? 1 : -1) : (toNumber(step) || 0);

    var index = -1,
        length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
        result = Array(length);

    while (length--) {
      result[fromRight ? length : ++index] = start;
      start += step;
    }
    return result;
  }

  return baseRange;
});
