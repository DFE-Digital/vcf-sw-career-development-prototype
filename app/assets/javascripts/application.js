//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})

const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
nunjucks.configure('views', {
  autoescape: true,
  express: app
});

// Middleware to handle 'show_back_link' query parameter for all routes
app.use((req, res, next) => {
  res.locals.showBackLink = req.query.show_back_link === 'true';
  next();
});

// Route handler for the specific route '/development-programmes'
app.get('/development-programmes', (req, res) => {
  res.render('development-programmes.njk');
});

// Add more route handlers for other pages as needed

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
