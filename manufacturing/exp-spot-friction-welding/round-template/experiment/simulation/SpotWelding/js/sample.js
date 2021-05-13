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
    //Write code for canvas 1 animations
    document.getElementById("m0").style.visibility = "hidden";
    document.getElementById("f0").style.visibility = "hidden";
     document.getElementById("w0").style.visibility = "hidden";
     document.getElementById("w01").style.visibility = "hidden";
     document.getElementById("b0").style.visibility = "hidden";
      document.getElementById("g0").style.visibility = "hidden";
      document.getElementById("grinder0").style.visibility = "hidden";
     document.getElementById("prevButton").style.visibility = "visible"
     document.getElementById("reButton").style.visibility = "hidden";



    myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
    animateArrowATPosition(580,370,-90);//specify the left top and deg of arrow
    document.getElementById("grinder").onclick = function() {
        document.getElementById("grinder").onclick = " "//To stop further click on pattern
        myStopFunction();//stops blinking arrow
        document.getElementById("prevButton").style.visibility = "hidden";

        document.getElementById("grinder").style.animation = "movePattern243 2.8s ease-out forwards ";//Since it runs for 1.2s
        setTimeout(function() {
            document.getElementById("grinder").style.visibility = "hidden";
            setTimeout(function() {
              document.getElementById("prevButton").style.visibility = "visible"
            document.getElementById("nextButton").style.visibility = "visible";
        },250);
    },2950)
  }


 }else if(simsubscreennum == 2) {

   document.getElementById("1w2").style.visibility = "hidden";
   document.getElementById("1w1").style.visibility = "hidden";
    document.getElementById("grinder").style.visibility = "hidden";
    document.getElementById("prevButton").style.visibility = "visible"
    document.getElementById("reButton").style.visibility = "hidden";

   myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
   animateArrowATPosition(240,310,-90);//specify the left top and deg of arrow
   document.getElementById("s2").onclick = function() {
     document.getElementById("s2").onclick =" "
     myStopFunction();
     document.getElementById("prevButton").style.visibility = "hidden";
     document.getElementById("s2").style.visibility = "hidden";
     document.getElementById("w2").style.animation = "movew2243 2.2s   ease-out forwards";
       setTimeout(function() {
         document.getElementById("w1").style.visibility = "hidden";
         document.getElementById("w2").style.visibility = "hidden";
         document.getElementById("lj").style.visibility = "visible";
         setTimeout(function() {
           document.getElementById("prevButton").style.visibility = "visible"
            document.getElementById("nextButton").style.visibility = "visible";
          },850);
        },2000)
      }
     }else if(simsubscreennum == 3) {

       document.getElementById("w1").style.visibility = "hidden";
       document.getElementById("w2").style.visibility = "hidden";
        document.getElementById("lj").style.visibility = "hidden";
        document.getElementById("s2").style.visibility = "hidden";
        document.getElementById("prevButton").style.visibility = "visible"
        document.getElementById("reButton").style.visibility = "hidden";

       myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
       animateArrowATPosition(620,320,-90);//specify the left top and deg of arrow
       document.getElementById("s3").onclick = function() {
       document.getElementById("s3").onclick = " "
       myStopFunction();
       document.getElementById("prevButton").style.visibility = "hidden";
       document.getElementById("s3").style.visibility = "hidden";
       document.getElementById("sd").style.visibility = "visible";
       document.getElementById("sdd").style.visibility = "visible";
       document.getElementById("on").style.visibility = "visible";
       setTimeout(function() {
               document.getElementById("sdd").style.animation = "movesdd243 1.9s  forwards";


               setTimeout(function() {
                 document.getElementById("sd").style.visibility = "hidden";
                 document.getElementById("sdd").style.visibility = "hidden";
                 setTimeout(function() {
                   document.getElementById("prevButton").style.visibility = "visible"
                      document.getElementById("nextButton").style.visibility = "visible";
                  },1000);

            },1950);

        },500);

   }

} else if(simsubscreennum == 4) {

  document.getElementById("3w").style.visibility = "hidden";
  document.getElementById("machine3").style.visibility = "hidden";
   document.getElementById("l3").style.visibility = "hidden";
   document.getElementById("3m").style.visibility = "hidden";
   document.getElementById("on").style.visibility = "hidden";
    document.getElementById("sdd").style.visibility = "hidden";
    document.getElementById("sd").style.visibility = "hidden";
    document.getElementById("s3").style.visibility = "hidden";
   document.getElementById("prevButton").style.visibility = "visible"
   document.getElementById("reButton").style.visibility = "hidden";

  myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
  animateArrowATPosition(590,220,-90);//specify the left top and deg of arrow
  document.getElementById("s4").onclick = function() {
  document.getElementById("s4").onclick = " "//To stop further click on pattern
      myStopFunction();//stops blinking arrow
      document.getElementById("prevButton").style.visibility = "hidden";
      document.getElementById("s4").style.visibility = "hidden";
      document.getElementById("lever").style.animation = "movelever1 1.8s ease-out forwards";
      document.getElementById("electrode").style.animation = "moveelectrode1 1.8s ease-out forwards";
      document.getElementById("spark").style.animation = "movespark1 1.8s ease-out forwards";
      setTimeout(function() {
        document.getElementById("spark").style.visibility = "hidden";
        document.getElementById("spot1").style.visibility = "visible";
        document.getElementById("lever").style.animation = "movelever2 3.0s ease-out forwards";
        document.getElementById("electrode").style.animation = "moveelectrode2 3.0s ease-out forwards";
         document.getElementById("spot1").style.animation = "movewp1 2.6s ease-out forwards";
        document.getElementById("wp4").style.animation = "movewp1 2.6s ease-out forwards";
        document.getElementById("spark").style.animation = "movespark2 3.0s ease-out forwards";
        setTimeout(function() {
          document.getElementById("spark").style.visibility = "hidden";
          document.getElementById("spot2").style.visibility = "visible";
          document.getElementById("lever").style.animation = "movelever3 3.0s ease-out forwards";
          document.getElementById("electrode").style.animation = "moveelectrode3 3.0s ease-out forwards";
          document.getElementById("wp4").style.animation = "movewp2 2.6s ease-out forwards";
          document.getElementById("spot1").style.animation = "movewp2 2.6s ease-out forwards";
          document.getElementById("spot2").style.animation = "movewp2 2.6s ease-out forwards";
          document.getElementById("spark").style.animation = "movespark3 4.5s ease-out none";
          setTimeout(function() {
             document.getElementById("spark").style.visibility = "hidden";
             document.getElementById("spot3").style.visibility = "visible";
             document.getElementById("lever").style.animation = "movelever4 1.8s ease-out forwards";
             document.getElementById("electrode").style.animation = "moveelectrode4 1.8s ease-out forwards";
             setTimeout(function() {
               document.getElementById("prevButton").style.visibility = "visible"
                 document.getElementById("nextButton").style.visibility = "visible";
             },2150);

          },4500);

       },4500);

   },3250);
  }



}
else if(simsubscreennum == 5) {
  document.getElementById("machine4").style.visibility = "hidden";
  document.getElementById("on4").style.visibility = "hidden";
   document.getElementById("wp4").style.visibility = "hidden";
   document.getElementById("spot1").style.visibility = "hidden";
   document.getElementById("spot2").style.visibility = "hidden";
    document.getElementById("spot3").style.visibility = "hidden";
    document.getElementById("electrode").style.visibility = "hidden";
    document.getElementById("lever").style.visibility = "hidden";
     document.getElementById("spark").style.visibility = "hidden";
     document.getElementById("s4").style.visibility = "hidden";
   document.getElementById("prevButton").style.visibility = "visible"
   document.getElementById("reButton").style.visibility = "hidden";


  myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
  animateArrowATPosition(620,320,-90);//specify the left top and deg of arrow
  document.getElementById("s5").onclick = function() {
     document.getElementById("s5").onclick =" "
     myStopFunction();
     document.getElementById("prevButton").style.visibility = "hidden";
     document.getElementById("s5").style.visibility = "hidden";
     document.getElementById("on1").style.visibility = "hidden";
     document.getElementById("wp5").style.animation = "movewp3 2.2s ease-out forwards";
     setTimeout(function() {
          document.getElementById("prevButton").style.visibility = "visible"
           document.getElementById("nextButton").style.visibility = "visible";
       },1250);



 }

}else if(simsubscreennum == 6) {
  document.getElementById("machine5").style.visibility = "hidden";
  document.getElementById("l5").style.visibility = "hidden";
   document.getElementById("h5").style.visibility = "hidden";
   document.getElementById("wp5").style.visibility = "hidden";
   document.getElementById("on1").style.visibility = "hidden";
    document.getElementById("g0").style.visibility = "hidden";
    document.getElementById("s5").style.visibility = "hidden";
   document.getElementById("prevButton").style.visibility = "visible"
   document.getElementById("reButton").style.visibility = "hidden";


  myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
  animateArrowATPosition(600,240,-90);//specify the left top and deg of arrow
  document.getElementById("brush1").onclick = function() {
  document.getElementById("brush1").onclick = " "
  myStopFunction();
  document.getElementById("prevButton").style.visibility = "hidden"
  document.getElementById("brush1").style.animation = "movebrush1 5.3s linear forwards";
      setTimeout(function() {
          document.getElementById("prevButton").style.visibility = "visible"
          document.getElementById("reButton").style.visibility = "visible";
       },5850);

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
