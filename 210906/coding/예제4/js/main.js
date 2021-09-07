/* main.js */
$(document).ready(function(){
    var ht = $(window).height();//윈도우 높이값
    $("section").height(ht);

    $(window).resize(function(){//리사이즈되면 다시 맞춤
        var ht = $(window).height();
        $("section").height(ht);
    });

    $(".gnb li").click(function(){
        var i = $(this).index();
        var ht = $(window).height();
        var nowTop = i * ht;
        $("html,body").stop().animate({"scrollTop":nowTop},1400);//scrollTop:스크롤위치
    });

    //마우스 움직일 때 꽃잎 움직이게
    //js : document.onmousemove = fcuntion(e){}
    $("section").mousemove(function(e){//이벤트객체
        var posX = e.pageX;//마우스커서의 x축위치 저장
        var posY = e.pageY;//마우스커서의 y축위치 저장
        //console.log(posX);//console.log(posY);

        //-같은방향,+반대방향
        $(".obj11").css({"right":20-(posX/30),"bottom":20-(posY/30)});
        $(".obj12").css({"right":130+(posX/20),"bottom":-40+(posY/20)});
        $(".obj13").css({"right":60+(posX/20),"bottom":180+(posY/20)});

        $(".obj21").css({"right":-180-(posX/30),"bottom":-480-(posY/30)});
        $(".obj22").css({"right":130+(posX/50),"bottom":-40+(posY/50)});

        $(".obj31").css({"right":280-(posX/30),"bottom":30-(posY/30)});
        $(".obj32").css({"right":110+(posX/20),"bottom":-270+(posY/20)});
        $(".obj33").css({"right":-70+(posX/20),"bottom":-130+(posY/20)});

        $(".obj41").css({"right":20-(posX/30),"bottom":-120-(posY/30)});
        $(".obj42").css({"right":0+(posX/20),"bottom":-180+(posY/20)});
    });//mousemove

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();//현재 scrollTop 값
        //console.log(scroll);
        var ht = $(window).height();
        /*아래 for문과 동일
        if (scroll >= 0 * ht && scroll < 1 * ht){
            $(".gnb li").removeClass("on");
            $(".gnb li").eq(0).addClass("on");
        }
        if (scroll >= 1 * ht && scroll < 2 * ht){
            $(".gnb li").removeClass("on");
            $(".gnb li").eq(1).addClass("on");
        }
        if (scroll >= 2 * ht && scroll < 3 * ht){
            $(".gnb li").removeClass("on");
            $(".gnb li").eq(2).addClass("on");
        }
        if (scroll >= 3 * ht && scroll < 4 * ht){
            $(".gnb li").removeClass("on");
            $(".gnb li").eq(3).addClass("on");
        }
        */
        for(var i = 0; i < 4; i++){
            if (scroll >= ht * i && scroll < ht * (i + 1)){
                $(".gnb li").removeClass("on");
                $(".gnb li").eq(i).addClass("on");
            }
        }
    });//scroll

    //원스크롤 페이지이동, jquery.mousewheel.min.js 필요
    $("section").mousewheel(function(event,delta){//delta:마우스휠 올렸냐(양수) 내렸냐(음수)
        //마우스휠을 올렸을 때
        if(delta > 0){
            var prev = $(this).prev().offset().top;//offset().top 섹션위치값
            $("html,body").stop().animate({"scrollTop":prev},1400,"linear");
        //마우스휠을 내렸을 때
        }else if(delta < 0){
            var next = $(this).next().offset().top;
            $("html,body").stop().animate({"scrollTop":next},1400,"linear");
        }
    });
});