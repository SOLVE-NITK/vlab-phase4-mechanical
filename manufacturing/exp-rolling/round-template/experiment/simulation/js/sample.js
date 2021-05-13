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
    document.getElementById("rm").style.visibility = "hidden";
    document.getElementById("rm1").style.visibility = "hidden";
    document.getElementById("wp0").style.visibility = "hidden";
    document.getElementById("prevButton").style.visibility = "visible";


    myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
    animateArrowATPosition(170,380,-90);//specify the left top and deg of arrow
    document.getElementById("wp").onclick = function() {
        document.getElementById("wp").onclick = " "//To stop further click on pattern
        myStopFunction();//stops blinking arrow
          document.getElementById("prevButton").style.visibility = "hidden";
        document.getElementById("wp").style.animation = "movewp 4.2s ease-out forwards ";//Since it runs for 1.2s
        setTimeout(function() {
            document.getElementById("nextButton").style.visibility = "visible";
            document.getElementById("prevButton").style.visibility = "visible";
        },4550);

  }

}  else if(simsubscreennum == 2) {
  document.getElementById("reButton").style.visibility = "hidden";
  document.getElementById("wp").style.visibility = "hidden";
  document.getElementById("1m").style.visibility = "hidden";
  document.getElementById("1off").style.visibility = "hidden";
  document.getElementById("prevButton").style.visibility = "visible";


 myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
 animateArrowATPosition(520,300,-90);//specify the left top and deg of arrow
 document.getElementById("2off").onclick = function() {
   document.getElementById("2off").onclick =" "
   myStopFunction();
     document.getElementById("prevButton").style.visibility = "hidden";
document.getElementById("d").style.visibility = "visible";
document.getElementById("s").style.visibility = "visible";
   document.getElementById("d").style.animation = "moved 2.2s ease-out forwards";


         setTimeout(function() {
           document.getElementById("d").style.visibility = "hidden";
           document.getElementById("s").style.visibility = "hidden";
           document.getElementById("prevButton").style.visibility = "visible";
           document.getElementById("nextButton").style.visibility = "visible";
        },2250);

    }
  }else if(simsubscreennum == 3) {
    document.getElementById("reButton").style.visibility = "hidden";
    document.getElementById("2wp").style.visibility = "hidden";
    document.getElementById("2m").style.visibility = "hidden";
    document.getElementById("2off").style.visibility = "hidden";
    document.getElementById("s").style.visibility = "hidden";
    document.getElementById("d").style.visibility = "hidden";
    document.getElementById("prevButton").style.visibility = "visible";


      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(525,300,-90);//specify the left top and deg of arrow
      document.getElementById("3off").onclick = function() {
          document.getElementById("3off").onclick =" "
          myStopFunction();
            document.getElementById("prevButton").style.visibility = "hidden";
          document.getElementById("3off").style.visibility = "hidden";
          document.getElementById("3on").style.visibility = "visible";
          setTimeout(function() {
                document.getElementById("3on").style.visibility = "hidden";
                document.getElementById("3wp").style.visibility = "hidden";
                document.getElementById("3m").style.visibility = "hidden";
                document.getElementById("roll1").style.visibility = "visible";
                document.getElementById("roll2").style.visibility = "visible";
                document.getElementById("l1").style.visibility = "visible";
                document.getElementById("l2").style.visibility = "visible";
                document.getElementById("sheet2").style.visibility = "visible";
                document.getElementById("sheet1").style.visibility = "visible";
                document.getElementById("blank").style.visibility = "visible";
                document.getElementById("blank1").style.visibility = "visible";

                myInt1 = setInterval(function(){ animatel1(); }, 300);
                setTimeout(function() {
                      document.getElementById("blank").style.animation = "moveblank 7.2s ease-out forwards";
                      document.getElementById("blank1").style.animation = "moveblank1 5.2s ease-out forwards";
                      document.getElementById("sheet2").style.animation = "movesheet 7.2s ease-out forwards";
                      myInt2 = setInterval(function(){ animatel2(); }, 300);
                      setTimeout(function() {
                            Stopl1();
                            Stopl2();


                            setTimeout(function() {
                                  document.getElementById("prevButton").style.visibility = "visible";
                                  document.getElementById("nextButton").style.visibility = "visible";
                              },1250);

                        },7200);

                   },200);

             },400);

      }

} else if(simsubscreennum == 4) {
  document.getElementById("reButton").style.visibility = "hidden";
  document.getElementById("3wp").style.visibility = "hidden";
  document.getElementById("3m").style.visibility = "hidden";
  document.getElementById("3off").style.visibility = "hidden";
  document.getElementById("3on").style.visibility = "hidden";
  document.getElementById("roll1").style.visibility = "hidden";
  document.getElementById("roll2").style.visibility = "hidden";
  document.getElementById("l1").style.visibility = "hidden";
  document.getElementById("l2").style.visibility = "hidden";
  document.getElementById("sheet2").style.visibility = "hidden";
  document.getElementById("sheet1").style.visibility = "hidden";
  document.getElementById("blank").style.visibility = "hidden";
  document.getElementById("blank1").style.visibility = "hidden";
  document.getElementById("prevButton").style.visibility = "visible";


        myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
        animateArrowATPosition(660,250,-90);//specify the left top and deg of arrow
        document.getElementById("4wp").onclick = function() {
            document.getElementById("4wp").onclick = " "//To stop further click on pattern
            myStopFunction();//stops blinking arrow
              document.getElementById("prevButton").style.visibility = "hidden";
            document.getElementById("4wp").style.animation = "move4wp 4.2s ease-out forwards ";//Since it runs for 1.2s
            setTimeout(function() {
               document.getElementById("prevButton").style.visibility = "visible";
                document.getElementById("nextButton").style.visibility = "visible";
            },4550);

      }


}if(simsubscreennum == 5) {
  document.getElementById("reButton").style.visibility = "hidden";
  document.getElementById("4wp").style.visibility = "hidden";
  document.getElementById("4m").style.visibility = "hidden";
  document.getElementById("4off").style.visibility = "hidden";
  document.getElementById("prevButton").style.visibility = "visible";


  myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
  animateArrowATPosition(600,200,-90);//specify the left top and deg of arrow
  document.getElementById("brush").onclick = function() {
  document.getElementById("brush").onclick = " "//To stop further click on pattern
   myStopFunction();//stops blin
    document.getElementById("prevButton").style.visibility = "hidden";
    document.getElementById("brush").style.animation = "movebrush 4.2s linear forwards ";
            setTimeout(function() {
                   document.getElementById("prevButton").style.visibility = "visible";
                   document.getElementById("reButton").style.visibility = "visible";
              },4450);

        }

    }
}


function animatel1()
{
     if (document.getElementById('l1').style.visibility=="hidden")
         document.getElementById('l1').style.visibility="visible";
     else
         document.getElementById('l1').style.visibility="hidden";
}

function animatel2()
{
     if (document.getElementById('l2').style.visibility=="hidden")
         document.getElementById('l2').style.visibility="visible";
     else
         document.getElementById('l2').style.visibility="hidden";
}



function Stopl1()
{
     clearInterval(myInt1);
     document.getElementById('l1').style.visibility="hidden";
}

function Stopl2()
{
     clearInterval(myInt2);
     document.getElementById('l2').style.visibility="hidden";
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
