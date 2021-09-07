/* main.js */
$(document).ready(function(){
    var timer = setInterval(function(){//setInterval(함수,시간); 일정시간마다 함수호출
        var today = new Date();
        var nowHour = today.getHours();
        var nowMin = today.getMinutes();
        var nowSec = today.getSeconds();

        if(nowHour < 10){
            nowHour = "0" + nowHour;
        }
        if(nowMin < 10){
            nowMin = "0" + nowMin;
        }
        if(nowSec < 10){
            nowSec = "0" + nowSec;
        }
    
        $("figure p span").eq(0).text(nowHour);//첫 스팬에 nowHour집어넣기(.text)
        $("figure p span").eq(1).text(nowMin);
        $("figure p span").eq(2).text(nowSec);
    },1000);

    var now = new Date();//현재날짜시간 객체 생성
    var hr = now.getHours();//0~23

    //6~11 아침이미지, 11~17 점심이미지, 17~20 저녁이미지, 한밤중
    if(hr >= 6 && hr < 11){//아침이미지
        $("#wrap").removeClass();
        $("#wrap").addClass("moring");
    }else if(hr >= 11 && hr < 17){//점심 이미지
        $("#wrap").removeClass();
        $("#wrap").addClass("afternoon");
    }else if(hr >= 17 && hr < 20){//저녁 이미지
        $("#wrap").removeClass();
        $("#wrap").addClass("evening");
    }else{//밤 이미지
        $("#wrap").removeClass();
        $("#wrap").addClass("night");
    }

    //section li 클릭
    $("section li").click(function(){
        var className = $(this).children("a").text();
        $("#wrap").removeClass();
        $("#wrap").addClass(className);
    });
});