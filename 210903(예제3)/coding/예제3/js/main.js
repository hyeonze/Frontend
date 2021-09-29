/* main.js */
$(document).ready(function(){
    // 햄버거 버튼 클릭 이벤트
    $(".btnMenu").click(function(){
        $(this).fadeOut();
        $("header").addClass("on");
        $("#content").addClass("on");
    });
    // 주메뉴 클릭 이벤트
    $(".gnb li").click(function(){
        $(".btnMenu").fadeIn();
        $("header").removeClass("on");
        $("#content").removeClass("on");

        var i = $(this).index();
        // .index() - 클릭한 element(요소)가 몇 번째인지 알아내는 것
        $("#content > section").removeClass("on");
        $("#content > section").eq(i).addClass("on");
    });
});