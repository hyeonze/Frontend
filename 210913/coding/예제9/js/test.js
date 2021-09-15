/* test.js */
$(document).ready(function(){
    $("body,html").stop().animate({"scrollTop":0},1500,"swing");//새로고침시 맨위로

    $(window).scroll(function(){//스크롤 움직였을 때
        var scroll = Math.floor($(this).scrollTop());//현재 스크롤 위치값
        $("h1").text(scroll);
        // section > article:nth-child(1){transform: translateZ(0px);}
        // section > article:nth-child(2){transform: translateZ(-5000px);}
        // section > article:nth-child(3){transform: translateZ(-10000px);}
        // section > article:nth-child(4){transform: translateZ(-15000px);}
        // section > article:nth-child(5){transform: translateZ(-20000px);}
        $("section > article").eq(0).css({"transform":"translateZ(" + (0 + scroll) + "px)"});
        $("section > article").eq(1).css({"transform":"translateZ(" + (-5000 + scroll) + "px)"});
        $("section > article").eq(2).css({"transform":"translateZ(" + (-10000 + scroll) + "px)"});
        $("section > article").eq(3).css({"transform":"translateZ(" + (-15000 + scroll) + "px)"});
        $("section > article").eq(4).css({"transform":"translateZ(" + (-20000 + scroll) + "px)"});

        if(scroll >= 0 && scroll < 5000){//box1
            $(".gnb li").removeClass("on");
            $(".gnb li").eq(0).addClass("on");
            $("article").removeClass("on");
            $("article").eq(0).addClass("on");
        }
        if(scroll >= 5000 && scroll < 10000){//box2
            $(".gnb li").removeClass("on");
            $(".gnb li").eq(1).addClass("on");
            $("article").removeClass("on");
            $("article").eq(1).addClass("on");
        }
        if(scroll >= 10000 && scroll < 15000){//box3
            $(".gnb li").removeClass("on");
            $(".gnb li").eq(2).addClass("on");
            $("article").removeClass("on");
            $("article").eq(2).addClass("on");
        }
        if(scroll >= 15000 && scroll < 20000){//box4
            $(".gnb li").removeClass("on");
            $(".gnb li").eq(3).addClass("on");
            $("article").removeClass("on");
            $("article").eq(3).addClass("on");
        }
        if(scroll >= 20000 && scroll < 25000){//box5
            $(".gnb li").removeClass("on");
            $(".gnb li").eq(4).addClass("on");
            $("article").removeClass("on");
            $("article").eq(4).addClass("on");
        }
    });//window

    $(".gnb li").click(function(){
        var a = $(this).index();//몇번째 li(인덱스번호)
        $("body,html").stop().animate({"scrollTop":5000 * a},1500,"swing");
    });
});