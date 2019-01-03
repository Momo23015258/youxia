jQuery.fn.my_slider1=function(id,lis,url1,url2,url3){
   $("<link rel='stylesheet' href='css/my_slider1.css'>").appendTo("head");
   $(id+">div:nth-child(1)").css("backgroundImage",url1 );
   $(id+">div:nth-child(2)").css("backgroundImage",url2 );
   $(id+">div:nth-child(3)").css("backgroundImage",url3);
var $divs=$(id+">div");
var $lis=$(lis);
var t=0;

function task(){
    $divs.eq(t).addClass("show").siblings().removeClass("show");
    $lis.eq(t).addClass("on").siblings().removeClass("on");
    t++;
    if(t==3)
    t=0;
}
//页面加载时上下标签隐藏
window.onload=function(){
    $(id+">a").hide();
}
//实现图片自动轮播
var timer=setInterval(task,5000);
//鼠标移入停止轮播鼠标移出开始轮播
$(id).hover(function(){
    clearInterval(timer);
    $(".my_slider1>a").show();
},
function(){
    timer=setInterval(task,5000);
    $(id+">a").hide();
})
//点击小圆点跳转到小圆点所在的位置
$lis.on("click",function(){
    t=$(this).index();
    $divs.eq(t).addClass("show").siblings().removeClass("show");
    $lis.eq(t).addClass("on").siblings().removeClass("on");
})
//点击跳转到上一张图片
$(id+">a.prev").on("click",function(){
       if(t==-1)
        t=2;
        $divs.eq(t).addClass("show").siblings().removeClass("show");
        $lis.eq(t).addClass("on").siblings().removeClass("on");
       t--;
})
//点击跳转到下一张图片
$(id+">a.next").on("click",function(){
       if(t==3)
       t=0;
       $divs.eq(t).addClass("show").siblings().removeClass("show");
       $lis.eq(t).addClass("on").siblings().removeClass("on");

       t++;
    })     
}
;