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
      document.getElementById("reButton").style.visibility = "hidden";
      document.getElementById("metal0").style.visibility = "hidden";
        document.getElementById("off0").style.visibility = "hidden";
      document.getElementById("holder0").style.visibility = "hidden";
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
          },2350);

     }

} else if(simsubscreennum == 2) {

      document.getElementById("reButton").style.visibility = "hidden";
      document.getElementById("bl").style.visibility = "hidden";
        document.getElementById("off1").style.visibility = "hidden";
      document.getElementById("machine1").style.visibility = "hidden";
      document.getElementById("prevButton").style.visibility = "visible";

       myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
       animateArrowATPosition(230,350,-90);//specify the left top and deg of arrow
       document.getElementById("bh").onclick = function() {
          document.getElementById("bh").onclick =" "
          myStopFunction();//stops blinking arrow
          document.getElementById("prevButton").style.visibility = "hidden";
          document.getElementById("bh").style.animation = "movePattern2 2.2s ease-out forwards";
          setTimeout(function() {
                document.getElementById("prevButton").style.visibility = "visible";
               document.getElementById("nextButton").style.visibility = "visible";
        },2350)

    }

}else if(simsubscreennum == 3) {

      document.getElementById("reButton").style.visibility = "hidden";
      document.getElementById("off2").style.visibility = "hidden";
      document.getElementById("metal2").style.visibility = "hidden";
      document.getElementById("machine2").style.visibility = "hidden";
      document.getElementById("bh").style.visibility = "hidden";
      document.getElementById("prevButton").style.visibility = "visible";

      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(730,320,-60);//specify the left top and deg of arrow
      document.getElementById("sw").onclick = function() {
         document.getElementById("sw").onclick =" "
         myStopFunction();//stops blinking arrow
         document.getElementById("off3").style.visibility = "hidden";
          document.getElementById("sw").style.visibility = "hidden";
         document.getElementById("on3").style.visibility = "visible";
         document.getElementById("prevButton").style.visibility = "hidden";
         setTimeout(function(){
         document.getElementById("on3").style.visibility = "hidden";
         document.getElementById("machine").style.visibility = "hidden";
         document.getElementById("blank").style.visibility = "hidden";
         document.getElementById("hyd").style.visibility = "hidden";
              document.getElementById("press").style.visibility = "visible";
              document.getElementById("metal").style.visibility = "visible";
              document.getElementById("die").style.visibility = "visible";
              document.getElementById("diebg").style.visibility = "visible";
              document.getElementById("m").style.visibility = "visible";
              document.getElementById("w").style.visibility = "visible";
              setTimeout(function() {
                   document.getElementById("metal").style.visibility = "hidden";
                   document.getElementById("rbg").style.visibility = "visible";
                   document.getElementById("lbg").style.visibility = "visible";

                   document.getElementById("press").style.animation = "movepress 2.2s ease-out forwards";
                   document.getElementById("diebg").style.animation = "movew 2.2s ease-out forwards";
                   document.getElementById("rbg").style.animation = "moverbg 2.2s ease-out forwards";
                   document.getElementById("lbg").style.animation = "movelbg 2.2s ease-out forwards";
                   setTimeout(function() {
                     document.getElementById("EQ1").style.visibility = "visible";
                      document.getElementById("EQ").style.visibility = "visible";
                      setTimeout(function() {
                          document.getElementById("prevButton").style.visibility = "visible";
                        document.getElementById("nextButton").style.visibility = "visible";
                    },1950);

                },2500);



        },550);

    },850);

   }

}else if(simsubscreennum == 4) {
      document.getElementById("EQ1").style.visibility = "hidden";
      document.getElementById("EQ").style.visibility = "hidden";
      document.getElementById("reButton").style.visibility = "hidden";
      document.getElementById("die").style.visibility = "hidden";
      document.getElementById("press").style.visibility = "hidden";
      document.getElementById("off3").style.visibility = "hidden";
      document.getElementById("sw").style.visibility = "hidden";
      document.getElementById("on3").style.visibility = "hidden";
      document.getElementById("prevButton").style.visibility = "visible";

      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(420,260,-90);//specify the left top and deg of arrow
      document.getElementById("4press").onclick = function() {
         document.getElementById("4press").onclick =" "
         myStopFunction();//stops blinking arrow
         document.getElementById("prevButton").style.visibility = "hidden";
         document.getElementById("4press").style.animation = "movepress2 2.2s ease-out forwards";
         setTimeout(function() {
              document.getElementById("prevButton").style.visibility = "visible";
             document.getElementById("nextButton").style.visibility = "visible";
          },2850);

     }

 }else if(simsubscreennum == 5) {

   document.getElementById("reButton").style.visibility = "hidden";
   document.getElementById("re").style.visibility = "hidden";
   document.getElementById("die").style.visibility = "hidden";
   document.getElementById("m").style.visibility = "hidden";
   document.getElementById("4press").style.visibility = "hidden";
   document.getElementById("prevButton").style.visibility = "visible";

       myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
       animateArrowATPosition(520,350,-120);//specify the left top and deg of arrow
       document.getElementById("bh1").onclick = function() {
          document.getElementById("bh1").onclick =" "
          myStopFunction();//stops blinking arrow
          document.getElementById("prevButton").style.visibility = "hidden";
          document.getElementById("bh1").style.animation = "movePattern3 2.2s ease-out  forwards";
          setTimeout(function() {
               document.getElementById("prevButton").style.visibility = "visible";
              document.getElementById("nextButton").style.visibility = "visible";
          },2250)

      }

 }else if(simsubscreennum == 6) {
       document.getElementById("reButton").style.visibility = "hidden";
       document.getElementById("off5").style.visibility = "hidden";
       document.getElementById("bh1").style.visibility = "hidden";
       document.getElementById("blank1").style.visibility = "hidden";
       document.getElementById("hyd1").style.visibility = "hidden";
       document.getElementById("prevButton").style.visibility = "visible";

       myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
       animateArrowATPosition(550,365,-100);//specify the left top and deg of arrow
       document.getElementById("6blank1").onclick = function() {
          document.getElementById("6blank1").onclick =" "
          myStopFunction();//stops blinking arrow
          document.getElementById("prevButton").style.visibility = "hidden";
          document.getElementById("6cup").style.visibility = "visible";
          document.getElementById("6cup").style.animation = "movecup 1.6s ease-out forwards";
          document.getElementById("6blank1").style.visibility = "hidden";
          setTimeout(function() {
               document.getElementById("prevButton").style.visibility = "visible";
              document.getElementById("reButton").style.visibility = "visible";
           },1250)

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
