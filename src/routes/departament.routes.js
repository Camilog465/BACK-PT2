const express = require('express')
const router = express.Router()

const {
    createDepartament,
    updateDepartament,
    deleteDepartamentById,
    getDepartamentById, 
    getAllDepartaments
} = require('./../controllers/departament.controller')

router.post('/create', createDepartament)
router.get('/get-departament/:id', getDepartamentById)
router.get('/get-departaments', getAllDepartaments)
router.delete('/delete-departament/:id', deleteDepartamentById)
router.patch('/update-departament/:id', updateDepartament)

module.exports = router