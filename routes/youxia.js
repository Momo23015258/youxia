const pool=require('../pool.js');
const express=require('express');
var router=express.Router();
router.post('/login',function(req,res){
    var obj=req.body;
    var $uname=obj.uname;
    if(!$uname){
        res.send({code:401,msg:'uname required'});
        return;
    }
    var $pwd=obj.pwd;
    if(!$pwd){
        res.send({code:402,msg:'pwd required'});
        return;
    }
    pool.query('SELECT * FROM yx_user WHERE uname=? AND pwd=?',[$uname,$pwd],function(err,result){
        if(err) throw err;
        if(result.length>0){
            res.send({code:200,msg:'login success'});
        }else{
            res.send({code:301,msg:'uname or upwd error'});
        }
    });

});


module.exports=router;