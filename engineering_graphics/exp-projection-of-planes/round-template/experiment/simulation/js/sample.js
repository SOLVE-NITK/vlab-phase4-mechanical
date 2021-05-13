//function to move to next canvas
function navNext()
{
	var canvas=document.getElementById("can");
var ctx=canvas.getContext("2d");
ctx.clearRect(0,0,800,600);
boom();
	document.getElementById("canvas0").style.visibility="hidden";
	document.getElementById("canvas1").style.visibility="visible";
	document.getElementById("nextButton").style.animation="none";
	document.getElementById("a").style.visibility="visible";
	document.getElementById("b").style.visibility="hidden";
	document.getElementById("c").style.visibility="hidden";
	document.getElementById("d").style.visibility="hidden";
	document.getElementById("e").style.visibility="hidden";
	document.getElementById("g").style.visibility="hidden";
	document.getElementById("f").style.visibility="hidden";
	document.getElementById("nextButton").style.animation="none";
	document.getElementById("a").style.animation="glowing 1000ms infinite";
	document.getElementById("pumptext").style.visibility="visible";
	document.getElementById("text").style.left="100px";
	document.getElementById("stepnumber").innerHTML="&nbsp;1&nbsp;";
document.getElementById("text").innerHTML="Draw the top view of Pentagon";

}

function boom() {
var canvas=document.getElementById("can");
var ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.lineWidth = "2";
ctx.strokeStyle = "black";
ctx.moveTo(30, 200);
ctx.lineTo(680, 200)
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="#3590ae";
	ctx.moveTo(100,300);
	ctx.lineTo(100,350);
	ctx.stroke();
	ctx.lineTo(100+50*Math.cos(Math.PI/10),350+50*Math.sin(Math.PI/10));
	ctx.stroke();
	ctx.lineTo(100+50*Math.cos(Math.PI/10)+50*Math.sin(Math.PI/5),350+50*Math.sin(Math.PI/10)-50*Math.cos(Math.PI/5));
	ctx.stroke();
	ctx.lineTo(100+50*Math.cos(Math.PI/10),300-50*Math.sin(Math.PI/10));
	ctx.stroke();
	ctx.lineTo(100,300);
	ctx.stroke();
ctx.closePath();
ctx.font='bold 15px Arial';
ctx.fillText("X",10,205);
ctx.fillText("VP",40,190);
ctx.fillText("HP",40,220);
ctx.fillText("Y",690,205);
ctx.fillText("a",90,300);
ctx.fillText("Solid lines",570,25);
ctx.fillText("Projection lines",570,45);
ctx.fillText("d",100+50*Math.cos(Math.PI/10),360+50*Math.sin(Math.PI/10));
ctx.fillText("c",105+50*Math.cos(Math.PI/10)+50*Math.sin(Math.PI/5),350+50*Math.sin(Math.PI/10)-50*Math.cos(Math.PI/5));
ctx.fillText("b",100+50*Math.cos(Math.PI/10),295-50*Math.sin(Math.PI/10));
ctx.fillText("e",90,350);
ctx.closePath();
ctx.beginPath();
ctx.moveTo(550,20);
ctx.arc(550,20,7,0,2*Math.PI);
ctx.fillStyle = "#3590ae";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.moveTo(550,40);
ctx.arc(550,40,7,0,2*Math.PI);
ctx.fillStyle = "#d9b28a";
ctx.fill();
ctx.closePath();

}


function drawLine(x1,y1,x2,y2,ratio) {
	var cvs = document.getElementsByTagName("canvas")[0];
var ctx = cvs.getContext("2d");
ctx.beginPath();
ctx.lineWidth=1;
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
	}	
  }
    
