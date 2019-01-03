
var form=document.forms[0];
var txtName=form.uname;
var txtPwd= form.pwd;
txtName.onfocus=getFocus;
txtPwd.onfocus=getFocus;
function getFocus(){
    //this->当前文本框
    //清除旁边div的class
    var div=this.nextElementSibling;
    div.className="";
}
function vali(txt,reg){
    var div=txt.nextElementSibling;
    div.className="";
    if(reg.test(txt.value))
        div.className="vali_success";
   else
        div.className="vali_fail";
    return reg.test(txt.value);
}
txtName.onblur=function(){
    vali(this,/^\w{1,10}$/);
}
txtPwd.onblur=function() {
    vali(this, /^\d{6}$/);
}

var btn=form.elements[2];
console.log(btn);
console.log(9)
btn.onclick=function(){
    if(!vali(txtName,/^\w{1,10}$/)){
        txtName.focus();
        console.log(3);
   }else if(!vali(txtPwd,/^\d{6}$/)){
        txtPwd.focus();
   }else{
        console.log(4)
        form.submit(); }
}

