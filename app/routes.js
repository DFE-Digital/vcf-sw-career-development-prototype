const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/cookies-set', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var cookiesChanged = req.session.data['analytics-cookies']

  // Check whether the variable matches a condition
  if (cookiesChanged == "yes"){
    // Send user to next page
    res.redirect('/supporting-pages/cookies?cookies-on=yes')
  } else {
    // Send user to ineligible page
    res.redirect('/supporting-pages/cookies?cookies-on=no')
  }

})


module.exports = router
