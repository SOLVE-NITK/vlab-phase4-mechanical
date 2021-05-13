function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}


//animate arrow at position
function animateArrowATPosition(left,top,degg)
{
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+left+"px; top: "+top+"px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+degg+"deg)";
	 // Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate("+degg+"deg)";
	 // Standard syntax
	document.getElementById("arrow1").style.transform = "rotate("+degg+"deg)";
}

//stop blinking arrow
function myStopFunction()
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}


//function to move to next canvas
function navNext()
{
	for(temp=0;temp<=5;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
  simsubscreennum+=1;
  	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
      document.getElementById("nextButton").style.visibility="hidden";
      refresh();
  	magic();
}

function navBack()
{
	for(temp=0;temp<=5;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum-=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
    document.getElementById("nextButton").style.visibility="hidden";
    refresh();
	magic();
}


//magic function for animation in each canvas
function magic() {
  if(simsubscreennum == 0){
      document.getElementById("nextButton").style.visibility = "visible";
      document.getElementById("prevButton").style.visibility = "hidden";
      document.getElementById("reButton").style.visibility = "hidden";
  }

  else if(simsubscreennum == 1) {
      document.getElementById("reButton").style.visibility = "hidden";
      document.getElementById("metal0").style.visibility = "hidden";
      document.getElementById("g0").style.visibility = "hidden";
      document.getElementById("off0").style.visibility = "hidden";
      document.getElementById("machine0").style.visibility = "hidden";
      document.getElementById("prevButton").style.visibility = "visible";

        //Write code for canvas 1 animations
      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(155,350,-90);//specify the left top and deg of arrow
      document.getElementById("bl").onclick = function() {
           document.getElementById("bl").onclick = " "
           myStopFunction();//stops blinking arrow
           document.getElementById("prevButton").style.visibility = "hidden";
           document.getElementById("bl").style.animation = "movePattern 2.2s ease-out forwards ";
           setTimeout(function() {
                document.getElementById("prevButton").style.visibility = "visible";
                document.getElementById("nextButton").style.visibility = "visible";
            },2550);

      }

}else if(simsubscreennum == 2) {

      document.getElementById("reButton").style.visibility = "hidden";
      document.getElementById("off1").style.visibility = "hidden";
      document.getElementById("machine1").style.visibility = "hidden";
      document.getElementById("bl").style.visibility = "hidden";
      document.getElementById("prevButton").style.visibility = "visible";

      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(730,320,-60);//specify the left top and deg of arrow
      document.getElementById("off2").onclick = function() {
         document.getElementById("off2").onclick =" "
         myStopFunction();//stops blinking arrow
         document.getElementById("off2").style.visibility = "hidden";
         document.getElementById("on2").style.visibility = "visible";
         document.getElementById("prevButton").style.visibility = "hidden";
         setTimeout(function(){
              document.getElementById("on2").style.visibility = "hidden";
              document.getElementById("blank").style.visibility = "hidden";
              document.getElementById("hyd").style.visibility = "hidden";
              document.getElementById("press").style.visibility = "visible";
              document.getElementById("metal").style.visibility = "visible";
              document.getElementById("die").style.visibility = "visible";
              document.getElementById("diebg").style.visibility = "visible";
              setTimeout(function() {
                   document.getElementById("press").style.animation = "movepress 4.2s linear forwards";
                   setTimeout(function() {
                         document.getElementById("metal").style.visibility = "hidden";
                         document.getElementById("metal1").style.visibility = "visible";
                         document.getElementById("m").style.visibility = "visible";
                         document.getElementById("m").style.animation = "movew 1.8s ease-out forwards";
                         setTimeout(function() {
                              document.getElementById("prevButton").style.visibility = "visible";
                              document.getElementById("nextButton").style.visibility = "visible";
                          },2450);

                      },2050);

               },550);

         },850);

     }

}else if(simsubscreennum == 3) {

      document.getElementById("reButton").style.visibility = "hidden";
      document.getElementById("die").style.visibility = "hidden";
      document.getElementById("hyd").style.visibility = "hidden";
      document.getElementById("press").style.visibility = "hidden";
      document.getElementById("off2").style.visibility = "hidden";
      document.getElementById("on2").style.visibility = "hidden";
      document.getElementById("metal1").style.visibility = "hidden";
      document.getElementById("diebg").style.visibility = "hidden";
      document.getElementById("m").style.visibility = "hidden";
      document.getElementById("metal").style.visibility = "hidden";
      document.getElementById("blank").style.visibility = "hidden";
      document.getElementById("prevButton").style.visibility = "visible";

      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(540,330,-90);//specify the left top and deg of arrow
      document.getElementById("bl3").onclick = function() {
         document.getElementById("bl3").onclick =" "
         myStopFunction();//stops blinking arrow
         document.getElementById("prevButton").style.visibility = "hidden";
         document.getElementById("bl3").style.animation = "movePattern2 2.2s ease-out forwards";
         document.getElementById("m3").style.animation = "movescrap 2.2s ease-out forwards";
         setTimeout(function() {
              document.getElementById("eq").style.visibility = "visible";
              document.getElementById("eq1").style.visibility = "visible";
              setTimeout(function() {
                   document.getElementById("prevButton").style.visibility = "visible";
                   document.getElementById("nextButton").style.visibility = "visible";
               },1750)

          },2250);

     }

 }else if(simsubscreennum == 4) {

    document.getElementById("reButton").style.visibility = "hidden";
    document.getElementById("off3").style.visibility = "hidden";
    document.getElementById("m3").style.visibility = "hidden";
    document.getElementById("machine3").style.visibility = "hidden";
    document.getElementById("bl3").style.visibility = "hidden";
    document.getElementById("mbg3").style.visibility = "hidden";
    document.getElementById("eq").style.visibility = "hidden";
    document.getElementById("eq1").style.visibility = "hidden";
    document.getElementById("prevButton").style.visibility = "visible";

    myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
    animateArrowATPosition(550,330,-90);//specify the left top and deg of arrow
    document.getElementById("g4").onclick = function() {
          document.getElementById("g4").onclick =" "
          myStopFunction();//stops blinking arrow
          document.getElementById("prevButton").style.visibility = "hidden";
          document.getElementById("g4").style.animation = "movegrinder 6.2s ease-out  forwards";
          setTimeout(function() {
               document.getElementById("prevButton").style.visibility = "visible";
               document.getElementById("reButton").style.visibility = "visible";
            },6450)

        }

    }

}


function refresh() {
    myStopFunction();
    clearInterval(myInt);
    document.getElementById("prevButton").style.visibility = "hidden";
    document.getElementById("nextButton").style.visibility = "hidden";
    if(simsubscreennum == 0){
        document.getElementById("prevButton").style.visibility = "hidden";
        document.getElementById("nextButton").style.visibility = "visible";
        if(visibleImagesId[simsubscreennum].initialImages.length>0) {
            visibleImagesId[simsubscreennum].initialImages.forEach(function(id,index){
                document.getElementById(id).style.visibility = "visible";
            });
        }
        if(visibleImagesId[simsubscreennum].hideImages.length>0) {
            visibleImagesId[simsubscreennum].hideImages.forEach(function(id,index){
                document.getElementById(id).style.visibility = "hidden";
            });
        }
    }
    else {

            // if(visibleImagesId[simsubscreennum-1].initialImages.length>0) {
                visibleImagesId[simsubscreennum].animImages.forEach(function(img,index){
                    document.getElementById(img.id).style.visibility = "visible";
                    document.getElementById(img.id).style.animation = " ";
                    document.getElementById(img.id).style=img.styleSet;
                });
            // }
            if(visibleImagesId[simsubscreennum].initialImages.length>0) {
                visibleImagesId[simsubscreennum].initialImages.forEach(function(id,index){
                    document.getElementById(id).style.visibility = "visible";
                });
            }
            if(visibleImagesId[simsubscreennum].hideImages.length>0) {
                visibleImagesId[simsubscreennum].hideImages.forEach(function(id,index){
                    document.getElementById(id).style.visibility = "hidden";
                });
            }
    }
}
