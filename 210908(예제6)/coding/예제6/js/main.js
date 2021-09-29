/* main.js */
$(document).ready(function(){
    $("article").mouseover(function(){
        var vid = $(this).find("video").get(0);//첫번째 동영상 참조
        vid.currentTime = 0;//동영상의 재생위치를 처음(0)으로 설정
        vid.play();//동영상을 재생

        //일시 정지하기 .pause();
        //불러오기 .load();

        $("article").removeClass("on");
        $(this).addClass("on");

        /* JQuery로 애니메이션 구현할 경우(참고)
        $(this).stop().animate({"width":"35%"},1000,"linear",function(){
            $(this).children("h3").stop().animate({"right":"10px"},400,"linear");
            $(this).children("p").stop().animate({"right":"10px"},800,"linear");
        });
        $(this).children("video").stop().animate({"opacity":"0.9"},2000,"linear");
        */
    });

    $("article").mouseover(function(){
        $("article").removeClass("on");
        $(this).addClass("on");

        /* JQuery로 애니메이션 구현할 경우
        $(this).stop().animate({"width":"12%"},1000,"linear",function(){
            $(this).children("h3").stop().animate({"right":"-310px"},400,"linear");
            $(this).children("p").stop().animate({"right":"-310px"},800,"linear");
        });
        $(this).children("video").stop().animate({"opacity":"0"},2000,"linear");
        */
    });

    $("article").mouseout(function(){
        $("article").removeClass("on");
    });
});