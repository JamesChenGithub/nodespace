const express = require('express');
const app = express();
// const bodyparser = require('body-parser');
// const path = require('path');

// app.use('/', express.static('./static/'));

// app.use(bodyparser.urlencoded({extended:false}));
// app.use(bodyparser.json());

app.listen(3000, ()=>{
    console.log("server start");
});