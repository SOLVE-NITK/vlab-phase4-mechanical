var x_angle;
var y_angle;
var intervalID,intervalID1,intervalID2,intervalID3,intervalID4,timeout1,timeout2,timeout3,timeout4;
var count = 1 ;
var prev_velocity = 0;
var prev_mass = 0;
var firstTime = true;
var hX,hY //Height point

function start()
{
  hide_height();
  stopFunctionAll();
  x_angle = 270;
  y_angle = 90;
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  makeBack(ctx);
  var x , y ;

  // first left line
  x=40;
  y=325;

  var velocity = document.getElementById("velocity_slider").value; //getting it from velocity slider id i.e., velocity_slider
  console.log(velocity);
  intervalID = setInterval(function(){ line(ctx,x++,y,intervalID,327.5); }, 3);	// line-1

  if( velocity >= 66.4 )	//root- 5gr
  {
    timeout1 = setTimeout(function(){ circle(ctx,630,true); },1325);	//circle	2600+2200 = 4800

    timeout2 = setTimeout( function(){ line2(ctx); } , 3170+100);	//line-2	10250 + 2200 = 12450 12450- 4800 = 7650

  }
  else if( velocity >= 42 )	// root-2gr
  {
    timeout1 = setTimeout(function(){ circle(ctx,405); },1350);	//circle forward

    timeout2 = setTimeout(function(){ rev_circle(ctx,270); },1225 + 1200);	//circle backward

    timeout3 = setTimeout(function(){ rev_line(ctx); },1225 + 1200 + 600); //line backward

  }
  else
  {
    timeout1 = setTimeout(function(){ circle(ctx,345); },1350);	//circle forward

    timeout2 = setTimeout(function(){ rev_circle(ctx,270); },1225 + 1000);	//circle backward

    timeout3 = setTimeout(function(){ rev_line(ctx); },1225 + 1000 + 325);  // line backward

  }



}

function rev_line(ctx) {

  x_value = 327.5;
  y_value = 325;

  intervalID3 = setInterval(function(){ rev_line_exec(ctx , x_value-- , y_value , intervalID3 , 40 );markHeightDot(ctx,hX,hY) }, 1);


  // here we'll show the result   and complete = true
  now_velocity = document.getElementById("velocity_slider").value;
  now_mass = document.getElementById("mass_slider").value;

  if( now_mass == prev_mass && now_velocity == prev_velocity )
  {
    console.log("dobara kiya bhaiya");
  }
  else {
    prev_mass = now_mass;
    prev_velocity = now_velocity;
    showResults();
  }

}

