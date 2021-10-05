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

    /* container */
    /* content1 */
    //.articleMenu
    $(".content1 div.articleMenu ul li:first-of-type").addClass("on");
        $(".content1 div.articleMenu ul li:first-of-type").click(function(e){
        e.preventDefault();
        $(".content1").css({"background-color":"#fdf08a"});
        $(".content1 div.articleMenu ul li:first-of-type").addClass("on");
        $(".content1 div.articleMenu ul li:nth-of-type(2)").removeClass("on");
        $(".content1 div.articleMenu ul li:last-of-type").removeClass("on");
        $(".content1 .article1").css({"display":"block"});
        $(".content1 .article2").css({"display":"none"});
        $(".content1 .article3").css({"display":"none"});
    });
    $(".content1 div.articleMenu ul li:nth-of-type(2)").click(function(e){
        e.preventDefault();
        $(".content1").css({"background-color":"#ffcc4d"});
        $(".content1 div.articleMenu ul li:first-of-type").removeClass("on");
        $(".content1 div.articleMenu ul li:nth-of-type(2)").addClass("on");
        $(".content1 div.articleMenu ul li:last-of-type").removeClass("on");
        $(".content1 .article1").css({"display":"none"});
        $(".content1 .article2").css({"display":"block"});
        $(".content1 .article3").css({"display":"none"});
    });
    $(".content1 div.articleMenu ul li:last-of-type").click(function(e){
        e.preventDefault();
        $(".content1").css({"background-color":"#fdf08a"});
        $(".content1 div.articleMenu ul li:first-of-type").removeClass("on");
        $(".content1 div.articleMenu ul li:nth-of-type(2)").removeClass("on");
        $(".content1 div.articleMenu ul li:last-of-type").addClass("on");
        $(".content1 .article1").css({"display":"none"});
        $(".content1 .article2").css({"display":"none"});
        $(".content1 .article3").css({"display":"block"});
    });
    /* content2 */
    // .main_list
    $(".main_list ul > li > ul > li > a > img").bind("mouseover focus",function(){
        $(this).attr("src", $(this).attr("src").replace(".png", "_over.png"));
    });
    $(".main_list ul > li > ul > li > a > img").bind("mouseout blur",function(){
        $(this).attr("src", $(this).attr("src").replace("_over.png", ".png"));
    });
    //.slide_arr
    var $bnnNum = 0;
    $(".slide_arr > div:first-of-type").click(function(e){
        e.preventDefault();
        if($bnnNum < 4){
            $bnnNum++;
            $width = 350;
            $(".main_list > ul").stop().animate({"left":-$bnnNum * $width + 270},300,"linear");
        }
    });
    $(".slide_arr > div:last-of-type").click(function(e){
        e.preventDefault();
        if($bnnNum <= 4 && $bnnNum > 0){
            $bnnNum--;
            $width = 350;
            $(".main_list > ul").stop().animate({"left":$bnnNum * (4 - $width) + 270},300,"linear");
        }
    });
    /* content3 */
    //.mainlist
    $(".content3 > div.main_list > dl > dd").bind("mouseover focus",function(){
        var i = $(this).parent().index();
        $(".main_list>dl:nth-of-type("+(i+1)+")>dt").stop().animate({"opacity":"1","top":"273"},300,"linear");
    });
    $(".content3 > div.main_list > dl > dd").bind("mouseout blur",function(){
        var i = $(this).parent().index();
        $(".main_list>dl:nth-of-type("+(i+1)+")>dt").stop().animate({"opacity":"0","top":"467"},300,"linear");
    });
});