/* main.js */
var $devWidth;//화면너비저장할변수
var $limitsize=768;//모바일사이즈

$(document).ready(function(){
    $devWidth = $("body").width();
    console.log($devWidth);//새로고침해야 찍힘

    $(window).resize(function(){//윈도우 리사이즈 될때마다//윈도우는 객체라 따옴표 x
        $devWidth = $("body").width();
        console.log($devWidth);
    });

    /*전체메뉴*/
    /*
    $(".allmenu_view").click(function(){
        $(".allMenu_box").slideDown("slow");
    });
    $(".all_close").click(function(){
        $(".allMenu_box").slideUp("slow");
    });
    */
    $(".allmenu_view").click(function(){//div.allmenu_view
        $(this).hide(10,function(){//자기자신 사라진 후 콜백(속도,콜백함수)
            $(".allMenu_box").slideDown("slow");
        });

    });
    $(".all_close").click(function(e){//a.all_close, 이벤트객체 사용
        e.preventDefault();//눌렀을 때 화면 상단으로 점핑하는 현상 방지(<a>요소의 기본값 동작으로 새 페이지가 열리는 것을 방지)
        $(".allMenu_box").slideUp("slow",function(){
            $(".allmenu_view").show(10);
        });
    });

    /* 주메뉴 */
    $(".gnb > ul > li > a").bind("mouseover focus",function(){
        if($devWidth < $limitsize) retrun (false);//모바일 함수실행정지
        //1.호버시 보이게(다안보이게>호버만보이게)
        $(".gnb > ul > li > ul").hide();//js와의 차이 : for문 미사용
        $(this).next().show();//(a뒷형제 == ul) 보이게

        //2.이미지 변경(높이:29px>33px, 백그라운드 생김)
        $(this).css({"height":"29px","background":"none"});
        $(this).css({"height":"33px","background":"url(images/over_icon.gif) no-repeat 50% 100%;"});//이미지경로 바뀜(js는 DOM을 직접조작함)
    });

    $(".gnb").bind("mouseleave blur",function(){
        if($devWidth < $limitsize) retrun (false);//모바일 함수실행정지
        $(".gnb > ul > li > ul").slideUp(50);
        $(".gnb > ul > li > a").css({"height":"29px","background":"none"});
    });

    /* 탭메뉴 */
    $(".content2 h2 a").bind("click focus",function(e){//a
        e.preventDefault();
        $(".content2 > section > div").hide();
        $(this).parent().next().show();

        $(".content2 h2 img").each(function(){//img, .each 메소드
            //js : 선택자.src = 선택자.src.replace("","");//img.attr("src","값");
            $(this).attr("src",$(this).attr("src").replace("_over.gif",".gif"));
        });

        $(this).children().attr("src",$(this).children().attr("src").replace(".gif","_over.gif"));
    });
    //mycode 눌렀을때 원래div안보이고 클릭한div보이고
    // $(".t2 a").bind("click focus",function(e){
    //     e.preventDefault();
    //     $(".item1").hide();//t1 div 안보이게
    //     $(".item2").show();

    //     $(".t1 a img").attr("src",$(".t1 a img").attr("src").replace("_over.gif",".gif"));
    //     $(".t2 a img").attr("src",$(".t2 a img").attr("src").replace("_over.gif",".gif"));
    //     $(".t2 a img").attr("src",$(".t2 a img").attr("src").replace(".gif","_over.gif"));
    // });
    // $(".t1 a").bind("click focus",function(e){
    //     e.preventDefault();
    //     $(".item2").hide();
    //     $(".item1").show();

    //     $(".t1 a img").attr("src",$(".t1 a img").attr("src").replace("_over.gif",".gif"));
    //     $(".t1 a img").attr("src",$(".t1 a img").attr("src").replace(".gif","_over.gif"));
    //     $(".t2 a img").attr("src",$(".t2 a img").attr("src").replace("_over.gif",".gif"));
    // });

    /* 배너 */
    var $bnnNum = 0;//배너번호
    var lastNum=$(".book_frame>section").size() - 1;//섹션마지막인덱스
    $(".next").click(function(){
        $bnnNum++;
        if($bnnNum > lastNum) $bnnNum = 0;//롤링
        $book_w = $("body>section").width();
        $(".book_frame").stop().animate({"left":-$bnnNum * $book_w},300,"linear",function(){
            $(".book_roll img").attr("src","images/state_out.png");
            $(".book_roll img").eq($bnnNum).attr("src","images/state_over.png");
        });
    });

    $(".prev").click(function(){
        $bnnNum--;
        if($bnnNum < 0)  $bnnNum = lastNum;
        $book_w = $("body>section").width();
        $(".book_frame").stop().animate({"left":-$bnnNum * $book_w},300,"linear",function(){
            $(".book_roll img").attr("src","images/state_out.png");
            $(".book_roll img").eq($bnnNum).attr("src","images/state_over.png");
        });
    });
    
    /* 모바일(터치) http://jquerymobile.com/download-builder */
    //화면전환
    //모바일 기기의 방향을 전환(가로/세로)할 때 화면의 너비가 달라지는 것에 대비해서 항상 바른 위치에 있도록 애니메이션 적용
    $("body>section").bind("orientationchange",function(e){
        $book_w = $("body>section").width();
        $(".book_frame").stop().animate({left:-$book_w * $bnnNum},300);
    });

    //스와이프
    $("body>section").bind("swipeleft",function(){
        $(".next").trigger("click");//trigger() 클릭한거처럼 강제로 이벤트 발생
    });
    $("body>section").bind("swiperight",function(){
        $(".prev").trigger("click");//trigger() 클릭한거처럼 강제로 이벤트 발생
    });
});