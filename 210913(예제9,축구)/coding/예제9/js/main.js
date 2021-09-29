/* main_sol.js */
$(document).ready(function(){
    $("body").mousemove(function(e){
        //1.움직이기
        var posX = e.pageX / 100;
        var posY = e.pageY / 150;

        // .obj11{position: absolute;left:-270px;bottom: -100px;}
        // .obj12{position: absolute;right:-593px;top:-85px;}
        // .obj13{position: absolute;left:-100px;bottom: 20px;}
        // -같은방향 +반대방향
        $(".obj11").css({"left":-270-posX,"bottom":-100-posY});
        $(".obj12").css({"right":-593+posX,"bottom":-85+posY});
        $(".obj13").css({"left":-100+posX,"bottom":20+posY});

        $(".obj21").css({"right":-710-posX,"bottom":-420-posY});
        $(".obj23").css({"right":-50+posX,"bottom":-100+posY});

        $(".obj31").css({"right":-110-posX,"bottom":70-posY});
        $(".obj33").css({"left":100-posX,"bottom":-160+posY});

        $(".obj41").css({"left":350+posX,"bottom":-150-posY});
        $(".obj42").css({"right":167+posX,"bottom":-255-posY});
        $(".obj43").css({"right":-100+posX,"bottom":-120+posY});

        $(".obj51").css({"left":-100-posX,"bottom":-290-posY});
        $(".obj52").css({"right":30+posX,"top":170-posY});
        $(".obj53").css({"left":-30+posX,"bottom":0-posY});
    });

    //2.새로고침하면 맨위로 올라가기
    $("body,html").stop().animate({"scrollTop":0},1500,"swing");

    //3.스크롤내리면 앞뒤 이동
    $(window).scroll(function(){
        var scroll = Math.floor($(this).scrollTop());//현재 스크롤 위치값
        // 아래 for문과 동일
        // section > article:nth-child(1){transform: translateZ(0px);}
        // section > article:nth-child(2){transform: translateZ(-5000px);}
        // section > article:nth-child(3){transform: translateZ(-10000px);}
        // section > article:nth-child(4){transform: translateZ(-15000px);}
        // section > article:nth-child(5){transform: translateZ(-20000px);}

        // $("section > article").eq(0).css({"transform":"translateZ(" + (0 + scroll) + "px)"});
        // $("section > article").eq(1).css({"transform":"translateZ(" + (-5000 + scroll) + "px)"});
        // $("section > article").eq(2).css({"transform":"translateZ(" + (-10000 + scroll) + "px)"});
        // $("section > article").eq(3).css({"transform":"translateZ(" + (-15000 + scroll) + "px)"});
        // $("section > article").eq(4).css({"transform":"translateZ(" + (-20000 + scroll) + "px)"});

        // if(scroll >= 0 && scroll < 5000){//box1
        //     $(".snb li").removeClass("on");
        //     $(".snb li").eq(0).addClass("on");
        //     $("article").removeClass("on");
        //     $("article").eq(0).addClass("on");
        // }
        // if(scroll >= 5000 && scroll < 10000){//box2
        //     $(".snb li").removeClass("on");
        //     $(".snb li").eq(1).addClass("on");
        //     $("article").removeClass("on");
        //     $("article").eq(1).addClass("on");
        // }
        // if(scroll >= 10000 && scroll < 15000){//box3
        //     $(".snb li").removeClass("on");
        //     $(".snb li").eq(2).addClass("on");
        //     $("article").removeClass("on");
        //     $("article").eq(2).addClass("on");
        // }
        // if(scroll >= 15000 && scroll < 20000){//box4
        //     $(".snb li").removeClass("on");
        //     $(".snb li").eq(3).addClass("on");
        //     $("article").removeClass("on");
        //     $("article").eq(3).addClass("on");
        // }
        // if(scroll >= 20000 && scroll < 25000){//box5
        //     $(".snb li").removeClass("on");
        //     $(".snb li").eq(4).addClass("on");
        //     $("article").removeClass("on");
        //     $("article").eq(4).addClass("on");
        // }
        for(var i = 0; i < 5; i++){
            $("section > article").eq(i).css({"transform":"translateZ(" + ((-5000 * i) + scroll) + "px)"});
            if(scroll >= i * 5000 && scroll < (i + 1) * 5000){
                $(".snb li").removeClass("on");
                $(".snb li").eq(i).addClass("on");
                $("article").removeClass("on");
                $("article").eq(i).addClass("on");    
            }
        }//for
    });//scroll

    //4.li클릭시 스크를이동
    $(".snb li").click(function(){
        var a = $(this).index();//몇번째 li
        $("body,html").stop().animate({"scrollTop":5000 * a},1500,"swing");
    });
});