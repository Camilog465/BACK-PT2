const { EmployeeModel } = require('../models/employee.model');
const { DepartamentModel} = require('../models/departament.model')


const createEmployee = async ( req, res ) => {
    const { name, firstlastname, secondlastname, code, departamentcode } = req.body
   
    const dbEmployee = new EmployeeModel({
        code: code, 
        name: name, 
        firstlastname: firstlastname,        
        secondlastname: secondlastname, 
        departamentcode: departamentcode 
    });

    await dbEmployee.save();
    if (dbEmployee.departamentcode) {
        await DepartamentModel.findByIdAndUpdate(
            dbEmployee.departamentcode,
            { $push: { employee: dbEmployee._id } }
        );
    }
    return dbEmployee;

}

const updateEmployee = async (req, res) => {
    const employeeId = req.params.id;
    const inputData = req.body

    try {
        const data = await EmployeeModel.findByIdAndUpdate( employeeId, inputData );
        
        res.json({
            ok: true,
            data
        }); 
    }
    catch( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al actualizar un usuario por ID'
        })   
    }
}



const deleteEmployeeById = async (req, res ) => { 
    const employeeId = req.params.id;
    const inputData = req.body

    try {
        const data = await EmployeeModel.findByIdAndDelete(employeeId, inputData );
        res.json({
            ok:true,
            msg: "Employeed deleted"
        });
    }
    catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al eliminar un usuario por ID'
        })   
        
    }
}
        
const getEmployeeById = async (req, res) => {
    try {
        const data = await EmployeeModel.findById(req.params.id)
        return res.json({ok:true, data})
    } catch (error) {
        if(!data.id){
            return res.json({ok:false, msg:"Employee not found"})
        }
        
        
    }

}


const getAllEmployees = async (req, res) => {
    try {
        const employess = await EmployeeModel.find()
        return res.json({ok: true, employess})
    } catch (error) {
        return res.json({ ok: false, msg: 'Server error' });
    }

}



module.exports = {
 createEmployee,
 updateEmployee,
 deleteEmployeeById,
 getEmployeeById, 
 getAllEmployees
}