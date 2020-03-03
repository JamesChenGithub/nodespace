const express = require('express');
const app = express();
// const bodyparser = require('body-parser');
// const path = require('path');

app.use('/', express.static('./static/'));

// 定位到登录页面
app.get('/', function (req, res) {
    console.log('调用 / 页面');
    res.sendFile(__dirname + '/index.html');
})

// app.use(bodyparser.urlencoded({extended:false}));
// app.use(bodyparser.json());

app.listen(3000, ()=>{
    console.log("server start");
});