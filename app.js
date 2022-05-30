const express = require('express');
const res = require('express/lib/response');

var cors = require('cors');


const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
const api = require('./api');

app.use('/api',api);

if ( process.env.NODE_ENV == "production"){

    app.use(express.static("client/build"));

}
app.listen(port,()=>{
    console.log(`Server listening at port: ${port}`)
});