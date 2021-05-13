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
	for(temp=0;temp<=12;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
    document.getElementById("nextButton").style.visibility="hidden";
    refresh();
	magic();
}

//function to move to prev canvas
function navBack()
{
	for(temp=0;temp<=12;temp++)
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
        document.getElementById("box").style.visibility = "hidden";
        document.getElementById("pat1").style.visibility = "hidden";
        document.getElementById("pat2").style.visibility = "hidden";
        document.getElementById("pat3").style.visibility = "hidden";
        document.getElementById("prevButton").style.visibility = "visible";
        document.getElementById("reButton").style.visibility = "hidden";

        myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
        animateArrowATPosition(160,350,-90);//specify the left top and deg of arrow
        document.getElementById("bucket").onclick = function() {
        document.getElementById("bucket").onclick = " "
        myStopFunction();//stops blinking arrow
        document.getElementById("prevButton").style.visibility = "hidden";
        document.getElementById("bucket").style.animation = "movePattern 3.2s ease-out forwards ";
        setTimeout(function() {
              document.getElementById("nextButton").style.visibility = "visible";
              document.getElementById("prevButton").style.visibility = "visible";
          },3350);

       }

    } else if(simsubscreennum == 2) {

       document.getElementById("mouldBox").style.visibility = "hidden";
       document.getElementById("bucket").style.visibility = "hidden";
       document.getElementById("prevButton").style.visibility = "visible";
       document.getElementById("reButton").style.visibility = "hidden";

       myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
       animateArrowATPosition(230,250,-90);//specify the left top and deg of arrow
       document.getElementById("sand").onclick = function() {
       document.getElementById("sand").onclick =" "
       myStopFunction();//stops blinking arrow
       document.getElementById("prevButton").style.visibility = "hidden";
       document.getElementById("sand").style.animation = "moveSand 2.2s ease-out forwards";
       setTimeout(function() {
            document.getElementById("sandfill").style.visibility = "visible";
            document.getElementById("sandup").style.visibility = "visible";
            document.getElementById("bucket3").style.visibility = "hidden";
            document.getElementById("tray").style.visibility = "hidden";
            setTimeout(function() {
                  document.getElementById("sandfill").style.visibility = "hidden";
                  document.getElementById("sand").style.visibility="hidden";
                  setTimeout(function() {
                          document.getElementById("nextButton").style.visibility = "visible";
                          document.getElementById("prevButton").style.visibility = "visible";
                      },1000);
               },1550)

        },1850)

    }

}else if(simsubscreennum == 3) {

      document.getElementById("sandup").style.visibility = "hidden";
      document.getElementById("sandfill").style.visibility = "hidden";
      document.getElementById("prevButton").style.visibility = "visible";
      document.getElementById("reButton").style.visibility = "hidden";

      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(535,290,-90);//specify the left top and deg of arrow
      document.getElementById("tray1").onclick = function() {
      document.getElementById("tray1").onclick =" "
      myStopFunction();//stops blinking arrow
      document.getElementById("prevButton").style.visibility = "hidden";
      document.getElementById("tray1").style.transformOrigin = "0% 90%";
      document.getElementById("tray1").style.animation = "trayRotate 1.8s forwards "
      setTimeout(function() {
           document.getElementById("tray1").style.visibility = "hidden";
           document.getElementById('tray2').style.visibility="visible";
           setTimeout(function() {
                  document.getElementById("tray3").style.visibility = "visible";
                  myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
                  animateArrowATPosition(620,150,-90);//specify the left top and deg of arrow
                  document.getElementById("tray3").onclick = function() {
                  document.getElementById("tray3").onclick =" "
                  myStopFunction();//stops blinking arrow
                  document.getElementById("tray3").style.animation = "moveTray 1.0s ease-out forwards ";
                  setTimeout(function() {
                          document.getElementById("tray3").style.visibility="hidden";
                          document.getElementById("tray4").style.visibility="visible";
                          setTimeout(function() {
                                  document.getElementById("nextButton").style.visibility = "visible";
                                  document.getElementById("prevButton").style.visibility = "visible";
                             },1000);

                        },750);
                   }

              },500);

         },850);

    }

}else if(simsubscreennum == 4) {

      document.getElementById("tray2").style.visibility="hidden";
      document.getElementById("tray4").style.visibility="hidden";
      document.getElementById("prevButton").style.visibility = "visible";
      document.getElementById("reButton").style.visibility = "hidden";

      //Write code for canvas 1 animations
      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(160,350,-90);//specify the left top and deg of arrow
      document.getElementById("pat5").onclick = function() {
      document.getElementById("pat5").onclick =" "
      myStopFunction();//stops blinking arrow
      document.getElementById("prevButton").style.visibility = "hidden";
      document.getElementById("pat5").style.animation = "movePattern2 3.2s ease-out forwards ";
      setTimeout(function() {
             document.getElementById("nextButton").style.visibility = "visible";
             document.getElementById("prevButton").style.visibility = "visible";
          },3350);

     }

}else if(simsubscreennum == 5) {

      document.getElementById("tray5").style.visibility = "hidden";
      document.getElementById("pat6").style.visibility = "hidden";
      document.getElementById("pat5").style.visibility = "hidden";
      document.getElementById("prevButton").style.visibility = "visible";
      document.getElementById("reButton").style.visibility = "hidden";

      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(210,250,-90);//specify the left top and deg of arrow
      document.getElementById("sand5").onclick = function() {
      document.getElementById("sand5").onclick =" "
      myStopFunction();//stops blinking arrow
      document.getElementById("prevButton").style.visibility = "hidden";
      document.getElementById("sand5").style.animation = "moveSand 2.2s ease-out forwards";
      setTimeout(function() {
             document.getElementById("sandfill1").style.visibility = "visible";
             document.getElementById("sandup1").style.visibility = "visible";
             document.getElementById("bucket5").style.visibility = "hidden";
             document.getElementById('tray6').style.visibility="hidden";
             setTimeout(function() {
                    document.getElementById("sandfill1").style.visibility = "hidden";
                    document.getElementById('sand5').style.visibility="hidden";
                    setTimeout(function() {
                           document.getElementById("nextButton").style.visibility = "visible";
                           document.getElementById("prevButton").style.visibility = "visible";
                       },1000);

               },1550)

        },1850)

    }

}else if(simsubscreennum == 6) {

      document.getElementById("sandup1").style.visibility = "hidden";
      document.getElementById("tray6").style.visibility = "hidden";
      document.getElementById("prevButton").style.visibility = "visible";
      document.getElementById("reButton").style.visibility = "hidden";

      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(560,250,-90);//specify the left top and deg of arrow
      document.getElementById("tray7").onclick = function() {
      document.getElementById("tray7").onclick =" "
      myStopFunction();//stops blinking arrow
      document.getElementById("prevButton").style.visibility = "hidden";
      document.getElementById("tray9").style.visibility = "visible";
      document.getElementById("tray7").style.visibility = "hidden";
      document.getElementById("tray10").style.visibility = "visible";
      document.getElementById("tray10").style.transformOrigin = "0% 90%";
      document.getElementById("tray10").style.animation = "trayRotate 1.2s forwards "
      setTimeout(function() {
              document.getElementById("tray10").style.visibility = "hidden";
              document.getElementById('tray8').style.visibility="visible";
              setTimeout(function() {
                     document.getElementById("nextButton").style.visibility = "visible";
                     document.getElementById("prevButton").style.visibility = "visible";
                  },1000);

             },750)

        }

}else if(simsubscreennum == 7) {

      document.getElementById("tray8").style.visibility="hidden";
      document.getElementById("tray9").style.visibility="hidden";
      document.getElementById("prevButton").style.visibility = "visible";
      document.getElementById("reButton").style.visibility = "hidden";


      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(210,250,-90);//specify the left top and deg of arrow
      document.getElementById("tray11").onclick = function() {
      document.getElementById("tray11").onclick =" "
      myStopFunction();//stops blinking arrow
      document.getElementById("prevButton").style.visibility = "hidden";
      document.getElementById('pat11').style.visibility="visible";
      document.getElementById('pat12').style.visibility="visible";
      document.getElementById("tray11").style.visibility="hidden";
      document.getElementById("tray12").style.visibility="hidden";
      document.getElementById("hole1").style.visibility="visible";
      document.getElementById("hole2").style.visibility="visible";
      setTimeout(function() {
             document.getElementById("pat12").style.animation = "pattMove 1.2s 1 forwards";
             document.getElementById("pat11").style.animation = "patMove 1.2s 1 forwards";
             setTimeout(function() {
                    document.getElementById("nextButton").style.visibility = "visible";
                    document.getElementById("prevButton").style.visibility = "visible";
                },1250);

          },150);

      }

}else if(simsubscreennum == 8) {

      document.getElementById("hole1").style.visibility="hidden";
      document.getElementById("hole2").style.visibility="hidden";
      document.getElementById("pat11").style.visibility="hidden";
      document.getElementById("pat12").style.visibility="hidden";
      document.getElementById("prevButton").style.visibility = "visible";
      document.getElementById("reButton").style.visibility = "hidden";

        //Write code for canvas 1 animations
      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(210,310,-90);//specify the left top and deg of arrow
      document.getElementById("tray13").onclick = function() {
      document.getElementById("tray13").onclick =" "
      myStopFunction();//stops blinking arrow
      document.getElementById("prevButton").style.visibility = "hidden";
      document.getElementById("tray13").style.transformOrigin = "90% 20%";
      document.getElementById("tray13").style.animation = "tray2Rotate 1.2s forwards "
      setTimeout(function() {
            document.getElementById("tray13").style.visibility = "hidden";
            document.getElementById("tray14").style.visibility = "hidden";
            document.getElementById('tray15').style.visibility="visible";
            setTimeout(function() {
                   document.getElementById("nextButton").style.visibility = "visible";
                   document.getElementById("prevButton").style.visibility = "visible";
              },1000);

         },750);

    }

}else if(simsubscreennum == 9) {

       document.getElementById("tray14").style.visibility="hidden";
       document.getElementById("tray15").style.visibility="hidden";
       document.getElementById("prevButton").style.visibility = "visible";
       document.getElementById("reButton").style.visibility = "hidden";

       myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
       animateArrowATPosition(475,100,-90);//specify the left top and deg of arrow
       document.getElementById("riser").onclick = function() {
       document.getElementById("riser").onclick =" "
       myStopFunction();//stops blinking arrow
       document.getElementById("prevButton").style.visibility = "hidden";
       document.getElementById("sprue").style.animation = "sMove 1.2s 1 forwards";
       document.getElementById("riser").style.animation = "rMove 1.2s 1 forwards";
       setTimeout(function() {
              document.getElementById("nextButton").style.visibility = "visible";
              document.getElementById("prevButton").style.visibility = "visible";
          },1250);

      }

} else if(simsubscreennum == 10) {
    document.getElementById("tray2d").style.visibility="hidden";
    document.getElementById("prevButton").style.visibility = "visible";
    document.getElementById("reButton").style.visibility = "hidden";

      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(60,180,-90);
      document.getElementById("metalbucket").onclick = function() {
      document.getElementById("metalbucket").onclick =" "
      myStopFunction();
      document.getElementById("prevButton").style.visibility = "hidden";
      document.getElementById("metalbucket").style.visibility="hidden";
      document.getElementById("metalbucket1").style.visibility="visible";
      document.getElementById("metalbucket1").style.transformOrigin = "90% 20%";
      document.getElementById("metalbucket1").style.animation = "tray2Rotate 2.2s forwards "
      setTimeout(function(){
             document.getElementById("mflow").style.visibility="visible";
             document.getElementById("metal").style.animation = "metalMove 1.2s 1 forwards";
            setTimeout(function() {
                   document.getElementById("mflow").style.visibility="hidden";
                   document.getElementById("metalbucket1").style.visibility="hidden";
                   document.getElementById("nextButton").style.visibility = "visible";
                   document.getElementById("prevButton").style.visibility = "visible";
               },1250);

          },1050);

     }

} else if(simsubscreennum == 11) {

      document.getElementById("metalbucket1").style.visibility="hidden";
      document.getElementById("riser1").style.visibility="hidden";
      document.getElementById("sprue1").style.visibility="hidden";
      document.getElementById("2d").style.visibility="hidden";
      document.getElementById("2dbg").style.visibility="hidden";
      document.getElementById("funnel").style.visibility="hidden";
      document.getElementById("prevButton").style.visibility = "visible";
      document.getElementById("reButton").style.visibility = "hidden";

      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(520,250,-90);//specify the left top and deg of arrow
      document.getElementById("tray21").onclick = function() {
      document.getElementById("tray21").onclick =" "
      myStopFunction();//stops blinking arrow
      document.getElementById("prevButton").style.visibility = "hidden";
      document.getElementById("tray23").style.visibility = "visible";
      document.getElementById("tray21").style.visibility = "hidden";
      document.getElementById("tray24").style.visibility = "visible";
      document.getElementById("tray24").style.transformOrigin = "0% 90%";
      document.getElementById("tray24").style.animation = "trayRotate 1.0s forwards ";
        setTimeout(function() {
           document.getElementById("cast1").style.visibility="visible";
         },250);
      setTimeout(function() {
             document.getElementById("tray24").style.visibility = "hidden";
             document.getElementById("tray22").style.visibility="visible";

             myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
             animateArrowATPosition(545,250,-90);//specify the left top and deg of arrow
             document.getElementById("cast1").onclick = function() {
             document.getElementById("cast1").onclick =" "
             myStopFunction();
             document.getElementById("cast1").style.visibility = "hidden";
             document.getElementById("final1").style.visibility="visible";
             document.getElementById("final1").style.animation = "finalMove 1.2s forwards ";
             setTimeout(function() {
                    document.getElementById("prevButton").style.visibility = "visible";
                     document.getElementById("nextButton").style.visibility = "visible";
                 },1250);

             }

       },750);

    }

} else if(simsubscreennum == 12) {

       document.getElementById("final1").style.visibility="hidden";
       document.getElementById("tray22").style.visibility="hidden";
       document.getElementById("cast1").style.visibility = "hidden";
       document.getElementById("tray23").style.visibility = "hidden";
       document.getElementById("prevButton").style.visibility = "visible";
       document.getElementById("reButton").style.visibility = "hidden";
       myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
       animateArrowATPosition(640,300,-90);
       document.getElementById("grinder").onclick = function() {
       document.getElementById("grinder").onclick =" "
       myStopFunction();
       document.getElementById("prevButton").style.visibility = "hidden";
       document.getElementById("grinder").style.animation = "movegrinder 4.2s linear forwards ";
       setTimeout(function() {
              document.getElementById("f1").style.visibility = "hidden";
              document.getElementById("f2").style.visibility = "visible";
               setTimeout(function() {
                      document.getElementById("f2").style.visibility = "hidden";
                      document.getElementById("f").style.visibility = "visible";
                      setTimeout(function() {
                        document.getElementById("prevButton").style.visibility = "visible";
                             document.getElementById("reButton").style.visibility = "visible";
                         },1300);

                   },1000);

            },2000);

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
