function drawLine(x1,y1,x2,y2,ratio) {
	var cvs = document.getElementById("mycanvas2");
var ctx = cvs.getContext("2d");
ctx.beginPath();
	ctx.moveTo(x1,y1);
	x2 = x1 + ratio * (x2-x1);
	y2 = y1 + ratio * (y2-y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
  }
  
  function animate(x1,y1,x2,y2,ratio) {
	ratio = ratio || 0;
	drawLine(x1,y1,x2,y2,ratio);
	if(ratio<1) {
	  requestAnimationFrame(function() {
		animate(x1,y1,x2,y2,ratio + 0.02);
	  });
	}	 }

function drawShape()
  {
    var canvas = document.getElementById('mycanvas');              
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');           
      ctx.clearRect(0,0,400,500);
      ctx.beginPath();
      ctx.moveTo(50,190);
      ctx.lineTo(320,190);
      ctx.strokeStyle = "black";
      ctx.lineWidth=1;
      ctx.stroke();
      ctx.font = "15px Arial";
      ctx.closePath();
      ctx.beginPath()
      ctx.moveTo(50,190);
      ctx.arc(50,190,3,0,2*(Math.PI));
      ctx.fill();
      ctx.moveTo(320,190);
      ctx.arc(320,190,3,0,2*(Math.PI));
      ctx.fill();
    } else 
    {
    alert('You need Safari or Firefox 1.5+ to see this demo.');
    }
  } 

 function fun1(){
  clearcanvas();
  document.getElementById('canvas1').style.visibility="visible";
  document.getElementById('B').style.visibility="visible";
  document.getElementById('A').style.visibility="visible";
  document.getElementById('canvas0').style.visibility="hidden";
  document.getElementById('canvas2').style.visibility="hidden";
  drawShape();
  document.getElementById("blick").style.visibility="visible";   
  document.getElementById("blick").style.left="11px";
  document.getElementById("blick2").style.visibility="hidden";
  document.getElementById("blick6").style.visibility="hidden";
  }
  function fun3(){
    clearcanvas();
    document.getElementById('canvas3').style.visibility="visible";
    document.getElementById('canvas0').style.visibility="hidden";
    document.getElementById('canvas1').style.visibility="hidden";
    document.getElementById("image4").style.visibility="visible";  
    document.getElementById("image5").style.visibility="visible";  
    document.getElementById("title1").style.visibility="visible";
    document.getElementById('canvas2').style.visibility="hidden";
    canvasfun1();
    document.getElementById("blick2").style.visibility="hidden";
    document.getElementById("blick6").style.visibility="hidden";
    document.getElementById("titlestep").style.visibility="visible";
  document.getElementById("stepnumber").style.visibility="visible";
  document.getElementById("text").style.visibility="visible";
    }

function fun2(){
  clearcanvas();
  document.getElementById('canvas0').style.visibility="hidden";
  document.getElementById('canvas1').style.visibility="hidden";
  document.getElementById('canvas2').style.visibility="visible";
  document.getElementById('canvas3').style.visibility="hidden";
  document.getElementById('A1').style.visibility="visible";
  document.getElementById('B1').style.visibility="visible";
  canvasfun();
}
 function rotateimage(){
    var img = document.getElementById('image');
    img.style.transformOrigin='bottom left';
    img.style.transform = 'rotate(30deg)';
    img.style.opacity='0.5';
    setTimeout(function() {
    img.style.visibility="hidden";
    img.style.transform = 'rotate(-30deg)';
    }, 600);
    var canvas = document.getElementById('mycanvas');        
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(50, 192, 130, -(Math.PI/5), Math.PI/5);
    ctx.stroke();
    ctx.closePath();
    document.getElementById("blick").style.visibility="visible";
    document.getElementById("blick").style.left="315px";
}

