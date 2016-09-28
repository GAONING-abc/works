var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.static('public'));
app.listen(3000);
console.log('启动成功')