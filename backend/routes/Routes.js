const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('ola mundo')
})

module.exports = router;