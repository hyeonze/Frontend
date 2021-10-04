$(document).ready(function(){
    /* header */
    //전체메뉴버튼
    $(".btn_allMenu").click(function(){
        $(".allMenu_box").stop().animate({"left":"0"},500,"swing");
        setTimeout(function(){
            $(".allMenu_box>ul>li>ul").eq(0).stop().animate({"height":"520"},500,"linear");
            $(".allMenu_box>ul>li>ul").eq(1).stop().animate({"height":"520"},600,"linear");
            $(".allMenu_box>ul>li>ul").eq(2).stop().animate({"height":"520"},700,"linear");
            $(".allMenu_box>ul>li>ul").eq(3).stop().animate({"height":"520"},800,"linear");
            $(".allMenu_box>ul>li>ul").eq(4).stop().animate({"height":"520"},900,"linear");
            $(".allMenu_box>ul>li>ul").eq(5).stop().animate({"height":"520"},1000,"linear");
            $(".allMenu_box > ul > li > ul > li").stop().animate({"opacity":"1"},500,"linear");
        },500);
    });
    $(".btn_colse").click(function(){
        $(".allMenu_box").stop().animate({"left":"-1920"},500,"swing");
        setTimeout(function(){
            $(".allMenu_box>ul>li>ul").eq(0).stop().animate({"height":"0"},500,"linear");
            $(".allMenu_box>ul>li>ul").eq(1).stop().animate({"height":"0"},600,"linear");
            $(".allMenu_box>ul>li>ul").eq(2).stop().animate({"height":"0"},700,"linear");
            $(".allMenu_box>ul>li>ul").eq(3).stop().animate({"height":"0"},800,"linear");
            $(".allMenu_box>ul>li>ul").eq(4).stop().animate({"height":"0"},900,"linear");
            $(".allMenu_box>ul>li>ul").eq(5).stop().animate({"height":"0"},1000,"linear");
            $(".allMenu_box > ul > li > ul > li").stop().animate({"opacity":"0"},500,"linear");
        },500);
    });

    //.gnb하위메뉴
    $("nav.gnb > ul > li").eq(0).bind("mouseover focus",function(){
        $(".header_inner").stop().animate({"height":"380"},500,"linear");
        $(".header_inner").css({"background":"#fff url(../images/bg_gnb01.jpg) no-repeat 740px 80px"});
        $(".header_wrap").css({"display":"block"});
    });
    $("nav.gnb > ul > li").eq(0).bind("mouseout blur",function(){
        $(".header_inner").stop().animate({"height":"80"},500,"linear");
        $(".header_wrap").css({"display":"none"});
    });
    $("nav.gnb > ul > li").eq(2).bind("mouseover focus",function(){
        $(".header_inner").stop().animate({"height":"380"},500,"linear");
        $(".header_inner").css({"background":"#fff url(../images/bg_gnb03.jpg) no-repeat 740px 80px"});
        $(".header_wrap").css({"display":"block"});
    });
    $("nav.gnb > ul > li").eq(2).bind("mouseout blur",function(){
        $(".header_inner").stop().animate({"height":"80"},500,"linear");
        $(".header_wrap").css({"display":"none"});
    });
    $("nav.gnb > ul > li").eq(3).bind("mouseover focus",function(){
        $(".header_inner").stop().animate({"height":"380"},500,"linear");
        $(".header_inner").css({"background":"#fff url(../images/bg_gnb04.jpg) no-repeat 740px 80px"});
        $(".header_wrap").css({"display":"block"});
    });
    $("nav.gnb > ul > li").eq(3).bind("mouseout blur",function(){
        $(".header_inner").stop().animate({"height":"80"},500,"linear");
        $(".header_wrap").css({"display":"none"});
    });
    $("nav.gnb > ul > li").eq(4).bind("mouseover focus",function(){
        $(".header_inner").stop().animate({"height":"380"},500,"linear");
        $(".header_inner").css({"background":"#fff url(../images/bg_gnb05.jpg) no-repeat 740px 80px"});
        $(".header_wrap").css({"display":"block"});
    });
    $("nav.gnb > ul > li").eq(4).bind("mouseout blur",function(){
        $(".header_inner").stop().animate({"height":"80"},500,"linear");
        $(".header_wrap").css({"display":"none"});
    });
});