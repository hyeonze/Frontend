function initTabMenu(tabContainerID){
	var myList=document.getElementById(tabContainerID);
	var myTab=myList.getElementsByTagName("dt");
	var myDD=myList.getElementsByTagName("dd");
    
	for(var i=0; i<myTab.length; i++){
		myTab[i].children[0].onfocus=myTab[i].children[0].onclick=function(){
			
            for(var k=0; k<myDD.length; k++){
				myDD[k].style.display="none";
			}
			var theNext=this.parentNode.nextSibling;
			if(theNext.nodeType==3) {theNext=theNext.nextSibling;}
			theNext.style.display="block";

			for(var k=0; k<myTab.length; k++){
				var theTab=myTab[k].children[0].children[0];
				theTab.src=theTab.src.replace("_over.gif","_out.gif");
			}
			this.children[0].src=this.children[0].src.replace("_out.gif","_over.gif");
		}
	}
}