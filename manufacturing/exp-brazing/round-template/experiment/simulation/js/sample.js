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
  if(simsubscreennum == 1) {
      document.getElementById("reButton").style.visibility = "hidden";
      document.getElementById("fr").style.visibility = "hidden";
      document.getElementById("bt").style.visibility = "hidden";
      document.getElementById("wh").style.visibility = "hidden";
      document.getElementById("gl").style.visibility = "hidden";
      document.getElementById("wp1").style.visibility = "hidden";
      document.getElementById("wp2").style.visibility = "hidden";
      document.getElementById("br").style.visibility = "hidden";
      document.getElementById("gr").style.visibility = "hidden";
    //Write code for canvas 1 animations
     myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
     animateArrowATPosition(600,210,-90);//specify the left top and deg of arrow
     document.getElementById("grinder").onclick = function() {
     document.getElementById("grinder").onclick = " "//To stop further click on pattern
     myStopFunction();//stops blinking arrow
     document.getElementById("grinder").style.animation = "movePattern 4.2s linear forwards ";

          setTimeout(function() {
               document.getElementById("brush").style.animation = "movebrush 4.2s linear forwards ";
               setTimeout(function() {
                    document.getElementById("prevButton").style.visibility = "visible";
                    document.getElementById("nextButton").style.visibility = "visible";

                 },4550);

           },4450);



   }

 }else if(simsubscreennum == 2) {
       document.getElementById("reButton").style.visibility = "hidden";
      document.getElementById("workpiece1").style.visibility = "hidden";
      document.getElementById("workpiece2").style.visibility = "hidden";
      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(210,250,-90);//specify the left top and deg of arrow
      document.getElementById("w2").onclick = function() {
      document.getElementById("w2").onclick =" "
      myStopFunction();
      document.getElementById("w1").style.animation = "movew1 1.2s ease-out forwards";
      document.getElementById("w2").style.animation = "movew2 1.2s   ease-out forwards";
      setTimeout(function() {
           document.getElementById("w1").style.visibility = "hidden";
           document.getElementById("w2").style.visibility = "hidden";
           document.getElementById("lj").style.visibility = "visible";
           setTimeout(function() {
               document.getElementById("prevButton").style.visibility = "visible";
               document.getElementById("nextButton").style.visibility = "visible";

           },300);

        },880);

     }

 }else if(simsubscreennum == 3) {
       document.getElementById("reButton").style.visibility = "hidden";
      document.getElementById("lj").style.visibility = "hidden";
      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(600,100,-90);//specify the left top and deg of arrow
      document.getElementById("bro").onclick = function() {
      document.getElementById("bro").onclick = " "//To stop further click on pattern
      myStopFunction();//stops blinking arrow
      document.getElementById("bro").style.animation = "movebro 5.0s linear forwards ";

           setTimeout(function() {

                     document.getElementById("prevButton").style.visibility = "visible";
                     document.getElementById("nextButton").style.visibility = "visible";


                },4850);
           }

} else if(simsubscreennum == 4) {
      document.getElementById("reButton").style.visibility = "hidden";
     document.getElementById("p2").style.visibility = "hidden";
     document.getElementById("p1").style.visibility = "hidden";
     document.getElementById("fx").style.visibility = "hidden";
      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(610,390,-90);//specify the left top and deg of arrow
      document.getElementById("fill").onclick = function() {
      document.getElementById("fill").onclick = " "
      myStopFunction();
        document.getElementById("fill").style.animation = "movefiller 2.6s linear forwards";
      setTimeout(function() {
          document.getElementById("prevButton").style.visibility = "visible";
          document.getElementById("nextButton").style.visibility = "visible";
        
        },2750);

      }

    }else if(simsubscreennum == 5) {
         document.getElementById("reButton").style.visibility = "hidden";
         document.getElementById("wp4").style.visibility = "hidden";
         myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
         animateArrowATPosition(610,280,-90);//specify the left top and deg of arrow
         document.getElementById("electrode").onclick = function() {
         document.getElementById("electrode").onclick = " "
         myStopFunction();
         // document.getElementById("spark").style.visibility = "visible";
         document.getElementById("spark").style.animation = "movespark 5.4s linear forwards";
         document.getElementById("electrode").style.animation = "moveelectrode 5.4s linear forwards";
         document.getElementById("weld").style.animation = "moveweld 5.4s linear forwards";
           document.getElementById("part").style.animation = "movepart 5.4s linear forwards";
         setTimeout(function() {
           document.getElementById("prevButton").style.visibility = "visible";
             document.getElementById("nextButton").style.visibility = "visible";

           },5550);

         }

       } else if(simsubscreennum == 6) {
             document.getElementById("filler").style.visibility = "hidden";
             document.getElementById("b1").style.visibility = "hidden";
             document.getElementById("wp5").style.visibility = "hidden";
             document.getElementById("dt").style.visibility = "hidden";
             myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
             animateArrowATPosition(620,260,-90);//specify the left top and deg of arrow
             document.getElementById("brush1").onclick = function() {
             document.getElementById("brush1").onclick = " "
             myStopFunction();
             document.getElementById("brush1").style.animation = "movebrush1 4.3s linear forwards";
             setTimeout(function() {
               document.getElementById("dust1").style.visibility = "hidden";
                       setTimeout(function() {
                           document.getElementById("prevButton").style.visibility = "visible";
                           document.getElementById("reButton").style.visibility = "visible";
                         },1950);

                    },2500);

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
