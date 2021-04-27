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
	for(temp=0;temp<=6;temp++)
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
	for(temp=0;temp<=6;temp++)
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
    //Write code for canvas 1 animations
      document.getElementById("reButton").style.visibility = "hidden";
      document.getElementById("screw0").style.visibility = "hidden";
      document.getElementById("m0").style.visibility = "hidden";
      document.getElementById("off0").style.visibility = "hidden";
      document.getElementById("b0").style.visibility = "hidden";
      document.getElementById("sb0").style.visibility = "hidden";
      document.getElementById("p0").style.visibility = "hidden";
      document.getElementById("p10").style.visibility = "hidden";
      document.getElementById("bl0").style.visibility = "hidden";
      document.getElementById("prevButton").style.visibility = "visible";


     myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
     animateArrowATPosition(160,350,-90);//specify the left top and deg of arrow
     document.getElementById("b1").onclick = function() {
        document.getElementById("b1").onclick = " "//To stop further click on pattern
        myStopFunction();//stops blinking arrow
        document.getElementById("prevButton").style.visibility = "hidden";
        document.getElementById("b1").style.animation = "movebucket 3.5s ease-out forwards ";//Since it runs for 1.2s
        setTimeout(function() {
              document.getElementById("d1").style.visibility = "visible";
              document.getElementById("fill1").style.animation = "movefill 2.5s ease-out forwards ";
              setTimeout(function() {
                    document.getElementById("d1").style.visibility = "hidden";
                    document.getElementById("b1").style.visibility = "hidden";
                    document.getElementById("nextButton").style.visibility = "visible";
                    document.getElementById("prevButton").style.visibility = "visible";
                },2600);

          },3450);

     }

} else if(simsubscreennum == 2) {

    document.getElementById("reButton").style.visibility = "hidden";
    document.getElementById("m1").style.visibility = "hidden";
    document.getElementById("off1").style.visibility = "hidden";
    document.getElementById("fill1").style.visibility = "hidden";
    document.getElementById("screw1").style.visibility = "hidden";
    document.getElementById("b1").style.visibility = "hidden";
    document.getElementById("d1").style.visibility = "hidden";
    document.getElementById("bl1").style.visibility = "hidden";
    document.getElementById("bl11").style.visibility = "hidden";
    document.getElementById("sb1").style.visibility = "hidden";
    document.getElementById("prevButton").style.visibility = "visible";

    myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
    animateArrowATPosition(170,370,-90);//specify the left top and deg of arrow
    document.getElementById("pb2").onclick = function() {
       document.getElementById("pb2").onclick =" "
       myStopFunction();
       document.getElementById("prevButton").style.visibility = "hidden";
       document.getElementById("pb2").style.visibility = "hidden";
       document.getElementById("p2").style.animation = "movepress2 4.2s ease-out forwards";
       document.getElementById("p12").style.animation = "movepress12 4.2s ease-out forwards";
       setTimeout(function() {
             document.getElementById("prevButton").style.visibility = "visible";
             document.getElementById("nextButton").style.visibility = "visible";
         },4350);

     }

} else if(simsubscreennum == 3) {

    document.getElementById("reButton").style.visibility = "hidden";
    document.getElementById("off2").style.visibility = "hidden";
    document.getElementById("fill2").style.visibility = "hidden";
    document.getElementById("m2").style.visibility = "hidden";
    document.getElementById("p2").style.visibility = "hidden";
    document.getElementById("screw2").style.visibility = "hidden";
    document.getElementById("bl2").style.visibility = "hidden";
    document.getElementById("p12").style.visibility = "hidden";
    document.getElementById("sb2").style.visibility = "hidden";
    document.getElementById("pb2").style.visibility = "hidden";
    document.getElementById("prevButton").style.visibility = "visible";


    myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
    animateArrowATPosition(220,230,-90);//specify the left top and deg of arrow
    document.getElementById("off3").onclick = function() {
        document.getElementById("off3").onclick =" "
        myStopFunction();
        document.getElementById("prevButton").style.visibility = "hidden";
        document.getElementById("off3").style.visibility = "hidden";
        document.getElementById("on3").style.visibility = "visible";
        setTimeout(function() {
              document.getElementById("screw3").style.animation = "movescrew3 4.3s ease-out forwards";
              document.getElementById("fill3").style.animation = "movefill3 4.3s ease-out forwards";
              document.getElementById("melt3").style.animation = "movemelt3 4.3s ease-out forwards  ";
              document.getElementById("melt13").style.animation = "movemelt13 4.3s ease-out forwards  ";
              document.getElementById("melt23").style.animation = "movemelt23 4.3s ease-out forwards";
              setTimeout(function() {
                    document.getElementById("melt3").style.visibility = "visible";
                    setTimeout(function() {
                          document.getElementById("melt23").style.visibility = "visible";
                          setTimeout(function() {
                               document.getElementById("prevButton").style.visibility = "visible";
                               document.getElementById("nextButton").style.visibility = "visible";
                            },1150);

                     },2550);

              },750);

        },300);

    }

} else if(simsubscreennum == 4) {

    document.getElementById("reButton").style.visibility = "hidden";
    document.getElementById("m3").style.visibility = "hidden";
    document.getElementById("fill3").style.visibility = "hidden";
    document.getElementById("off3").style.visibility = "hidden";
    document.getElementById("on3").style.visibility = "hidden";
    document.getElementById("screw3").style.visibility = "hidden";
    document.getElementById("bl3").style.visibility = "hidden";
    document.getElementById("sb3").style.visibility = "hidden";
    document.getElementById("p3").style.visibility = "hidden";
    document.getElementById("p13").style.visibility = "hidden";
    document.getElementById("melt3").style.visibility = "hidden";
    document.getElementById("melt13").style.visibility = "hidden";
    document.getElementById("melt23").style.visibility = "hidden";
    document.getElementById("prevButton").style.visibility = "visible";


    myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
    animateArrowATPosition(525,200,-90);//specify the left top and deg of arrow
    document.getElementById("tap4").onclick = function() {
        document.getElementById("tap4").onclick = " "//To stop further click on pattern
        myStopFunction();//stops blinking arrow
        document.getElementById("prevButton").style.visibility = "hidden";
        document.getElementById("pipe4").style.visibility = "visible";
        document.getElementById("hand4").style.visibility = "visible";
        document.getElementById("hand4").style.animation = "movehand4 1.5s ease-out forwards";
        setTimeout(function() {
              setTimeout(function() {
                    document.getElementById("pipe4").style.visibility = "hidden";
                    document.getElementById("hand4").style.visibility = "hidden";
                },650);

              document.getElementById("f14").style.visibility = "visible";
              document.getElementById("f24").style.visibility = "visible";
              document.getElementById("f14").style.animation = "movef4 3.3s ease-out forwards";
              document.getElementById("f24").style.animation = "movef4 3.3s ease-out forwards";
              setTimeout(function() {
                    document.getElementById("prevButton").style.visibility = "visible";
                    document.getElementById("nextButton").style.visibility = "visible";
                },3450);

           },850);

      }

} else if(simsubscreennum == 5) {

    document.getElementById("reButton").style.visibility = "hidden";
    document.getElementById("screw4").style.visibility = "hidden";
    document.getElementById("m4").style.visibility = "hidden";
    document.getElementById("off4").style.visibility = "hidden";
    document.getElementById("p4").style.visibility = "hidden";
    document.getElementById("p14").style.visibility = "hidden";
    document.getElementById("sb4").style.visibility = "hidden";
    document.getElementById("f14").style.visibility = "hidden";
    document.getElementById("f24").style.visibility = "hidden";
    document.getElementById("bg4").style.visibility = "hidden";
    document.getElementById("pipe4").style.visibility = "hidden";
    document.getElementById("hand4").style.visibility = "hidden";
    document.getElementById("tap4").style.visibility = "hidden";
    document.getElementById("prevButton").style.visibility = "visible";


    myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
    animateArrowATPosition(600,370,-50);//specify the left top and deg of arrow
    document.getElementById("pb5").onclick = function() {
       document.getElementById("pb5").onclick = " "//To stop further click on pattern
       myStopFunction();//stops blin
       document.getElementById("prevButton").style.visibility = "hidden";
       document.getElementById("pb5").style.visibility = "hidden";
       document.getElementById("p5").style.animation = "movepress5 2.2s ease-out forwards ";
       document.getElementById("p15").style.animation = "movepress15 2.2s ease-out forwards ";
       setTimeout(function() {
             document.getElementById("prevButton").style.visibility = "visible";
             document.getElementById("nextButton").style.visibility = "visible";
          },2350);

      }

} else if(simsubscreennum == 6) {

    document.getElementById("reButton").style.visibility = "hidden";
    document.getElementById("screw5").style.visibility = "hidden";
    document.getElementById("m5").style.visibility = "hidden";
    document.getElementById("off5").style.visibility = "hidden";
    document.getElementById("p5").style.visibility = "hidden";
    document.getElementById("p15").style.visibility = "hidden";
    document.getElementById("sb5").style.visibility = "hidden";
    document.getElementById("f5").style.visibility = "hidden";
    document.getElementById("pb5").style.visibility = "hidden";
    document.getElementById("bg5").style.visibility = "hidden";
    document.getElementById("prevButton").style.visibility = "visible";


    myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
    animateArrowATPosition(600,460,0);//specify the left top and deg of arrow
    document.getElementById("f6").onclick = function() {
       document.getElementById("f6").onclick = " "//To stop further click on pattern
       myStopFunction();//stops blin
       document.getElementById("prevButton").style.visibility = "hidden";
       document.getElementById("f6").style.animation = "movefinal6 3.2s ease-out forwards ";
       setTimeout(function() {
            document.getElementById("prevButton").style.visibility = "visible";
            document.getElementById("reButton").style.visibility = "visible";
          },3550);

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
