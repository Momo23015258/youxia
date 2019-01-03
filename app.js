const bodyParser=require('body-parser');
const express=require('express');
const YxRouter=require("./routes/youxia.js");

var app=express();
app.listen(3000);

app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(express.static('public'));

app.use('/youxia',YxRouter);




