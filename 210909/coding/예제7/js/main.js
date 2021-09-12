/* main.js */
$(document).ready(function(){
    //로딩페이지
    function imagesProgress(){
        var $container = $('#progress'),//div
            $progressBar = $container.find('.progress-bar'),//span
            $progressText = $container.find('.progress-text'),//span

            imgLoad = imagesLoaded('body'),//body에 있는 이미지 불러오기(플러그인함수)
            imgTotal = imgLoad.images.length,//body 전체 이미지 수를 저장

            imgLoaded = 0,//이미지 로딩한 숫자
            current = 0,//text에 들어갈 숫자

            progressTimer = setInterval(updateProgress, 1000 / 60);//1/60초마다 updateProgress호출
        
            imgLoad.on('progress', function(){
                imgLoaded++;
            });

            function updateProgress(){//바길이늘리기 && 숫자높이기
                //bar width:0%~100%
                //text 0~100%
                var target = (imgLoaded / imgTotal) * 100;//불러온 이미지 비율
                current += (target - current) * 0.1;//속도조절 위해 0.1배

                $progressBar.css({width:current + '%'});
                $progressText.text(Math.floor(current) + '%');

                if (current >= 100){
                    clearInterval(progressTimer);//setInterval종료
                    $container.addClass('progress-complete');//div 바 색깔 red로

                    //바랑 텍스트 둘 다, 딜레이시간 0.5초 갖고, 사라져라, 0.25초동안, 이후 콜백함수
                    $progressBar.add($progressText).delay(500).animate({opacity:0},250,function(){
                        $container.animate({top:'-100%'}, 1000);//div가 위로 사라짐(1초만에)
                    });
                }

                if(current > 99.9){
                    current = 100;
                }
            }
    }
    //최초실행
    imagesProgress();

    //img생성 0~199(이미지 한꺼번에 넣기)
    //<img src="img/pic50.jpg" />
    var imgs='';
    for(i = 0; i < 200; i++){
        imgs += "<img src='img/pic" + i + ".jpg' />";
    }
    $("section").html(imgs);

    //mousemove
    $("body").mousemove(function(e){
        var posX = e.pageX;
        var wid = $(window).width();
        var percent = Math.floor((posX/wid) * 200);//마우스 움직임에 따라 몇번째 사진이냐
        console.log(percent);//0~199

        $("section>img").hide();
        $("section>img").eq(percent).show();
    });
});