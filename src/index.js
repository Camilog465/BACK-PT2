const express = require( 'express' );
const cors = require('cors');


const app = express();
const PORT = process.env.PORT;
const api = require('./routes/app.routes')
const dbConection = require( './config/mongo.config' );


dbConection();

app.use(cors());
app.use( express.json() );            

app.use('/', api)

app.listen( PORT, function() {
    console.log( 'Servidor corriendo en puerto 3000' );
});