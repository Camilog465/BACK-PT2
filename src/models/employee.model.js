const mongoose = require ('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new mongoose.Schema({
    code: { 
        type: Number

    },
    name: {
        type: String

    },
    firstlastname: {
        type: String

    },
    secondlastname: {
        type: String

    },
    departamentcode:[{  type: Schema.Types.ObjectId, ref: 'departament' }]  


});

const EmployeeModel = mongoose.model(
    'employee',         
    EmployeeSchema    
);

module.exports = {
    EmployeeModel
}