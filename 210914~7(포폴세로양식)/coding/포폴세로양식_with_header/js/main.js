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

    //윈도우 시작하면 퀵메뉴 위치(초기)
    var t = $(window).height() / 2 - $("#quick").height() / 2;//세로중앙
    $("#quick").stop().animate({"top":t},700,"linear");

    //윈도우 시작시 초기실행(class on), 노헤더버전도추가하기
    var start = setTimeout(function(){
        $("#content1 > section").addClass("on");
    },500);

    //스크롤시 퀵메뉴 위치 유지 && class on
    $(window).scroll(function(){
        var t = $(this).scrollTop() + $(window).height() / 2 - $("#quick").height() / 2;//세로중앙
        $("#quick").stop().animate({"top":t},700,"linear");

        var scroll = $(this).scrollTop();//현재scroll위치값
        var content = $("#container > div");

        //content1
        if(scroll >= content.eq(0).offset().top - $("#container").offset().top){//content탑값에서 헤더빼준값
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
        if(scroll >= content.eq(1).offset().top - $("#container").offset().top){
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
        if(scroll >= content.eq(2).offset().top - $("#container").offset().top){
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
        if(scroll >= content.eq(3).offset().top - $("#container").offset().top){
            $(".gnb li a").removeClass("on");
            $(".gnb li a").eq(3).addClass("on");
            $(".quick li a").removeClass("on");
            $(".quick li a").eq(3).addClass("on");
            //내용물 움직임 시작
            $("#content4 > section").addClass("on");
        }else{//움직임 취소
            $("#content4 > section").removeClass("on");
        }

        //한페이지씩 이동
        $("#container > div").mousewheel(function(event,delta){
            //휠을 올렸을때
            if(delta > 0){
                var prev = $(this).prev().offset().top - $("#container").offset().top;
                $("html,body").stop().animate({"scrollTop":prev},1400,"linear");
            //휠을 내렸을때
            }else if(delta < 0){
                var next = $(this).next().offset().top - $("#container").offset().top;
                $("html,body").stop().animate({"scrollTop":next},1400,"linear");  
            }
        });
    });//scroll

	//상단메뉴 높이가 있는 경우
	$(".gnb li,.quick li").click(function(){
		var i = $(this).index();//0부터 시작 
		var target = $("#container div").eq(i).offset().top-$("#container").offset().top;//헤더값 소거
		$("body,html").stop().animate({"scrollTop":target },1500,"swing");	
	});
    //header 없는 경우
    // $("#gnb li,#quick li").click(function(e){
    //     e.preventDefault();
    //     var i = $(this).index();
    //     var ht = $(window).height();
    //     $("html,body").stop().animate({"scrollTop":i * ht},1400);
    // });

});