/* main.js */
$(document).ready(function(){
    $("html, body").stop().animate({scrollTop:0},500,"linear");

    /* 고객센터 */
    $("dl.topMenu > dd").eq(4).click(function(){
        $(this).toggleClass("on");
    });

    /* 주메뉴 */
    $(".gnb>ul>li>a").bind("mouseover focus",function(){
        if($("form.srch").is(":visible")){//hasClass와 비교
            $("form.srch").removeClass("on");
            $(".srch_open").removeClass("on");
        }

        if($("dl.topMenu > dd").eq(4).hasClass("on")){//:visible과 비교
            $("dl.topMenu > dd").eq(4).removeClass("on")
        }

        $(".header_wrap").animate({"height":"445px"},300,"linear",function(){
            $(".gnb>ul>li>ul").css("display","block");
        });
    });

    $(".gnb").bind("mouseleave blur",function(){
        $(".header_wrap").animate({"height":"120px"},300,"linear",function(){
            $(".gnb>ul>li>ul").css({"display":"none"});
        });
    });

    /* 검색열기 */
    $("span.srch_open").click(function(){
        $(this).toggleClass("on");
        $("form.srch").toggleClass("on");
    });

    /* 로그인 이미지 */
    var appear = "";
    for(var i = 0; i < 57; i++){
        if(i<10){
            appear += "<img src='images/appear/appear_0000" + i + ".png' alt'로그인버튼" + i + "' />";
        }else{
            appear += "<img src='images/appear/appear_000" + i + ".png' alt'로그인버튼" + i + "' />";
        }
    }
    $("a.appear").html(appear);

    var loop = "";
    for(i = 0; i < 82; i++){
        if(i < 10){
            loop += "<img src='images/loop/loop_0000" + i + ".png' alt='로그인버튼" + i +"'>";
        }else{
            loop += "<img src='images/loop/loop_000" + i + ".png' alt='로그인버튼" + i +"'>";
        }
    }
$("a.loop").html(loop);

    /* 로그인 애니메이션 */
    for(var k = 0; k < 57; k++){
        $(".appear>img").eq(k).css({"animation":"ani 2.85s linear " + 0.05 * k + "s 1 normal"});
    }

    for(var j = 0; j < 82; j++){
        $(".loop>img").eq(j).css({"animation":"ani 4.1s linear " + (2.85 + 0.05 * j) + "s infinite normal"});
    }
/*
    //content1
    $("선택자").hover(function(){
        //마우스를 올렸을때
    },function(){
        //마우스를 땟을때
    });
*/


});