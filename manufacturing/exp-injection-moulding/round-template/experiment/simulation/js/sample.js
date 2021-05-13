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
    //Write code for canvas 1 animations
    document.getElementById("reButton").style.visibility = "hidden";
    document.getElementById("screw0").style.visibility = "hidden";
    document.getElementById("m0").style.visibility = "hidden";
    document.getElementById("off0").style.visibility = "hidden";
    document.getElementById("b0").style.visibility = "hidden";
    document.getElementById("prevButton").style.visibility = "visible";


    myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
    animateArrowATPosition(150,350,-90);//specify the left top and deg of arrow
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

}  else if(simsubscreennum == 2) {
  document.getElementById("reButton").style.visibility = "hidden";
  document.getElementById("m1").style.visibility = "hidden";
  document.getElementById("off1").style.visibility = "hidden";
  document.getElementById("mb1").style.visibility = "hidden";
  document.getElementById("p1").style.visibility = "hidden";
  document.getElementById("fill1").style.visibility = "hidden";
  document.getElementById("screw1").style.visibility = "hidden";
  document.getElementById("b1").style.visibility = "hidden";
  document.getElementById("d1").style.visibility = "hidden";
  document.getElementById("bl1").style.visibility = "hidden";
  document.getElementById("prevButton").style.visibility = "visible";


 myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
 animateArrowATPosition(240,420,-90);//specify the left top and deg of arrow
 document.getElementById("off2").onclick = function() {
   document.getElementById("off2").onclick =" "
   myStopFunction();
    document.getElementById("prevButton").style.visibility = "hidden";
     document.getElementById("dial2").style.visibility = "visible";
    document.getElementById("dial2").style.animation = "moved 2.2s ease-out forwards";
    document.getElementById("p2").style.animation = "movepress2 2.2s ease-out forwards";
   document.getElementById("screw2").style.animation = "movescrew2 2.2s ease-out forwards";
    document.getElementById("fill2").style.animation = "movefill2 2.0s ease-out forwards";

         setTimeout(function() {

           document.getElementById("prevButton").style.visibility = "visible";
           document.getElementById("nextButton").style.visibility = "visible";
        },2250);

    }
  }else if(simsubscreennum == 3) {
    document.getElementById("reButton").style.visibility = "hidden";
    document.getElementById("off2").style.visibility = "hidden";
    document.getElementById("fill2").style.visibility = "hidden";
    document.getElementById("m2").style.visibility = "hidden";
    document.getElementById("p2").style.visibility = "hidden";
    document.getElementById("screw2").style.visibility = "hidden";
    document.getElementById("dial2").style.visibility = "hidden";
    document.getElementById("mb2").style.visibility = "hidden";
    document.getElementById("prevButton").style.visibility = "visible";


      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(240,420,-90);//specify the left top and deg of arrow
      document.getElementById("off3").onclick = function() {
          document.getElementById("off3").onclick =" "
          myStopFunction();
            document.getElementById("prevButton").style.visibility = "hidden";
          document.getElementById("off3").style.visibility = "hidden";
          document.getElementById("on3").style.visibility = "visible";
          setTimeout(function() {
            document.getElementById("screw3").style.animation = "movescrew3 3.2s ease-out forwards";
             document.getElementById("fill3").style.animation = "movefill3 3.3s ease-out forwards";
            setTimeout(function() {
                            document.getElementById("prevButton").style.visibility = "visible";
                            document.getElementById("nextButton").style.visibility = "visible";
                          },3350);

                   },300);

      }

} else if(simsubscreennum == 4) {
  document.getElementById("reButton").style.visibility = "hidden";
  document.getElementById("m3").style.visibility = "hidden";
  document.getElementById("fill3").style.visibility = "hidden";
  document.getElementById("off3").style.visibility = "hidden";
  document.getElementById("on3").style.visibility = "hidden";
  document.getElementById("screw3").style.visibility = "hidden";
  document.getElementById("prevButton").style.visibility = "visible";


        myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
        animateArrowATPosition(240,420,-90);//specify the left top and deg of arrow
        document.getElementById("off4").onclick = function() {
            document.getElementById("off4").onclick = " "//To stop further click on pattern
            myStopFunction();//stops blinking arrow
             document.getElementById("prevButton").style.visibility = "hidden";
             document.getElementById("dial4").style.visibility = "visible";
            document.getElementById("dial4").style.animation = "movedial4 2.2s ease-out forwards ";//Since it runs for 1.2s
           document.getElementById("p4").style.animation = "movepress4 2.2s ease-out forwards";
            setTimeout(function() {
               document.getElementById("prevButton").style.visibility = "visible";
                document.getElementById("nextButton").style.visibility = "visible";
            },2250);

      }


}if(simsubscreennum == 5) {
  document.getElementById("reButton").style.visibility = "hidden";
  document.getElementById("screw4").style.visibility = "hidden";
  document.getElementById("m4").style.visibility = "hidden";
  document.getElementById("off4").style.visibility = "hidden";
  document.getElementById("p4").style.visibility = "hidden";
  document.getElementById("fill4").style.visibility = "hidden";
  document.getElementById("mb4").style.visibility = "hidden";
  document.getElementById("dial4").style.visibility = "hidden";
  document.getElementById("f4").style.visibility = "hidden";
  document.getElementById("prevButton").style.visibility = "visible";


  myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
  animateArrowATPosition(318,275,-90);//specify the left top and deg of arrow
  document.getElementById("f5").onclick = function() {
  document.getElementById("f5").onclick = " "//To stop further click on pattern
   myStopFunction();//stops blin
    document.getElementById("prevButton").style.visibility = "hidden";
    document.getElementById("f5").style.animation = "movefinal 4.2s ease-out forwards ";
            setTimeout(function() {
                   document.getElementById("prevButton").style.visibility = "visible";
                   document.getElementById("reButton").style.visibility = "visible";
              },4450);

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
