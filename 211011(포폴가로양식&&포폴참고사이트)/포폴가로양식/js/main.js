/* main.js */
$(document).ready(function(){

    //윈도우 시작하면 화면 맨위로 이동
    $("body,html").stop().animate({"scrollTop":0},1500,"swing");

    var wt = $(window).width();
    $("#container > div").width(wt);//뷰포트(css)로 해도 됨

    //container 가로크기 만큼 body의 높이값 지정
    var Length = $("#container > div").length;//10
    var containerWid = wt * Length;
    $("body").height(containerWid);

    var start = setTimeout(function(){//맨처음 시작
        $("#content1 > section").addClass("on");
    },500);

    var lastScrollTop = 0;//마지막 스크롤값

    //스크롤이 움직일때
    $(window).scroll(function(){

        //var scroll = $(window).scrollTop();//현재scroll위치값
        //$("#container").css({"transform":"translateX(-" + scroll + "px)"});//화면비 때문에 오른쪽에 여백이 생김

        var winW = $(window).width();
        var winH = $(window).height();

        var H = containerWid - winH;
        var W = containerWid - winW;
        var R = W / H;

        var scrollTop = $(window).scrollTop();//현재scroll위치값
        var scrollR = scrollTop * R;//가로세로비율

        $("#container").css({"transform":"translateX(-" + scrollR + "px)"});//가로세로 비율만큼 스크롤이동

        //캐릭터 움직이기
        if(scrollTop > lastScrollTop){
            //스크롤 내릴때(현재>과거)
            //현재 스크롤값 scroll이 이전스크롤값 lastScroll 보다 크냐
            $(".character").removeClass("left");
            $(".character").addClass("on");
        }else{
            //스크롤 올릴때
            //현재 스크롤값 scroll이 이전스크롤값 lastScroll 보다 작다
            $(".character").addClass("left");
            $(".character").addClass("on");  
        }

        lastScrollTop = scrollTop;//현재값이 과거값으로

        //스크롤이 멈추면 0.5초 뒤에 애니메이션이 멈춰라
        clearTimeout($.data(this,"scrollCheck"));

        $.data(this,"scrollCheck",setTimeout(function(){
            $(".character").removeClass("on");
        },500));

        //var content = $("#container > div");
        //content1
        if(scrollTop >= wt * 0){//또는 if(scrollTop >= content.eq(0).offset().left)

            //내용물 움직임 시작
            $("#content1 > section").addClass("on");

        }else{//움직임 취소
            $("#content1 > section").removeClass("on");
        }
        
        //content2
        if(scrollTop >= wt * 1){

            //내용물 움직임 시작
            $("#content2 > section").addClass("on");
        }else{//움직임 취소
            $("#content2 > section").removeClass("on");
        }

        //content3
        if(scrollTop >= wt * 2){

            //내용물 움직임 시작
            $("#content3 > section").addClass("on");
        }else{//움직임 취소
            $("#content3 > section").removeClass("on");
        }

    });//scroll

    $(document).keydown(function(e){//이벤트객체
        if(e.keyCode == 39){//오른쪽방향키
            var scrollNow = $(document).scrollTop();
            $(window).scrollTop(scrollNow + 50);
        }

        if(e.keyCode == 37){
            var scrollNow = $(document).scrollTop();
            $(window).scrollTop(scrollNow - 50);
        }
    })
});