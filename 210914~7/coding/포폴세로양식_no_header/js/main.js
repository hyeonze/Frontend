/* main.js */
$(document).ready(function(){
    //윈도우 시작시 화면 맨위로 이동
    $("body,html").stop().animate({"scrollTop":0},1500,"swing");

    //브라우저의 높이값을 div의 높이값으로
    var ht = $(window).height();
    $("#container > div").height(ht);
    //리사이즈
    $(window).resize(function(){
        var ht = $(window).height();
        $("#container > div").height(ht);    
    });

    //윈도우 시작시 초기실행(class on), 노헤더버전도추가하기
    var start = setTimeout(function(){
        $("#content1 > section").addClass("on");
    },500);

    //class on
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();//현재scroll위치값
        var ht = $(window).height();
        //content1
        if((scroll >= 0 * ht )&& (scroll < 1 * ht)){
            $(".gnb li a").removeClass("on");
            $(".gnb li a").eq(0).addClass("on");
            $(".quick li a").removeClass("on");
            $(".quick li a").eq(0).addClass("on");
            //내용물 움직임 시작
            $("#content1 > section").addClass("on");
        }else{//움직임 취소
            $("#content1 > section").removeClass("on");
        }
        //content2
        if((scroll >= 1 * ht )&& (scroll < 2 * ht)){
            $(".gnb li a").removeClass("on");
            $(".gnb li a").eq(1).addClass("on");
            $(".quick li a").removeClass("on");
            $(".quick li a").eq(1).addClass("on");
            //내용물 움직임 시작
            $("#content2 > section").addClass("on");
        }else{//움직임 취소
            $("#content2 > section").removeClass("on");
        }
        //content3
        if((scroll >= 2 * ht )&& (scroll < 3 * ht)){
            $(".gnb li a").removeClass("on");
            $(".gnb li a").eq(2).addClass("on");
            $(".quick li a").removeClass("on");
            $(".quick li a").eq(2).addClass("on");
            //내용물 움직임 시작
            $("#content3 > section").addClass("on");
        }else{//움직임 취소
            $("#content3 > section").removeClass("on");
        }
        //content4
        if((scroll >= 3 * ht )&& (scroll < 4 * ht)){
            $(".gnb li a").removeClass("on");
            $(".gnb li a").eq(3).addClass("on");
            $(".quick li a").removeClass("on");
            $(".quick li a").eq(3).addClass("on");
            //내용물 움직임 시작
            $("#content4 > section").addClass("on");
        }else{//움직임 취소
            $("#content4 > section").removeClass("on");
        }
    });//scroll

    //header 없는 경우
    // $("#gnb li,#quick li").click(function(e){
    //     e.preventDefault();
    //     var i = $(this).index();
    //     var ht = $(window).height();
    //     $("html,body").stop().animate({"scrollTop":i * ht},1400);
    // });
});