const express = require('express')
const router = express.Router()

// Read query parameters on GET requests and store in session
// This replicates the standard Prototype Kit auto-store-data behaviour for GET requests
router.get('*', function (req, res, next) {
  var query = req.query
  if (query && Object.keys(query).length > 0) {
    req.session.data = req.session.data || {}
    Object.assign(req.session.data, query)
  }
  next()
})

// Add your routes here - above the module.exports line

module.exports = router