const express = require('express');
const router = express.Router()
const employee = require('./employee.routes')
const departament = require('./departament.routes')
router.use('/api', employee)
router.use('/api', departament)

module.exports = router