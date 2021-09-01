/* autoBanner.js */
function galleryLoad(){
    var myList = document.getElementById("galleryList");//ul
    var theAtag = myList.getElementsByTagName("a");//li a 4개
    var theGallery = document.getElementById("gallery");//큰img
    var myImg = myList.getElementsByTagName("img");//작은img

    for(var i = 0;i < theAtag.length; i++){
        theAtag[i].onfocus = theAtag[i].onmouseover = function(){//a
            theGallery.src = this.href;//큰이미지 교체

            for(var k = 0; k < myImg.length; k++){//작은이미지 모두흑백처리
                myImg[k].src = myImg[k].src.replace("over.jpg", "out.jpg");
            }
            this.children[0].src = this.children[0].src.replace("out.jpg", "over.jpg");

            clearTimeout(myAuto);//a에 마우스 올렸을 때 auto배너 정지
            addNum = this.children[0].alt.charAt(2) - 1;//0,1,2,3 순서 기억해서 현재배너 인덱스번호 저장
        }//onmouseover

        theAtag[i].onblur = theAtag[i].onmouseout = function(){
            myAuto = setTimeout(autoBanner,1500);//a에 마우스벗어나면 재시작
        }//onmouseout
    }//for문

    var addNum = 0;//배너 번호
    function autoBanner(){
        addNum++;
        if(addNum >= theAtag.length){//0,1,2,3
            addNum = 0;
        }
        theAtag[addNum].onmouseover();
        myAuto = setTimeout(autoBanner, 1500);//재귀함수
    }//autoBanner함수

    var myAuto = setTimeout(autoBanner, 1500);//최초 autoBanner함수 호출

    var aGallery = document.getElementById("aGallery");//큰그림 a

    aGallery.onfocus = aGallery.onmouseover = function(){//큰그림에 마우스 올렸을 때 정지
        clearTimeout(myAuto);
    }

    aGallery.onblur = aGallery.onmouseover = function(){//큰그림에 마우스 벗어나면 재시작
        myAuto = setTimeout(autoBanner,1500);
    }
}//galleryLoad함수


window.addEventListener("load",galleryLoad,false);// 로드했을때 전체함수 실행
//ie8이하 고려한 경우
if(window.addEventListener){//표준방식 브라우저
    window.addEventListener("load",galleryLoad,false);
}else if(window.attachEvent){//비표준방식(ie8) 브라우저
    window.attachEvent("onload", galleryLoad);
}