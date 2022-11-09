const _ = require('lodash');

module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */



  // Remove items with a specified attribute and value
filters.removeWhere = (arr, key, compare) => {
  compare = [].concat(compare) // force to arr
  let filtered = arr.filter(item => {
    return !compare.includes(_.get(item, key))
  })
  return filtered
}

// Filter results for only those containing attribute and value
filters.where = (arr, key, compare) => {
  arr = arr || []
  compare = [].concat(compare) // force to arr
  let filtered = arr.filter(item => {
    return compare.includes(_.get(item, key))
  })
  return filtered
}



  return filters
}
