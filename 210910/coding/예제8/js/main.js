/* main.js */
$(document).ready(function(){
    /* 아티클 갯수변경 대응 */
    //body의 height값 생성 - article의 가로값 * article 개수
    //section의 width값 생성 - body의 height값 + 600
    var numAc = $("article").size();//아티클 개수
    var widSec = 200 * numAc;//아티클 총 길이
    $("body").height(widSec);
    $("section").width(widSec + 600);

    //스크롤맨마지막에 가있게
    $("html,body").animate({"scrollTop":widSec},2000);

    $("article > h2").click(function(e){
        e.preventDefault();//링크이동방지
        $("article").removeClass("on");
        $(this).parent().addClass("on");

        //큰그림 보이게(h2 > a의 href값을 p > img의 src값으로)
        var img = $(this).children("a").attr("href");//href속성값반환
        $(this).siblings("p").children("img").attr("src",img);
    });

    /* close */
    $("span").click(function(){
        $("article").removeClass("on");
    });

    /* scroll */
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();//현재 스크롤 위치
        $("section").stop().animate({"left":-scroll},600,"linear");
    });

    /* gnb */
    $(".gnb li").click(function(){
        var i = $(this).index();//몇번째 li인지 저장
        var posNavi = 1000 * i;
        $("html,body").scrollTop(posNavi);//line21에서 이동

        $(".gnb li").removeClass();
        $(this).addClass("on");
    });
});