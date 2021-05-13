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

  if(simsubscreennum == 1) {
    document.getElementById("reButton").style.visibility = "hidden";
    document.getElementById("wp0").style.visibility = "hidden";
    document.getElementById("h0").style.visibility = "hidden";
    document.getElementById("m0").style.visibility = "hidden";
    document.getElementById("g0").style.visibility = "hidden";
    document.getElementById("off0").style.visibility = "hidden";
    document.getElementById("p0").style.visibility = "hidden";
      document.getElementById("prevButton").style.visibility = "visible";

      //Write code for canvas 1 animations
    myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
    animateArrowATPosition(135,320,-90);//specify the left top and deg of arrow
    document.getElementById("wp1").onclick = function() {
       document.getElementById("wp1").onclick = " "
       myStopFunction();//stops blinking arrow
         document.getElementById("prevButton").style.visibility = "hidden";
       document.getElementById("wp1").style.animation = "movePattern 2.2s ease-out forwards ";
       setTimeout(function() {
            document.getElementById("wp1").style.visibility = "hidden";
            document.getElementById("hp1").style.visibility = "visible";
             setTimeout(function() {
                document.getElementById("prevButton").style.visibility = "visible";
                      document.getElementById("nextButton").style.visibility = "visible";
               },550);
        },2950);

   }

}else if(simsubscreennum == 2) {
  document.getElementById("reButton").style.visibility = "hidden";
  document.getElementById("wp1").style.visibility = "hidden";
  document.getElementById("p1").style.visibility = "hidden";
  document.getElementById("h1").style.visibility = "hidden";
  document.getElementById("hp1").style.visibility = "hidden";
    document.getElementById("prevButton").style.visibility = "visible";


  myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
  animateArrowATPosition(106,400,-90);//specify the left top and deg of arrow
  document.getElementById("wp2").onclick = function() {
     document.getElementById("wp2").onclick = " "
     myStopFunction();//stops blinking arrow
       document.getElementById("prevButton").style.visibility = "hidden";
     document.getElementById("wp2").style.animation = "movePattern2 2.2s ease-out forwards ";
     setTimeout(function() {
           document.getElementById("prevButton").style.visibility = "visible";
          document.getElementById("nextButton").style.visibility = "visible";
      },2350);

 }
     }else if(simsubscreennum == 3) {
       document.getElementById("reButton").style.visibility = "hidden";
       document.getElementById("p2").style.visibility = "hidden";
       document.getElementById("m2").style.visibility = "hidden";
       document.getElementById("wp2").style.visibility = "hidden";
       document.getElementById("off2").style.visibility = "hidden";
         document.getElementById("prevButton").style.visibility = "visible";

       myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
       animateArrowATPosition(690,320,-70);//specify the left top and deg of arrow
       document.getElementById("off3").onclick = function() {
       document.getElementById("off3").onclick = " "
       myStopFunction();
         document.getElementById("prevButton").style.visibility = "hidden";
       document.getElementById("off3").style.visibility ="hidden";
       document.getElementById("on3").style.visibility = "visible";
      setTimeout(function() {
            document.getElementById("p3").style.animation = "movepress3 4.2s ease-out forwards ";
            document.getElementById("left3").style.animation = "moveleft 4.2s ease-out forwards ";
            document.getElementById("right3").style.animation = "moveright 4.2s ease-out forwards ";
            setTimeout(function() {
                 document.getElementById("wp3").style.visibility = "hidden";
                 document.getElementById("fp3").style.visibility = "visible";
                 setTimeout(function() {
                    document.getElementById("prevButton").style.visibility = "visible";
                      document.getElementById("nextButton").style.visibility = "visible";
                  },2100);

                },2200);

            },300);

   }

} else if(simsubscreennum == 4) {
  document.getElementById("reButton").style.visibility = "hidden";
  document.getElementById("p3").style.visibility = "hidden";
  document.getElementById("m3").style.visibility = "hidden";
  document.getElementById("wp3").style.visibility = "hidden";
  document.getElementById("off3").style.visibility = "hidden";
   document.getElementById("on3").style.visibility = "hidden";
   document.getElementById("fp3").style.visibility = "hidden";
   document.getElementById("left3").style.visibility = "hidden";
   document.getElementById("right3").style.visibility = "hidden";
   document.getElementById("mp3").style.visibility = "hidden";
     document.getElementById("prevButton").style.visibility = "visible";

   myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
   animateArrowATPosition(521,346,-90);//specify the left top and deg of arrow
   document.getElementById("wp4").onclick = function() {
      document.getElementById("wp4").onclick = " "
      myStopFunction();//stops blinking arrow
        document.getElementById("prevButton").style.visibility = "hidden";
      document.getElementById("wp4").style.animation = "movePattern4 2.5s ease-out forwards ";
      setTimeout(function() {
           document.getElementById("wp4").style.visibility = "hidden";
           document.getElementById("fp4").style.visibility = "visible";
             setTimeout(function() {
                document.getElementById("prevButton").style.visibility = "visible";
                 document.getElementById("nextButton").style.visibility = "visible";
             },550);
       },3050);

      }
    }
else if(simsubscreennum == 5) {
  document.getElementById("reButton").style.visibility = "hidden";
  document.getElementById("p4").style.visibility = "hidden";
  document.getElementById("m4").style.visibility = "hidden";
  document.getElementById("wp4").style.visibility = "hidden";
  document.getElementById("off4").style.visibility = "hidden";
  document.getElementById("fp4").style.visibility = "hidden";
    document.getElementById("prevButton").style.visibility = "visible";

  myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
  animateArrowATPosition(620,270,-90);//specify the left top and deg of arrow
  document.getElementById("gr5").onclick = function() {
  document.getElementById("gr5").onclick = " "//To stop further click on pattern
      myStopFunction();//stops blinking arrow
        document.getElementById("prevButton").style.visibility = "hidden";
      document.getElementById("gr5").style.animation = "movegr 4.8s ease-out forwards";

             setTimeout(function() {
                 document.getElementById("wp5").style.visibility = "hidden";
                 document.getElementById("fp5").style.visibility = "visible";
             setTimeout(function() {
                document.getElementById("prevButton").style.visibility = "visible";
             document.getElementById("reButton").style.visibility = "visible";

           },2250);

           },2450);

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
