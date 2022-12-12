const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Handle cookies being accepted/rejected on cookies page
router.post('/cookies-set', function (req, res) {
  // Make a variable and give it the value from 'analytics-cookies'
  var cookiesChanged = req.session.data['analytics-cookies']
  // Check whether the variable matches a condition
  if (cookiesChanged == "yes"){
    // Send user back to page with cookies on
    res.redirect('/supporting-pages/cookies?cookies-on=yes')
  } else {
    // Send user back to page with cookies on
    res.redirect('/supporting-pages/cookies?cookies-on=no')
  }
})

// Handle cookies being accepted/rejected on cookies page
router.post('/cookies-banner-set', function (req, res) {
  // Make a variable and give it the value from 'analytics-cookies'
  var cookiesAccepted = req.session.data['cookies-banner']
  // Check whether the variable matches a condition
  if (cookiesAccepted == "accept"){
    // Send user back to page with cookies on
    res.redirect('/supporting-pages/header-footer-cookie-banner?cookies=accept')
  } else {
    // Send user back to page with cookies on
    res.redirect('/supporting-pages/header-footer-cookie-banner?cookies=reject')
  }
})

module.exports = router
