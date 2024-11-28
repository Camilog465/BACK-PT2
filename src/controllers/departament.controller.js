const { DepartamentModel } = require('../models/departament.model')


const createDepartament = async ( req, res ) => {
    const { departamentname, departamentcode } = req.body
   try {
    const dbDepartament = new DepartamentModel({
        departamentname: departamentname,
        departamentcode: departamentcode 
    });

    await dbDepartament.save();
    return res.json({
        ok: true,
        msg: 'created'
    });
    
   } catch (error) {
    console.error( error );
        res.json({
            ok: false,
            msg: 'Error al crear departamento'
        })   
    
   }
    
}

const updateDepartament = async (req, res) => {
    const departamentId = req.params.id;
    const inputData = req.body

    try {
        const data = await DepartamentModel.findByIdAndUpdate( departamentId, inputData );
        
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



const deleteDepartamentById = async (req, res ) => { 
    const departamentId = req.params.id;
    const inputData = req.body

    try {
        const data = await DepartamentModel.findByIdAndDelete(departamentId, inputData );
        res.json({
            ok: true,
            msg: "Departament deleted"
        });
    }
    catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al eliminar un departamento por ID'
        })   
        
    }
}
        
const getDepartamentById = async (req, res) => {
    try {
        const data = await DepartamentModel.findById(req.params.id);
        return res.json({ok:true, data});
    } catch (error) {
        res.json({
            ok:false, 
            msg:"Departament not found"
        })
    }
        
}


const getAllDepartaments = async (req, res) => {
    try {
        const departaments = await DepartamentModel.find({}).populate('employee')
        
        return res.json({ok: true, departaments})
    } catch (error) {
        return res.json({ ok: false, msg: 'Server error' });
    }
   
}


module.exports = {
 createDepartament,
 updateDepartament,
 deleteDepartamentById,
 getDepartamentById,
 getAllDepartaments

}