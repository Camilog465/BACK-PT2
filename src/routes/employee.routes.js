const express = require('express')
const router = express.Router()
const {
    createEmployee,
    updateEmployee,
    deleteEmployeeById,
    getEmployeeById, 
    getAllEmployees
} = require('./../controllers/employee.controller')

router.post('/register', createEmployee)
router.get('/get-employee/:id', getEmployeeById)
router.get('/get-employees', getAllEmployees)
router.delete('/delete-employee/:id', deleteEmployeeById)
router.patch('/update-employee/:id', updateEmployee)

module.exports = router

