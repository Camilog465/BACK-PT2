const mongoose = require ('mongoose');
const { Schema } = mongoose;

const DepartamentSchema = new mongoose.Schema({
    
    departamentname: {
        type: String

    },
    departamentcode: {
        type: String

    },
    employee: [{  type: Schema.Types.ObjectId, ref: 'employee' }] 
});

const DepartamentModel = mongoose.model(
    'departament',         
    DepartamentSchema    
);

module.exports = {
    DepartamentModel
}

