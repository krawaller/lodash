define(['../internal/baseClone'], function(baseClone) {

  /**
   * Creates a shallow clone of `value`.
   *
   * **Note:** This method is loosely based on the
   * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
   * and supports cloning arrays, array buffers, booleans, date objects, maps,
   * numbers, `Object` objects, regexes, sets, strings, symbols, and typed arrays.
   * The own enumerable properties of `arguments` objects and objects created
   * by constructors other than `Object` are cloned as plain `Object` objects.
   * An empty object is returned for uncloneable values such as error objects,
   * functions, DOM nodes, and WeakMaps.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to clone.
   * @returns {*} Returns the cloned value.
   * @example
   *
   * var users = [
   *   { 'user': 'barney' },
   *   { 'user': 'fred' }
   * ];
   *
   * var shallow = _.clone(users);
   * console.log(shallow[0] === users[0]);
   * // => true
   */
  function clone(value) {
    return baseClone(value);
  }

  return clone;
});
