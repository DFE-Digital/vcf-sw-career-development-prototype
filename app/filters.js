const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

const _ = require('lodash');

  var filters = {}

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

// Add the filters using the addFilter function
Object.entries(filters).forEach(([name, fn]) => addFilter(name, fn))
