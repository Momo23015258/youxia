  var wrapper = document.getElementById("warp");
  var div_img_b = document.querySelectorAll(".div_img_b img");
  var div_span_s = document.querySelectorAll(".div_span_s span");
  var div_span_sLength = document.querySelectorAll(".div_span_s span").length;
  var index = 0;
  var timer;

  //���ͼ����ʾ��Ӧͼ�?
  for (var i = 0; i < div_span_s.length; i++) {
      div_span_s[i].r = i;
      div_span_s[i].onclick = function(){
          for(var j = 0; j < div_span_s.length; j++){
              div_span_s[j].className = "";
              div_img_b[j].className = "";
          }
          this.className = "on";
          div_img_b[this.r].className = "on";

//��������
          index = this.r;
      }

  }

  //�����ʾ�����?
  $("#next").on("click", function(e){
      e.preventDefault();
      index ++;
      if(index >= div_span_sLength){
          index = 0;
      }
      common();
  })

  //�����ʾ�����?
  $("#pre").on("click", function(e){
      e.preventDefault();
      index --;
      if(index < 0){
          index = div_span_sLength-1;
      }      
      common();
  })

  //�Զ��ֲ�
  timer = setInterval("setIntervalTimer()",3000);
  //ҳ�������ִ��?
  window.onload = function(){
      $("#next").hide();
      $("#pre").hide();
  }



  //�Զ��ֲ�����
  function setIntervalTimer(){
      index ++;
      if(index >= div_span_sLength){
          index = 0;
      }
      common();
  }

  //common
  function common(){
      for(var j = 0; j < div_span_s.length; j++){
          div_span_s[j].className = "";
          div_img_b[j].className = "";
      }
      div_span_s[index].className = "on";
      div_img_b[index].className = "on";
  }
  //�������ȥֹͣ�Զ��ֲ�?
  wrapper.onmouseover=function(){
      clearInterval(timer);
      $("#next").show();
      $("#pre").show();

  }



  //������뿪��ʼ�Զ��ֲ�?
  wrapper.onmouseleave=function(){
      timer = setInterval("setIntervalTimer()",3000);
      $("#next").hide();
      $("#pre").hide();
  }
  $(".m_fk_tabsMore ul li:eq(0)>a").on("click",function(e){
      e.preventDefault();
      var $ul=$("<ul id='j_m_users' class='list-unstyled '>"+
      "<li class='float-left'><img src='img/fc1.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fc2.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fc3.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fc4.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fc5.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fc6.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fc7.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fc8.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fc9.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fc10.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fc11.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fc12.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "</ul>")
      
      $(this).addClass("fontcolor").parent().siblings().children().removeClass("fontcolor");
      $ul.replaceAll("#j_m_users");
      $("#j_m_users>li>div").hide();
      $("#j_m_users>li").hover(
          function(){$(this).children().next().show();},
          function(){$(this).children().next().hide();
    })
  })

  $(".m_fk_tabsMore ul li:eq(1)>a").on("click",function(e){
      e.preventDefault();
      var $ul=$("<ul id='j_m_users' class='list-unstyled '>"+
      "<li class='float-left'><img src='img/fa1.png' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fa2.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fa3.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fa5.png' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fa6.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fa7.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fa8.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fa9.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fa10.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fa11.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fa12.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fa13.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+ "</ul>")
      $(this).addClass("fontcolor").parent().siblings().children().removeClass("fontcolor");
      $ul.replaceAll("#j_m_users");
      $("#j_m_users>li>div").hide();
      $("#j_m_users>li").hover(
          function(){$(this).children().next().show();},
          function(){$(this).children().next().hide();
    })
  })


  $(".m_fk_tabsMore ul li:eq(2)>a").on("click",function(e){
      e.preventDefault();
      var $ul=$("<ul id='j_m_users' class='list-unstyled '>"+
      "<li class='float-left'><img src='img/fb1.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fb2.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fb3.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fb4.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fb5.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fb6.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fb7.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fb8.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fb9.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fb10.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fb11.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/fb12.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+ "</ul>")
      $(this).addClass("fontcolor").parent().siblings().children().removeClass("fontcolor");
      $ul.replaceAll("#j_m_users");
      $("#j_m_users>li>div").hide();
      $("#j_m_users>li").hover(
          function(){$(this).children().next().show();},
          function(){$(this).children().next().hide();
    })
  })

  $(".m_fk_tabsMore ul li:eq(3)>a").on("click",function(e){
      e.preventDefault();
      var $ul=$("<ul id='j_m_users' class='list-unstyled '>"+
      "<li class='float-left'><img src='img/ff1.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ff2.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ff3.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ff4.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ff5.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ff6.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ff7.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ff8.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ff9.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ff10.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ff11.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ff12.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+ "</ul>")
      $(this).addClass("fontcolor").parent().siblings().children().removeClass("fontcolor");
      $ul.replaceAll("#j_m_users");
      $("#j_m_users>li>div").hide();
      $("#j_m_users>li").hover(
          function(){$(this).children().next().show();},
          function(){$(this).children().next().hide();
          })
  })

  $(".m_fk_tabsMore ul li:eq(4)>a").on("click",function(e){
      e.preventDefault();
      var $ul=$("<ul id='j_m_users' class='list-unstyled '>"+
      "<li class='float-left'><img src='img/ea1.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ea2.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ea3.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ea4.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ea5.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ea6.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ea7.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ea8.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ea9.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ea10.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ea11.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/ea12.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+ "</ul>")
      $(this).addClass("fontcolor").parent().siblings().children().removeClass("fontcolor");
      $ul.replaceAll("#j_m_users");
      $("#j_m_users>li>div").hide();
      $("#j_m_users>li").hover(
          function(){$(this).children().next().show();},
          function(){$(this).children().next().hide();
          })
  })
  $(".m_fk_tabsMore ul li:eq(5)>a").on("click",function(e){
      e.preventDefault();
      var $ul=$("<ul id='j_m_users' class='list-unstyled '>"+
      "<li class='float-left'><img src='img/eb1.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/eb2.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/eb3.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/eb4.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/eb5.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/eb6.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/eb7.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/eb8.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/eb9.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/eb10.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/eb11.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+
      "<li class='float-left'><img src='img/eb12.jpg' alt=''><div class='w-100'><a href='#'> +加关注</a></div></li>"+ "</ul>")
      $(this).addClass("fontcolor").parent().siblings().children().removeClass("fontcolor");
      $ul.replaceAll("#j_m_users");
      $("#j_m_users>li>div").hide();
      $("#j_m_users>li").hover(
          function(){$(this).children().next().show()},
          function(){$(this).children().next().hide()
          })
  })


   $(".floor2>.m_floor2_head>ul li:eq(0)>a").on("click",function(e){
     e.preventDefault();
     var $div=$(" <div class='box'>"+
     "<div class='slide on'><img src='img/accordion1-1.jpg' alt=''/></div>"+
     "<div class='slide '><img src='img/accordion1-2.jpg' alt=''/></div>"+
     "<div class='slide '><img src='img/accordion1-3.jpg' alt=''/></div>"+
     "<div class='slide '><img src='img/accordion1-6.jpg' alt=''/></div>"+
     "<div class='slide '><img src='img/accordion1-7.jpg' alt=''/></div>"+
   "</div>")
   $div.replaceAll(".floor2>.box");
       $(this).addClass("fontcolor").parent().siblings().children().removeClass("fontcolor");
       $(".slide").hover(function(){
           $(this).stop().addClass("on").siblings().removeClass("on");
       })
  })
 $(".floor2>.m_floor2_head ul li:eq(1)>a").on("click",function(e){
     e.preventDefault();
     var $div=$("  <div class='box'>"+
     "<div class='slide on'><img src='img/accordion2-1.jpg' alt=''/></div>"+
     "<div class='slide '><img src='img/accordion2-2.jpg' alt=''/></div>"+
     "<div class='slide '><img src='img/accordion2-3.jpg' alt=''/></div>"+
     "<div class='slide '><img src='img/accordion2-4.jpg' alt=''/></div>"+
     "<div class='slide '><img src='img/accordion2-5.jpg' alt=''/></div>"+
 "</div>"
 )
     $div.replaceAll(".box");
     $(this).addClass("fontcolor").parent().siblings().children().removeClass("fontcolor");
     $(".slide").hover(function(){
         $(this).stop().addClass("on").siblings().removeClass("on");
     })
 })
  $(".floor2>.m_floor2_head ul li:eq(2)>a").on("click",function(e){
      e.preventDefault();
      var $div=$("  <div class='box'>"+
          "<div class='slide on'><img src='img/accordion3-1.jpg' alt=''/></div>"+
          "<div class='slide '><img src='img/accordion3-2.jpg' alt=''/></div>"+
          "<div class='slide '><img src='img/accordion3-3.jpg' alt=''/></div>"+
          "<div class='slide '><img src='img/accordion3-4.jpg' alt=''/></div>"+
          "<div class='slide '><img src='img/accordion3-5.jpg' alt=''/></div>"+
          "</div>"
      )
      $div.replaceAll(".box");
      $(this).addClass("fontcolor").parent().siblings().children().removeClass("fontcolor");
      $(".slide").hover(function(){
          $(this).stop().addClass("on").siblings().removeClass("on");
      })
  })
  $(".floor2>.m_floor2_head ul li:eq(3)>a").on("click",function(e){
      e.preventDefault();
      var $div=$("  <div class='box'>"+
          "<div class='slide on'><img src='img/accordion4-1.jpg' alt=''/></div>"+
          "<div class='slide '><img src='img/accordion4-2.jpg' alt=''/></div>"+
          "<div class='slide '><img src='img/accordion4-3.jpg' alt=''/></div>"+
          "<div class='slide '><img src='img/accordion4-4.jpg' alt=''/></div>"+
          "<div class='slide '><img src='img/accordion4-5.jpg' alt=''/></div>"+
          "</div>"
      )
      $div.replaceAll(".box");
      $(this).addClass("fontcolor").parent().siblings().children().removeClass("fontcolor");
      $(".slide").hover(function(){
          $(this).stop().addClass("on").siblings().removeClass("on");
      })
  })
  $(".floor2>.m_floor2_head ul li:eq(4)>a").on("click",function(e){
      e.preventDefault();
      var $div=$("  <div class='box'>"+
          "<div class='slide on'><img src='img/accordion5-1.jpg' alt=''/></div>"+
          "<div class='slide '><img src='img/accordion5-2.jpg' alt=''/></div>"+
          "<div class='slide '><img src='img/accordion5-3.jpg' alt=''/></div>"+
          "<div class='slide '><img src='img/accordion5-4.jpg' alt=''/></div>"+
          "<div class='slide '><img src='img/accordion5-5.jpg' alt=''/></div>"+
          "</div>"
      )
      $div.replaceAll(".box");
      $(this).addClass("fontcolor").parent().siblings().children().removeClass("fontcolor");
      $(".slide").hover(function(){
          $(this).stop().addClass("on").siblings().removeClass("on");
      })
  })
  $(".floor2>.m_floor2_head ul li:eq(5)>a").on("click",function(e){
      e.preventDefault();
      var $div=$("  <div class='box'>"+
          "<div class='slide on'><img src='img/accordion6-1.jpg' alt=''/></div>"+
          "<div class='slide '><img src='img/accordion6-2.jpg' alt=''/></div>"+
          "<div class='slide '><img src='img/accordion6-3.jpg' alt=''/></div>"+
          "<div class='slide '><img src='img/accordion6-4.jpg' alt=''/></div>"+
          "<div class='slide '><img src='img/accordion6-5.jpg' alt=''/></div>"+
          "</div>"

      )
      $div.replaceAll(".box");
      $(this).addClass("fontcolor").parent().siblings().children().removeClass("fontcolor");
      $(".slide").hover(function(){
          $(this).stop().addClass("on").siblings().removeClass("on");
      })
  })

  $(function(){
      $(".slide").hover(function(){
          $(this).stop().addClass("on").siblings().removeClass("on");
      })
  })
  $("#j_m_users>li>div").hide();
  $("#j_m_users>li").hover(
      function(){$(this).children().next().show();},
      function(){$(this).children().next().hide();
})

      var $p1=$("<p>今天 19:44 &nbsp;<span> Jennychen </span> &nbsp;报名了&nbsp;&nbsp;&nbsp;&nbsp; <span><a href='#'>【旅行达人分享会NO.54】11.22周四晚七点半，揭秘咖喱国的终极奥秘，跟着印度苦行2个月的吉米老师！</a></span> 278人已报名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>")
      var $p2=$("<p>今天 19:44 &nbsp;<span> 吃心妄想 </span> &nbsp;报名了&nbsp;&nbsp;&nbsp;&nbsp; <span><a href='#'>【特惠·孙家岭古道】11.25周日，徒步孙家岭古道-五百岗，登顶雄鹅峰，疾行秋色大尖山...</a></span> 117人已报名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>")
      var $p3=$("<p>今天 19:44 &nbsp;<span> 木木颖 </span> &nbsp;报名了&nbsp;&nbsp;&nbsp;&nbsp; <span><a href='#'>【广西以西·荞麦花开】爆款线路！元旦：广西南宁-明仕田园-德天大瀑布-靖西鹅泉-更望湖荞麦花，4天3 夜深度之旅！...</a></span> 137人已报名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>")
  var $p4=$("<p>今天 19:39 &nbsp;<span> 兔子快跑 </span> &nbsp;报名了&nbsp;&nbsp;&nbsp;&nbsp; <span><a href='#'>【征途·豺狗狼尖】12.1-2，强驴之旅，勇登笔架峰，穿越豺狗狼尖，俯瞰家朋地貌，2018收官线！</a></span> 102人已报名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>")
  var p=[$p1,$p2,$p3,$p4]
  var i=0;
  setInterval(
      function() {
          p[i].replaceAll(".b_floor0>p");
          i++;
          if (i==p.length)
              i=0;
      }
  ,2000)


var imgs=$(".m_unit_slide>.slider>img");
var lis=$(".m_unit_slide>.slider>ul>li");
var m=0;
function task(){
    imgs.eq(m).addClass("show").siblings().removeClass("show");
    lis.eq(m).addClass("bgorange").siblings().removeClass("bgorange");
    m++;
    if(m==imgs.length)
    m=0;
}
//实现图片自动轮播
var timer=setInterval(task,4000);
//鼠标移入停止轮播鼠标移出时
console.log($(".slider"))
$(".slider").hover(function(){ 
    clearInterval(timer);
},function(){
    timer=setInterval(task,4000);
})
//点击小圆点跳转到小圆点所在的位置
lis.on("click",function(){
    m=$(this).index();
    imgs.eq(m).addClass("show").siblings().removeClass("show");
    lis.eq(m).addClass("bgorange").siblings().removeClass("bgorange");

})

//摄影遮罩层
$(".m-unit-1>div:first-child>div,.m-unit-2>div>div,.m-unit-3>div>div").hide();
$(".m-unit-1>div:first-child").hover(
    function(){$(this).children().last().show()},
    function(){$(this).children().last().hide()}
)
$(".m-unit-2>div").hover(
    function(){$(this).children().last().show() },
    function(){$(this).children().last().hide()}
)
$(".m-unit-3>div").hover(
    function(){$(this).children().last().show() },
    function(){$(this).children().last().hide()}
)
$(document).scroll(function() {
            var scroH = $(document).scrollTop();  //滚动高度
            var viewH = $(window).height();  //可见高度 
            var contentH = $(document).height();  //内容高度
           
            if(scroH<500 || contentH - (scroH + viewH) <= 300){  //距离顶部大于100px距离底部高度小于300px
                $("#j_m_nav").hide();
            }else{
                $("#j_m_nav").show();
            }
            if (scroH>=500 && scroH<950 ){ 
                 $("#j_m_nav>li:eq(0)>a").addClass("show");
            }else{
                $("#j_m_nav>li:eq(0)>a").removeClass("show");
            }  
            if (scroH>=950 && scroH<1300 ){ 
                $("#j_m_nav>li:eq(1)>a").addClass("show");
           }else{
               $("#j_m_nav>li:eq(1)>a").removeClass("show");
           } 
           if (scroH>=1300 && scroH<2200 ){ 
            $("#j_m_nav>li:eq(2)>a").addClass("show");
          }else{
           $("#j_m_nav>li:eq(2)>a").removeClass("show");
          } 
          if (scroH>=2200 && scroH<3100 ){ 
            $("#j_m_nav>li:eq(3)>a").addClass("show");
          }else{
           $("#j_m_nav>li:eq(3)>a").removeClass("show");
          } 
          if (scroH>=3100 && scroH<4100 ){ 
            $("#j_m_nav>li:eq(4)>a").addClass("show");
          }else{
           $("#j_m_nav>li:eq(4)>a").removeClass("show");
          } 
          if (scroH>=4100 && scroH<4540 ){ 
            $("#j_m_nav>li:eq(5)>a").addClass("show");
          }else{
           $("#j_m_nav>li:eq(5)>a").removeClass("show");
          } 
          if (scroH>=4540 && scroH<5200 ){ 
            $("#j_m_nav>li:eq(6)>a").addClass("show");
          }else{
           $("#j_m_nav>li:eq(6)>a").removeClass("show");
          } 

            
     
        });