function rotateimage1(){
var img = document.getElementById('image1');
img.style.transformOrigin='bottom right';
img.style.transform = 'rotate(-60deg)';
img.style.opacity='0.5';
setTimeout(function() {
img.style.visibility="hidden";
}, 700);
var canvas = document.getElementById('mycanvas');        
var ctx = canvas.getContext('2d');
ctx.strokeStyle = "black";
ctx.font = "15px Arial";
ctx.beginPath();
ctx.arc(300, 192, 130,4*(Math.PI)/5, 6*Math.PI/5);
ctx.stroke();
ctx.closePath();
setTimeout(function(){
ctx.beginPath();
ctx.moveTo(175,120);
ctx.lineTo(175,260);
ctx.stroke();
ctx.closePath();
ctx.moveTo(175,190);
ctx.arc(175,190,3,0,2*(Math.PI));
ctx.stroke();
ctx.font = "bold 13px Arial";
ctx.fillText("C", 188, 175);},900);
setTimeout(function(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.beginPath();
ctx.moveTo(50,190);
ctx.lineTo(175,190);
ctx.stroke();
ctx.moveTo(175,190);
ctx.arc(175,190,3,0,2*(Math.PI));
ctx.stroke();
ctx.fill();
ctx.moveTo(50,190);
ctx.arc(50,190,3,0,2*(Math.PI));
ctx.fill();

ctx.fillText("C", 185, 190);
ctx.fillText("AC is the bisection of line AB",50,280);
document.getElementById("B").style.visibility="hidden";
img.style.transform = 'rotate(30deg)';
},4000)}
function re(){
  var canvas = document.getElementById('mycanvas');        
  var ctx = canvas.getContext('2d');
  clearcanvas();
  canvasfun1();
  document.getElementById("title1").style.visibility="visible";
  document.getElementById("image4").style.visibility="visible";
  document.getElementById("titlestep").style.visibility="visible";
  document.getElementById("stepnumber").style.visibility="visible";
  document.getElementById("text").style.visibility="visible";
  document.getElementById("text").innerHTML="Draw a Line equal to diameter of Polygon";
  document.getElementById("stepnumber").innerHTML="&nbsp;1&nbsp;";


}
 function visibleia()
 {
     document.getElementById("image").style.visibility="visible";
     document.getElementById("blick").style.visibility="hidden";   
 }

 function visiblia()
 {
     document.getElementById("image1").style.visibility="visible";
     document.getElementById("blick").style.visibility="hidden";
 }

 function canvasfun(){
  document.getElementById('blick2').style.visibility="visible";
       var canvas = document.getElementById("mycanvas1");        
       j=0;                
       if (canvas.getContext) {
       var ctx = canvas.getContext('2d');
       ctx.beginPath();
       ctx.clearRect(0,0,800,800);
       ctx.moveTo(50,300);
       ctx.lineTo(400,50);
       ctx.moveTo(50,300);
       ctx.lineTo(430,300);
       ctx.strokeStyle = "black";
       ctx.lineWidth=1;
       ctx.stroke();
       ctx.font = "15px Arial";
       ctx.closePath();
       ctx.beginPath()
       ctx.arc(50,300,3,0,2*(Math.PI));
       ctx.fill();
       ctx.arc(50,300,140,-(Math.PI)/5.1,0);
       ctx.stroke();
       ctx.closePath();
       ctx.fillText("A",25,305);
       document.getElementById('A1').style.visibility="visible";
       document.getElementById('B1').style.visibility="visible";

    } else {
       alert('You need Safari or Firefox 1.5+ to see this demo.');
    }
    
 }
 var m=0;
 function roti(){
    var canvas=document.getElementById("mycanvas2");
    var ctx = canvas.getContext('2d');
    var img=document.getElementById("image4");
    if(i==0){
        ctx.beginPath();
        ctx.font='bold 13px Arial';
        ctx.arc(300-50,400-100,100,(Math.PI),0);
        ctx.stroke();
        document.getElementById("text").innerHTML="Draw a semicircle";
         document.getElementById("stepnumber").innerHTML="&nbsp;2&nbsp;";

        ctx.closePath(); }
       else if(i==1){
         
        ctx.beginPath();
        ctx.arc(213-50,350-100,3,0,2*Math.PI);
        ctx.fill();
        ctx.moveTo(250-50,313-100);
         ctx.arc(250-50,313-100,3,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();
            ctx.beginPath();
            ctx.moveTo(300-50,300-100);
            ctx.arc(300-50,300-100,3,0,2*Math.PI);
            ctx.fill();
            ctx.closePath();
    
            ctx.beginPath();
        ctx.moveTo(350-50,314-100);
        ctx.arc(350-50,313-100,3,0,2*Math.PI);
        ctx.fill();
            ctx.beginPath();
            ctx.moveTo(386-50,350-100);
            ctx.arc(386-50,350-100,3,0,2*Math.PI);
            ctx.fill();
            ctx.closePath();
            document.getElementById("text").innerHTML="For n sided,divide the semicircle in n parts";
         document.getElementById("stepnumber").innerHTML="&nbsp;3&nbsp;";
            }
    else if(i==2){
      ctx.beginPath();
    ctx.moveTo(300-50,400-100);
    ctx.lineTo(250-50,313-100);
    ctx.stroke();
    ctx.fillText("D",190,203);
    document.getElementById("text").innerHTML="Join the center to any part on the circle";
         document.getElementById("stepnumber").innerHTML="&nbsp;4&nbsp;";
    
    }
              else if(i==3){
            ctx.beginPath();
            ctx.arc(250-50,313-100,60,Math.PI/8,Math.PI/4);
            ctx.stroke();
            ctx.closePath();
            document.getElementById("text").innerHTML="Bisect this Line ";
         document.getElementById("stepnumber").innerHTML="&nbsp;5&nbsp;";
            
              }
              else if(i==4){
            ctx.beginPath();
        ctx.arc(300-50,400-100,60,-Math.PI/1.8,-Math.PI/2.3);
        ctx.stroke();
        ctx.closePath();
        
              }
              else if(i==5){
                ctx.beginPath();
                ctx.moveTo(275-50,356-100);
                ctx.lineTo(351-50,314-100);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.moveTo(350-50,400-100);
                ctx.lineTo(351-50,314-100);
                ctx.stroke();
                ctx.fillText("C",300,200);
                document.getElementById("text").innerHTML="Draw a perpendicular to the baseline";
         document.getElementById("stepnumber").innerHTML="&nbsp;6&nbsp;";
              }
              else if(i==6){
                ctx.arc(351-50,314-100,100,0,2*Math.PI);
                ctx.stroke();
                ctx.closePath();
                document.getElementById("text").innerHTML="Draw a circle with centre C";
         document.getElementById("stepnumber").innerHTML="&nbsp;7&nbsp;";
              }
              else if(i==7){
                ctx.beginPath();
                ctx.arc(201,214,100,1.5*Math.PI+Math.PI/7,1.5*Math.PI+Math.PI/5);
                ctx.stroke();
                ctx.closePath()
                ctx.beginPath();
                ctx.arc(401,214,100,1.5*Math.PI-Math.PI/5,1.5*Math.PI-Math.PI/7);
                ctx.stroke();
                ctx.closePath()
                document.getElementById("text").innerHTML="Create an arc from every vertice on Circle";
         document.getElementById("stepnumber").innerHTML="&nbsp;8&nbsp;";
              }
              else{
                ctx.strokeStyle="#000080";
                ctx.lineWidth=2;
                document.getElementById("text").innerHTML="Join the vertices to complete the Polygon";
                document.getElementById("stepnumber").innerHTML="&nbsp;9&nbsp;";
                animate(201,214,301-100*Math.cos(Math.PI/3),214-100*Math.sin(Math.PI/3));
                animate(401,214,301+100*Math.cos(Math.PI/3),214-100*Math.sin(Math.PI/3));
                animate(301-100*Math.cos(Math.PI/3),214-100*Math.sin(Math.PI/3),301+100*Math.cos(Math.PI/3),214-100*Math.sin(Math.PI/3));
                animate(301+100,214,301+100*Math.sin(Math.PI/6),214+100*Math.cos(Math.PI/6));
                animate(301+100*Math.sin(Math.PI/6),214+100*Math.cos(Math.PI/6),201+100*Math.sin(Math.PI/6),214+100*Math.cos(Math.PI/6));
                animate(201+100*Math.sin(Math.PI/6),214+100*Math.cos(Math.PI/6),201,214);
              }
              i++;
       }
 var j=0;
 function rotateimagea()
 {
     var img = document.getElementById('image3');
     var canvas = document.getElementById('mycanvas1');        
     var ctx = canvas.getContext('2d');
     img.style.transformOrigin='bottom left';
     if(j==0)
     {
     img.style.transform = 'rotate(-60deg)';
     
     ctx.strokeStyle = "black";
     ctx.font = "15px Arial";
     ctx.beginPath();
     ctx.arc(190,300,100,-(Math.PI)/3,-(Math.PI)/8);
     ctx.stroke();
     ctx.closePath();
     document.getElementById('blick6').style.visibility="visible";
     setTimeout(function() {
      img.style.transform = 'rotate(180deg)';
      img.style.visibility="hidden";
    }, 500);
     }
     else if(j==1){
     
      img.style.transform = 'rotate(60deg)';
      ctx.beginPath();
        ctx.arc(163,220,100,-(Math.PI)/8,(Math.PI)/8);
        ctx.stroke();
        ctx.save();
        setTimeout(function(){ 
        ctx.strokeStyle = "black";
        ctx.setLineDash([5, 3]);
        ctx.beginPath();
        ctx.moveTo(50,300);
        ctx.lineTo(400, 187);
        ctx.stroke();
      ctx.fillText("D",400,187);
      ctx.restore();
      img.style.visibility="hidden";
      img.style.transform="rotate(-5deg)";
      ctx.fillText("∠DAB is the bisection of ∠BAC",70,370);},900);
     }
      else{
        j=0;
      }
      ++j;
 }
 function visibli1()
 {
    var img =document.getElementById('image3');
    img.style.visibility="visible";
    document.getElementById('blick2').style.visibility="hidden";
    img.style.left="193px";
    img.style.top="218px";
 }
 function visibleia1()
 {     var img = document.getElementById('image3');
       document.getElementById('blick6').style.visibility="hidden";    
       img.style.visibility="visible";
       img.style.top="140px";
       img.style.left="163px"
       img.style.transform="rotate(-20deg)";
 }
 function canvasfun1(){
  var canvas=document.getElementById("mycanvas2");
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.font='bold 13px Arial';
  ctx.strokeStyle="black";
  ctx.lineWidth=1;
  ctx.clearRect(0,0,600,600);
  ctx.moveTo(200-50,400-100);
  ctx.lineTo(400-50,400-100);
  ctx.stroke();
  ctx.fillText("A",130,305);
  ctx.fillText("B",360,305);

  
  i=0;
 }
 function clearcanvas()
 {
  var canvas=document.getElementById("mycanvas2");
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.clearRect(0,0,800,800);
  document.getElementById('A1').style.visibility="hidden";
  document.getElementById('B1').style.visibility="hidden";
  document.getElementById('canvas0').style.visibility="hidden";
  document.getElementById('canvas2').style.visibility="hidden";
  document.getElementById("blick").style.visibility="hidden";  
  document.getElementById("blick").style.visibility="hidden";  
  document.getElementById("image").style.visibility="hidden";  
  document.getElementById("image1").style.visibility="hidden";  
  document.getElementById("image3").style.visibility="hidden";  
  document.getElementById("A").style.visibility="hidden";  
  document.getElementById("B").style.visibility="hidden";  
  document.getElementById("image4").style.visibility="hidden";  
  document.getElementById("blick2").style.visibility="hidden";
  document.getElementById("blick6").style.visibility="hidden";
  document.getElementById("title1").style.visibility="hidden";
  document.getElementById("titlestep").style.visibility="hidden";
  document.getElementById("stepnumber").style.visibility="hidden";
  document.getElementById("text").style.visibility="hidden";
  document.getElementById("image5").style.visibility="hidden";

 }
 
    var i;
    var w=0;
    