function rev_line_exec(ctx,x,y,intervalID,min_coordinate) {

  ctx.clearRect(0,0,800, 600);
  makeBack(ctx);
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(x , y , 15 , 0 , Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  if( x <= min_coordinate )
  stopFunction(intervalID);

}

function line(ctx,x,y,intervalID,max_coordinate)
{

  ctx.clearRect(0,0,800, 600);
  makeBack(ctx);
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(x , y , 15 , 0 , Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  if( x >= max_coordinate )
  stopFunction(intervalID);
  // console.log("line(ctx,x,y,intervalID,max_coordinate)");
}


function rev_circle(ctx, min_angle)
{
  intervalID2 = setInterval(function(){ rev_rotate(ctx, intervalID2 , min_angle);markHeightDot(ctx,hX,hY) }, 1);


  console.log(x_angle);
}

function rev_rotate(ctx , intervalID2 , min_angle)
{
  x_angle--;
  y_angle--;

  ctx.clearRect(0,0,800,600);
  makeBack(ctx);
  var circle = {centerX:327.5 , centerY : 250 , radius : 75}
  var ball = { x:200 , y: 325 };

  ball.x = circle.centerX + Math.cos((x_angle*Math.PI)/180) * circle.radius ;
  ball.y = circle.centerY + Math.sin((y_angle*Math.PI)/180) * circle.radius ;

  ctx.beginPath();
  ctx.arc(ball.x, ball.y , 15 , 0 , Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  if( x_angle <= min_angle ){

    stopFunction(intervalID2);
  }

}

function circle(ctx,max_angle)
{

  intervalID1 = setInterval(function(){ rotate(ctx, intervalID1 , max_angle) }, 1);

  // console.log("circle(ctx)");
}

function rotate(ctx , intervalID1 , max_coordinate1)
{
  if( x_angle < 450 )
  {
    x_angle+=0.75;
    y_angle+=0.75;
  }
  else
  {
    x_angle+=1;
    y_angle+=1;
  }

  ctx.clearRect(0,0,800,600);
  makeBack(ctx);
  var circle = {centerX:327.5 , centerY : 250 , radius : 75}
  var ball = { x:200 , y: 325 };

  ball.x = circle.centerX + Math.cos((x_angle*Math.PI)/180) * circle.radius ;
  ball.y = circle.centerY + Math.sin((y_angle*Math.PI)/180) * circle.radius ;

  ctx.beginPath();
  ctx.arc(ball.x, ball.y , 15 , 0 , Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  if( x_angle >= max_coordinate1 )
  {
    hX = ball.x;
    hY = ball.y ;
    stopFunction(intervalID1);
  }

  // console.log("rotate(ctx , intervalID1 , max_coordinate1)");

}

function line2( ctx , direction )
{
  var x1 = 327.5 ;
  var y1 = 325 ;
  intervalID2 = setInterval(function(){ line(ctx, x1++ , y1 , intervalID2 , 575) }, 3);

  // console.log("line2( ctx )");

  now_velocity = document.getElementById("velocity_slider").value;
  now_mass = document.getElementById("mass_slider").value;

  if( now_mass == prev_mass && now_velocity == prev_velocity )
  {
    console.log("dobara kiya bhaiya");
  }
  else {
    prev_mass = now_mass;
    prev_velocity = now_velocity;
    showResults();
  }

}
//to plot height point
function markHeightDot(ctx,xx,yy)
{
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(xx, yy , 15 , 0 , Math.PI*2,true);
  ctx.moveTo(xx,yy);
  ctx.lineTo(xx,340);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

}

function stopFunctionAll()
{
  clearInterval(intervalID);
  clearInterval(intervalID1);
  clearInterval(intervalID2);
  clearInterval(intervalID3);
  clearInterval(intervalID4);
  clearTimeout(timeout1);
  clearTimeout(timeout2);
  clearTimeout(timeout3);
  clearTimeout(timeout4);
  // will make boolean values false
  // console.log("stopFunctionAll()");
}

function stopFunction(intervalID)
{
  clearInterval(intervalID);
  // console.log("stopFunction(intervalID)");

}
function makeBack()
{
  // hide_height();s
  var c1 = document.getElementById("myCanvas");
  var ctx1 = c1.getContext("2d");
  ctx1.beginPath();
  ctx1.arc(327.5,250,90,0,2*Math.PI);
  ctx1.stroke();
  ctx1.beginPath();
  ctx1.moveTo(25,340);
  ctx1.lineTo(590,340);
  ctx1.stroke();
}

function changing_slider_value(callingID , input_number)
{
  // console.log(callingID);
  // console.log(input_number);

  x = document.getElementById(callingID).value;
  if( input_number == 1 )
  document.getElementById("velocity_number").value = x ;
  else
  document.getElementById("mass_number").value = x ;

}

function showResults() {

  find_height();

  this_velocity = document.getElementById("velocity_slider").value;
  this_mass = document.getElementById("mass_slider").value;
  var output = "";
  res1 = "Cart has enough velocity to complete the Circular Track\n";
  res2 = "Cart has enough velocity to reach b/w \'r\' & \'2r\' height\n";
  res3 = "Cart has enough velocity to reach b/w \'bottom\' & \'r\' height\n";
  var x="";
  if(!firstTime)
  {
    x = document.getElementById("textarea").value;
    x += "\n";
  }

  output = x + count +  ". Velocity taken = " + this_velocity + "   Mass taken = " + this_mass + "\n";

  if( prev_velocity >= 66.4 )
  output += res1;
  else if( prev_velocity >= 42 )
  output += res2;
  else
  output += res3;

  if( count == 4 )
  output += "\nNote: Conditions changes with velocity.";
  if( count == 6 )
  {
    document.getElementById("interaction").innerHTML = "See the results to get the whole concept";
    output += "\n Note: No change happens with the velocity.\nAs the conditions only depends upon the velocity of the cart & not the Mass.\n";
    output += "If the velocity >= square_root( 5 * g * r ) : then , it'll complete the path\n";
    output += "If the square_root( 2 * g * r ) <= velocity < square_root( 5 * g * r )  : then , it'll go beyond the height \'r\' but not complete the path.\n";
    output += "If the velocity < square_root( 2 * g * r ) : then , it'll not go beyond height 'r'\n";

    count = 0;
  }

  document.getElementById("textarea").value = output;
  count++;
  firstTime = false;
  if( count != 1 )
  interactive_div();
}
function clearResults() {

  document.getElementById("textarea").value = "Results will be shown here";
  firstTime = true;

}

function interactive_div() {
  console.log("interact krna " + count);
  if( count == 1 )
  {
    interact = "First, try to change the velocity!!";
    document.getElementById("interaction").innerHTML = interact;
  }
  else if( count == 2 )
  {
    interact = "Now, try to change the velocity above 67";
    document.getElementById("interaction").innerHTML = interact;
  }
  else if( count == 3 )
  {
    interact = "Good Going, make velocity b/w 42 & 66";
    document.getElementById("interaction").innerHTML = interact;
  }
  else if( count == 4 )
  {
    interact = "Good, Now, make velocity below 42";
    document.getElementById("interaction").innerHTML = interact;
  }
  else if( count == 5 )
  {
    interact = "Now, try to change the mass";
    document.getElementById("interaction").innerHTML = interact;
  }
  else if( count == 6 ) {
    interact = "Now, try to change the mass again";
    document.getElementById("interaction").innerHTML = interact;
  }
}

function find_height()
{
  var v = document.getElementById("velocity_slider").value;
  var height = ( v * v ) / 19.6 ;
  console.log(height);
  if( v < 66.4 )
  {
    document.getElementById("show_height").innerHTML = height + "  metres";
    show_height();
  }

}

function hide_height() {
  document.getElementById("stable").style.display = "none";
  document.getElementById("show_height").style.display = "none";
}

function show_height() {
  document.getElementById("stable").style.display = "block";
  document.getElementById("show_height").style.display = "block";
}

// interaction , textarea   &#13;&#10;
var x_angle;
var y_angle;
var intervalID,intervalID1,intervalID2,intervalID3,intervalID4,timeout1,timeout2,timeout3,timeout4;
var count = 1 ;
var prev_velocity = 0;
var prev_mass = 0;
var firstTime = true;
var hX,hY //Height point

function start()
{
  hide_height();
  stopFunctionAll();
  x_angle = 270;
  y_angle = 90;
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  makeBack(ctx);
  var x , y ;

  // first left line
  x=40;
  y=325;

  var velocity = document.getElementById("velocity_slider").value; //getting it from velocity slider id i.e., velocity_slider
  console.log(velocity);
  intervalID = setInterval(function(){ line(ctx,x++,y,intervalID,327.5); }, 3);	// line-1

  if( velocity >= 66.4 )	//root- 5gr
  {
    timeout1 = setTimeout(function(){ circle(ctx,630,true); },1325);	//circle	2600+2200 = 4800

    timeout2 = setTimeout( function(){ line2(ctx); } , 3170+100);	//line-2	10250 + 2200 = 12450 12450- 4800 = 7650

  }
  else if( velocity >= 42 )	// root-2gr
  {
    timeout1 = setTimeout(function(){ circle(ctx,405); },1350);	//circle forward

    timeout2 = setTimeout(function(){ rev_circle(ctx,270); },1225 + 1200);	//circle backward

    timeout3 = setTimeout(function(){ rev_line(ctx); },1225 + 1200 + 600); //line backward

  }
  else
  {
    timeout1 = setTimeout(function(){ circle(ctx,345); },1350);	//circle forward

    timeout2 = setTimeout(function(){ rev_circle(ctx,270); },1225 + 1000);	//circle backward

    timeout3 = setTimeout(function(){ rev_line(ctx); },1225 + 1000 + 325);  // line backward

  }



}

function rev_line(ctx) {

  x_value = 327.5;
  y_value = 325;

  intervalID3 = setInterval(function(){ rev_line_exec(ctx , x_value-- , y_value , intervalID3 , 40 );markHeightDot(ctx,hX,hY) }, 1);


  // here we'll show the result   and complete = true
  now_velocity = document.getElementById("velocity_slider").value;
  now_mass = document.getElementById("mass_slider").value;

  if( now_mass == prev_mass && now_velocity == prev_velocity )
  {
    console.log("dobara kiya bhaiya");
  }
  else {
    prev_mass = now_mass;
    prev_velocity = now_velocity;
    showResults();
  }

}

function rev_line_exec(ctx,x,y,intervalID,min_coordinate) {

  ctx.clearRect(0,0,800, 600);
  makeBack(ctx);
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(x , y , 15 , 0 , Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  if( x <= min_coordinate )
  stopFunction(intervalID);

}

function line(ctx,x,y,intervalID,max_coordinate)
{

  ctx.clearRect(0,0,800, 600);
  makeBack(ctx);
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(x , y , 15 , 0 , Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  if( x >= max_coordinate )
  stopFunction(intervalID);
  // console.log("line(ctx,x,y,intervalID,max_coordinate)");
}


function rev_circle(ctx, min_angle)
{
  intervalID2 = setInterval(function(){ rev_rotate(ctx, intervalID2 , min_angle);markHeightDot(ctx,hX,hY) }, 1);


  console.log(x_angle);
}

function rev_rotate(ctx , intervalID2 , min_angle)
{
  x_angle--;
  y_angle--;

  ctx.clearRect(0,0,800,600);
  makeBack(ctx);
  var circle = {centerX:327.5 , centerY : 250 , radius : 75}
  var ball = { x:200 , y: 325 };

  ball.x = circle.centerX + Math.cos((x_angle*Math.PI)/180) * circle.radius ;
  ball.y = circle.centerY + Math.sin((y_angle*Math.PI)/180) * circle.radius ;

  ctx.beginPath();
  ctx.arc(ball.x, ball.y , 15 , 0 , Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  if( x_angle <= min_angle ){

    stopFunction(intervalID2);
  }

}

function circle(ctx,max_angle)
{

  intervalID1 = setInterval(function(){ rotate(ctx, intervalID1 , max_angle) }, 1);

  // console.log("circle(ctx)");
}

function rotate(ctx , intervalID1 , max_coordinate1)
{
  if( x_angle < 450 )
  {
    x_angle+=0.75;
    y_angle+=0.75;
  }
  else
  {
    x_angle+=1;
    y_angle+=1;
  }

  ctx.clearRect(0,0,800,600);
  makeBack(ctx);
  var circle = {centerX:327.5 , centerY : 250 , radius : 75}
  var ball = { x:200 , y: 325 };

  ball.x = circle.centerX + Math.cos((x_angle*Math.PI)/180) * circle.radius ;
  ball.y = circle.centerY + Math.sin((y_angle*Math.PI)/180) * circle.radius ;

  ctx.beginPath();
  ctx.arc(ball.x, ball.y , 15 , 0 , Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  if( x_angle >= max_coordinate1 )
  {
    hX = ball.x;
    hY = ball.y ;
    stopFunction(intervalID1);
  }

  // console.log("rotate(ctx , intervalID1 , max_coordinate1)");

}

function line2( ctx , direction )
{
  var x1 = 327.5 ;
  var y1 = 325 ;
  intervalID2 = setInterval(function(){ line(ctx, x1++ , y1 , intervalID2 , 575) }, 3);

  // console.log("line2( ctx )");

  now_velocity = document.getElementById("velocity_slider").value;
  now_mass = document.getElementById("mass_slider").value;

  if( now_mass == prev_mass && now_velocity == prev_velocity )
  {
    console.log("dobara kiya bhaiya");
  }
  else {
    prev_mass = now_mass;
    prev_velocity = now_velocity;
    showResults();
  }

}
//to plot height point
function markHeightDot(ctx,xx,yy)
{
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(xx, yy , 15 , 0 , Math.PI*2,true);
  ctx.moveTo(xx,yy);
  ctx.lineTo(xx,340);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

}

function stopFunctionAll()
{
  clearInterval(intervalID);
  clearInterval(intervalID1);
  clearInterval(intervalID2);
  clearInterval(intervalID3);
  clearInterval(intervalID4);
  clearTimeout(timeout1);
  clearTimeout(timeout2);
  clearTimeout(timeout3);
  clearTimeout(timeout4);
  // will make boolean values false
  // console.log("stopFunctionAll()");
}

function stopFunction(intervalID)
{
  clearInterval(intervalID);
  // console.log("stopFunction(intervalID)");

}
function makeBack()
{
  // hide_height();s
  var c1 = document.getElementById("myCanvas");
  var ctx1 = c1.getContext("2d");
  ctx1.beginPath();
  ctx1.arc(327.5,250,90,0,2*Math.PI);
  ctx1.stroke();
  ctx1.beginPath();
  ctx1.moveTo(25,340);
  ctx1.lineTo(590,340);
  ctx1.stroke();
}

function changing_slider_value(callingID , input_number)
{
  // console.log(callingID);
  // console.log(input_number);

  x = document.getElementById(callingID).value;
  if( input_number == 1 )
  document.getElementById("velocity_number").value = x ;
  else
  document.getElementById("mass_number").value = x ;

}

function showResults() {

  find_height();

  this_velocity = document.getElementById("velocity_slider").value;
  this_mass = document.getElementById("mass_slider").value;
  var output = "";
  res1 = "Cart has enough velocity to complete the Circular Track\n";
  res2 = "Cart has enough velocity to reach b/w \'r\' & \'2r\' height\n";
  res3 = "Cart has enough velocity to reach b/w \'bottom\' & \'r\' height\n";
  var x="";
  if(!firstTime)
  {
    x = document.getElementById("textarea").value;
    x += "\n";
  }

  output = x + count +  ". Velocity taken = " + this_velocity + "   Mass taken = " + this_mass + "\n";

  if( prev_velocity >= 66.4 )
  output += res1;
  else if( prev_velocity >= 42 )
  output += res2;
  else
  output += res3;

  if( count == 4 )
  output += "\nNote: Conditions changes with velocity.";
  if( count == 6 )
  {
    document.getElementById("interaction").innerHTML = "See the results to get the whole concept";
    output += "\n Note: No change happens with the velocity.\nAs the conditions only depends upon the velocity of the cart & not the Mass.\n";
    output += "If the velocity >= square_root( 5 * g * r ) : then , it'll complete the path\n";
    output += "If the square_root( 2 * g * r ) <= velocity < square_root( 5 * g * r )  : then , it'll go beyond the height \'r\' but not complete the path.\n";
    output += "If the velocity < square_root( 2 * g * r ) : then , it'll not go beyond height 'r'\n";

    count = 0;
  }

  document.getElementById("textarea").value = output;
  count++;
  firstTime = false;
  if( count != 1 )
  interactive_div();
}
function clearResults() {

  document.getElementById("textarea").value = "Results will be shown here";
  firstTime = true;

}

function interactive_div() {
  console.log("interact krna " + count);
  if( count == 1 )
  {
    interact = "First, try to change the velocity!!";
    document.getElementById("interaction").innerHTML = interact;
  }
  else if( count == 2 )
  {
    interact = "Now, try to change the velocity above 67";
    document.getElementById("interaction").innerHTML = interact;
  }
  else if( count == 3 )
  {
    interact = "Good Going, make velocity b/w 42 & 66";
    document.getElementById("interaction").innerHTML = interact;
  }
  else if( count == 4 )
  {
    interact = "Good, Now, make velocity below 42";
    document.getElementById("interaction").innerHTML = interact;
  }
  else if( count == 5 )
  {
    interact = "Now, try to change the mass";
    document.getElementById("interaction").innerHTML = interact;
  }
  else if( count == 6 ) {
    interact = "Now, try to change the mass again";
    document.getElementById("interaction").innerHTML = interact;
  }
}

function find_height()
{
  var v = document.getElementById("velocity_slider").value;
  var height = ( v * v ) / 19.6 ;
  console.log(height);
  if( v < 66.4 )
  {
    document.getElementById("show_height").innerHTML = height + "  metres";
    show_height();
  }

}

function hide_height() {
  document.getElementById("stable").style.display = "none";
  document.getElementById("show_height").style.display = "none";
}

function show_height() {
  document.getElementById("stable").style.display = "block";
  document.getElementById("show_height").style.display = "block";
}

// interaction , textarea   &#13;&#10;
