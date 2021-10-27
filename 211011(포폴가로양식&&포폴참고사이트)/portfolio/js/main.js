/* main.js */
$(document).ready(function(){

    //윈도우 시작하면 화면 맨위로 이동
    // $("body,html").stop().animate({"scrollTop":0},1500,"swing");

    var wt = $(window).width();
    var ht = $(window).height();
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
    });

    //content2
    var $btn_content2 = document.getElementsByClassName("btn_content2");
    var $article1 = document.getElementsByClassName("article1");
    var $article2 = document.getElementsByClassName("article2");

    $btn_content2[0].onclick = function(e){
        e.preventDefault();
        this.firstChild.style.background = "rgba(72, 80, 255, 1)";
        $btn_content2[1].firstChild.style.background = "rgba(72, 80, 255, 0.5)";
        $article1[0].style.display = "block";
        $article2[0].style.display = "none";
    }
    $btn_content2[1].onclick = function(e){
        e.preventDefault();
        this.firstChild.style.background = "rgba(72, 80, 255, 1)";
        $btn_content2[0].firstChild.style.background = "rgba(72, 80, 255, 0.5)";
        $article1[0].style.display = "none";
        $article2[0].style.display = "block";
    }
});