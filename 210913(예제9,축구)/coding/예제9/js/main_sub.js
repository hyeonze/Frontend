/* main_sub.js */
$(document).ready(function(){
    //1. 마우스 움직일 때 사진 움직이게
    $("section").mousemove(function(e){
        var posX = e.pageX;
        var posY = e.pageY;
        $(".obj11").css({"left":-270-(posX/30),"bottom":-100-(posY/30)});
        $(".obj12").css({"right":-593+(posX/20),"top":-85+(posY/20)});
        $(".obj13").css({"left":-100+(posX/20),"bottom":20+(posY/20)});

        $(".obj21").css({"right":-710-(posX/60),"bottom":-420-(posY/60)});
        $(".obj23").css({"right":-50+(posX/40),"bottom":-100+(posY/40)});

        $(".obj31").css({"right":110-(posX/90),"bottom":70-(posY/90)});
        $(".obj33").css({"left":100+(posX/60),"bottom":-160+(posY/60)});

        $(".obj41").css({"left":350-(posX/120),"bottom":-150-(posY/120)});
        $(".obj42").css({"right":167+(posX/80),"top":-255+(posY/80)});
        $(".obj43").css({"right":-100+(posX/80),"bottom":-120+(posY/80)});

        $(".obj51").css({"left":-100-(posX/200),"bottom":-290-(posY/200)});
        $(".obj52").css({"right":30+(posX/150),"top":170+(posY/150)});
        $(".obj53").css({"left":-30+(posX/150),"bottom":0+(posY/150)});
    });

    //2. 스크롤내리면 아티클 앞으로 && 아티클과 li 'on'
    $("body,html").stop().animate({"scrollTop":0},1500,"swing");//새로고침시 맨위로

    $(window).scroll(function(){//스크롤 움직였을 때, for문으로 바꾸기(sol참고)
        var scroll = Math.floor($(this).scrollTop());//현재 스크롤 위치값
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
            $(".snb li").removeClass("on");
            $(".snb li").eq(0).addClass("on");
            $("article").removeClass("on");
            $("article").eq(0).addClass("on");
        }
        if(scroll >= 5000 && scroll < 10000){//box2
            $(".snb li").removeClass("on");
            $(".snb li").eq(1).addClass("on");
            $("article").removeClass("on");
            $("article").eq(1).addClass("on");
        }
        if(scroll >= 10000 && scroll < 15000){//box3
            $(".snb li").removeClass("on");
            $(".snb li").eq(2).addClass("on");
            $("article").removeClass("on");
            $("article").eq(2).addClass("on");
        }
        if(scroll >= 15000 && scroll < 20000){//box4
            $(".snb li").removeClass("on");
            $(".snb li").eq(3).addClass("on");
            $("article").removeClass("on");
            $("article").eq(3).addClass("on");
        }
        if(scroll >= 20000 && scroll < 25000){//box5
            $(".snb li").removeClass("on");
            $(".snb li").eq(4).addClass("on");
            $("article").removeClass("on");
            $("article").eq(4).addClass("on");
        }
    });//window

    //3. li클릭시 스크롤 이동
    $(".snb li").click(function(){
        var a = $(this).index();//몇번째 li(인덱스번호)
        $("body,html").stop().animate({"scrollTop":5000 * a},1500,"swing");
    });
});