function a(){
	var cvs = document.getElementsByTagName("canvas")[0];
var ctx = cvs.getContext("2d");
ctx.fillStyle="black"
ctx.fillText("a'(e')",90,190);
ctx.fillText("d'(b')",90+50*Math.cos(Math.PI/10),190);
ctx.fillText("c'",105+50*Math.cos(Math.PI/10)+50*Math.sin(Math.PI/5),190);
ctx.beginPath();
ctx.strokeStyle="#3590ae";
ctx.moveTo(100,200);
ctx.lineTo(100+50*Math.cos(Math.PI/10)+50*Math.sin(Math.PI/5),200);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.strokeStyle="#d9b28a";
animate(100,200,100,300,0);
animate(100+50*Math.cos(Math.PI/10),200,100+50*Math.cos(Math.PI/10),350+50*Math.sin(Math.PI/10));
animate(100+50*Math.cos(Math.PI/10)+50*Math.sin(Math.PI/5),200,100+50*Math.cos(Math.PI/10)+50*Math.sin(Math.PI/5),350+50*Math.sin(Math.PI/10)-50*Math.cos(Math.PI/5));
document.getElementById("c").style.visibility="visible";
ctx.closePath();
document.getElementById("stepnumber").innerHTML="&nbsp;2&nbsp;";
document.getElementById("text").innerHTML="Draw the front view of Pentagon";
document.getElementById("a").style.animation="none";
	document.getElementById("c").style.animation="glowing 1000ms infinite";
	document.getElementById("nextButton").style.visibility="hidden";
	document.getElementById("reset").style.visibility="visible";
}
function b()
{var cvs = document.getElementsByTagName("canvas")[0];
var ctx = cvs.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="black";
document.getElementById("b").style.visibility="visible";
ctx.arc(250,200,25,-Math.PI/6,0);
ctx.stroke();
ctx.fillText("θ",288,195);
ctx.closePath();
ctx.beginPath();
	ctx.strokeStyle="#3590ae";
	animate(250,200,250+50*Math.cos(Math.PI/6)/(2*Math.tan(Math.PI/10)),200-50*Math.sin(Math.PI/6)/(2*Math.tan(Math.PI/10)))
ctx.closePath();
document.getElementById("stepnumber").innerHTML="&nbsp;3&nbsp;";
document.getElementById("text").innerHTML="Draw the apparent front view of Pentagon inclined to θ ";
document.getElementById("c").style.animation="none";
	document.getElementById("b").style.animation="glowing 1000ms infinite";

}
function c()
{
	var cvs = document.getElementsByTagName("canvas")[0];
	var ctx = cvs.getContext("2d");
	document.getElementById("d").style.visibility="visible";
	ctx.fillText("a'(e')",230,190);
ctx.fillText("d'(b')",225+50*Math.cos(Math.PI/10),169);
ctx.fillText("c'",235+50*Math.cos(Math.PI/10)+50*Math.sin(Math.PI/5),155);
ctx.fillText("a",240,300);
ctx.fillText("d",250+50*Math.cos(Math.PI/10),360+50*Math.sin(Math.PI/10));
ctx.fillText("c",240+50*Math.cos(Math.PI/10)+50*Math.sin(Math.PI/5),350+50*Math.sin(Math.PI/10)-50*Math.cos(Math.PI/5));
ctx.fillText("b",250+50*Math.cos(Math.PI/10),295-50*Math.sin(Math.PI/10));
ctx.fillText("e",240,350);
document.getElementById("stepnumber").innerHTML="&nbsp;4&nbsp;";
document.getElementById("text").innerHTML="Draw the top view of Pentagon inclined to θ";
document.getElementById("b").style.animation="none";
	document.getElementById("d").style.animation="glowing 1000ms infinite";
ctx.beginPath();
	ctx.strokeStyle="#d9b28a";
	animate(250,200,250,400);
	animate(250+50*Math.cos(Math.PI/10),200-50*Math.cos(Math.PI/10)*Math.tan(Math.PI/6),250+50*Math.cos(Math.PI/10),400);
	animate(100,350,250+50*Math.cos(Math.PI/6)/(2*Math.tan(Math.PI/10)),350);
	animate(100,300,250+50*Math.cos(Math.PI/6)/(2*Math.tan(Math.PI/10)),300);
	animate(100+50*Math.cos(Math.PI/10),300-50*Math.sin(Math.PI/10),250+50*Math.cos(Math.PI/6)/(2*Math.tan(Math.PI/10)),300-50*Math.sin(Math.PI/10));
	animate(100+50*Math.cos(Math.PI/10),350+50*Math.sin(Math.PI/10),250+50*Math.cos(Math.PI/6)/(2*Math.tan(Math.PI/10)),350+50*Math.sin(Math.PI/10));
	animate(100+50/(2*Math.tan(Math.PI/10)),325,250+50*Math.cos(Math.PI/6)/(2*Math.tan(Math.PI/10)),325);
	animate(250+50*Math.cos(Math.PI/6)/(2*Math.tan(Math.PI/10)),200-50*Math.sin(Math.PI/6)/(2*Math.tan(Math.PI/10)),250+50*Math.cos(Math.PI/6)/(2*Math.tan(Math.PI/10)),400);
}
function d() {
var cvs = document.getElementsByTagName("canvas")[0];
	var ctx = cvs.getContext("2d");
	document.getElementById("e").style.visibility="visible";
	document.getElementById("stepnumber").innerHTML="&nbsp;5&nbsp;";
document.getElementById("text").innerHTML="Draw the side on the HP making of Pentagon inclined to α";
	ctx.beginPath();
	ctx.strokeStyle="#00688B";
	ctx.lineWidth = "2";
	ctx.moveTo(250,300);
	ctx.lineTo(250,350);
	ctx.lineTo(250+50*Math.cos(Math.PI/10),350+50*Math.sin(Math.PI/10));
	ctx.lineTo(250+50*Math.cos(Math.PI/6)/(2*Math.tan(Math.PI/10)),325);
	ctx.lineTo(250+50*Math.cos(Math.PI/10),300-50*Math.sin(Math.PI/10));
	ctx.lineTo(250,300);
	ctx.stroke();
	ctx.closePath();
	document.getElementById("d").style.animation="none";
	document.getElementById("e").style.animation="glowing 1000ms infinite";
  }
  function e() {
	var cvs = document.getElementsByTagName("canvas")[0];
	var ctx = cvs.getContext("2d");
	document.getElementById("f").style.visibility="visible";
	document.getElementById("stepnumber").innerHTML="&nbsp;6&nbsp;";
document.getElementById("text").innerHTML="Draw the actual front view of pentagon";
	ctx.beginPath();
	ctx.arc(400,200,30,0,Math.PI/3);
	ctx.stroke();
	ctx.strokeStyle="black";
	document.getElementById("e").style.visibility="hidden";
	ctx.moveTo(400,200);
	ctx.fillText("α",430,225);
	ctx.fillText("a",438,290);
ctx.fillText("d",470+50*Math.cos(Math.PI/10),315+50*Math.sin(Math.PI/10));
ctx.fillText("c",450+50*Math.cos(Math.PI/10)+50*Math.sin(Math.PI/5),300+50*Math.sin(Math.PI/10)-50*Math.cos(Math.PI/5));
ctx.fillText("b",435+50*Math.cos(Math.PI/10),260-50*Math.sin(Math.PI/10));
ctx.fillText("e",457,335);
	ctx.lineTo(400+200*Math.cos(Math.PI/3),200+200*Math.sin(Math.PI/3));
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.strokeStyle="#0c81a8";
	ctx.lineWidth = "2";
	ctx.moveTo(400+100*Math.cos(Math.PI/3),200+100*Math.sin(Math.PI/3));
	ctx.lineTo(400+100*Math.cos(Math.PI/3)+50*Math.cos(Math.PI/10)*Math.cos(Math.PI/3.75),200+100*Math.sin(Math.PI/3)-50*Math.cos(Math.PI/10)*Math.sin(Math.PI/3.75));
	ctx.lineTo(400+125*Math.cos(Math.PI/3)+50*Math.cos(Math.PI/6)*Math.cos(Math.PI/6)/(2*Math.tan(Math.PI/10)),200+125*Math.sin(Math.PI/3)-25*Math.sin(Math.PI/3)/(2*Math.tan(Math.PI/10)));
	ctx.lineTo(400+150*Math.cos(Math.PI/3)+50*Math.cos(Math.PI/15)*Math.cos(Math.PI/10),200+150*Math.sin(Math.PI/3)-50*Math.cos(Math.PI/10)*Math.sin(Math.PI/15));
	ctx.lineTo(400+150*Math.cos(Math.PI/3),200+150*Math.sin(Math.PI/3));
	ctx.stroke();
	document.getElementById("e").style.animation="none";
	document.getElementById("f").style.animation="glowing 1000ms infinite";
  }
  function f(){
	var cvs = document.getElementsByTagName("canvas")[0];
	var ctx = cvs.getContext("2d");
	document.getElementById("g").style.visibility="visible";
	ctx.fillText("a'",438,196);
ctx.fillText("d'",475+50*Math.cos(Math.PI/10),173);
ctx.fillText("c'",445+50*Math.cos(Math.PI/10)+50*Math.sin(Math.PI/5),158);
ctx.fillText("b'",420+50*Math.cos(Math.PI/10),170);
	ctx.beginPath();
	ctx.strokeStyle="#d9b28a";
	animate(400+100*Math.cos(Math.PI/3),200+100*Math.sin(Math.PI/3),400+100*Math.cos(Math.PI/3),160);
	animate(400+125*Math.cos(Math.PI/3)+50*Math.cos(Math.PI/6)*Math.cos(Math.PI/6)/(2*Math.tan(Math.PI/10)),200+125*Math.sin(Math.PI/3)-25*Math.sin(Math.PI/3)/(2*Math.tan(Math.PI/10)),400+125*Math.cos(Math.PI/3)+50*Math.cos(Math.PI/6)*Math.cos(Math.PI/6)/(2*Math.tan(Math.PI/10)),160);
	animate(400+150*Math.cos(Math.PI/3)+50*Math.cos(Math.PI/15)*Math.cos(Math.PI/10),200+150*Math.sin(Math.PI/3)-50*Math.cos(Math.PI/10)*Math.sin(Math.PI/15),400+150*Math.cos(Math.PI/3)+50*Math.cos(Math.PI/15)*Math.cos(Math.PI/10),160);
	animate(400+150*Math.cos(Math.PI/3),200+150*Math.sin(Math.PI/3),400+150*Math.cos(Math.PI/3),160);
	animate(250+50*Math.cos(Math.PI/10),200-50*Math.cos(Math.PI/10)*Math.tan(Math.PI/6),600,200-50*Math.cos(Math.PI/10)*Math.tan(Math.PI/6));
	animate(250+50*Math.cos(Math.PI/6)/(2*Math.tan(Math.PI/10)),200-50*Math.sin(Math.PI/6)/(2*Math.tan(Math.PI/10)),600,200-50*Math.sin(Math.PI/6)/(2*Math.tan(Math.PI/10)));
	animate(400+100*Math.cos(Math.PI/3)+50*Math.cos(Math.PI/10)*Math.cos(Math.PI/3.75),200+100*Math.sin(Math.PI/3)-50*Math.cos(Math.PI/10)*Math.sin(Math.PI/3.75),400+100*Math.cos(Math.PI/3)+50*Math.cos(Math.PI/10)*Math.cos(Math.PI/3.75),160);
	ctx.closePath();
	document.getElementById("f").style.animation="none";
	document.getElementById("g").style.animation="glowing 1000ms infinite";
}
function g(){
	var cvs = document.getElementsByTagName("canvas")[0];
	var ctx = cvs.getContext("2d");
	ctx.beginPath();
	ctx.strokeStyle="#3590ae";
	ctx.lineWidth = "2";
	ctx.moveTo(400+100*Math.cos(Math.PI/3),200);
	ctx.lineTo(400+100*Math.cos(Math.PI/3)+50*Math.cos(Math.PI/10)*Math.cos(Math.PI/3.75),200-50*Math.cos(Math.PI/10)*Math.tan(Math.PI/6));
	ctx.lineTo(400+125*Math.cos(Math.PI/3)+50*Math.cos(Math.PI/6)*Math.cos(Math.PI/6)/(2*Math.tan(Math.PI/10)),200-50*Math.sin(Math.PI/6)/(2*Math.tan(Math.PI/10)));
	ctx.lineTo(400+150*Math.cos(Math.PI/3)+50*Math.cos(Math.PI/15)*Math.cos(Math.PI/10),200-50*Math.cos(Math.PI/10)*Math.tan(Math.PI/6));
	ctx.lineTo(400+150*Math.cos(Math.PI/3),200);
	ctx.stroke();
	document.getElementById("text").innerHTML="The projection in the right is the true projection of the pentagon";
	document.getElementById("pumptext").style.visibility="hidden";
	ctx.closePath();
	document.getElementById("text").style.left="30px";
	document.getElementById("g").style.animation="none";
	ctx.fillText("Front View",550,130);
	ctx.fillText("Top View",550,350);
}