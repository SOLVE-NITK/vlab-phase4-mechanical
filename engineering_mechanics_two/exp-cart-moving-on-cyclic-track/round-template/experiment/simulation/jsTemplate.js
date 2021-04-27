var circle = {centerX:327.5 , centerY : 250 , radius : 75};   // coordinates of the roller coaster circle
var ball = { x:200 , y: 325 };  // initial coordinates of the roller coaster (when started)
var intervalID, timeoutID;  // interval and timeout ID's for the setInterval functions to stop them whenever we want
var x = 0 , y = 0;  // coordinates of ball everytime it moves on any line
var rt_angle = 0  , end_angle = 0  , y_angle = 0 ;    // angles that decides the position of roller coaster on the circular track
var show_x = 0 , show_y = 0  ;  // showiing x & y values
var velocity = 0; // velocity of the roller coaster
var count = 1 ; // counting the iterations done by user
var prev_velocity = 0, prev_mass = 0;  // previous values taken by user
var firstTime = true;   // shoows whether its first iteration of user(of interaction box purposes)
var height = 0; // calculated height by given inputs
var to_show_height = false; // whether to show height or not . used in MakeBack() function
var showing_height_line_x = 0 , showing_height_line_y = 0 , height_value = 0;   // showing values of all the x, y & height
var speed = 0.1;  // initial speed of the ball
var to_show_velocity = false; // used in makeBack function to know whether to show velocity or not
var timeout_or_not = true;  // shows whther a timeout is triggered or not
var stopped_velocity ;  // cqlxulates the velocity when the stop button is pressed
var moving = false; // shows whether the cart is moving

function resetAll() // it is triggered when reset button is called
{

  if( moving )  // if moving is true, means, cart is moving, so,  will not stop untill the cart stops.
  {
    document.getElementById("RESETALL").innerHTML = "Stop Cart First";
    setTimeout(function(){
      document.getElementById("RESETALL").innerHTML = "" ;
    } , 2000 );
    return;
  }

  x = 0;  // put all variables to initial as decribed above
  y = 0;
  rt_angle = 0 ;
  end_angle = 0 ;
  y_angle = 0 ;
  show_x = 0 ;
  show_y = 0 ;
  velocity = 0;
  count = 1 ;
  // console.log(count);
  prev_velocity = 0;
  prev_mass = 0;
  firstTime = true;
  height = 0;
  to_show_height = false;
  showing_height_line_x = 0;
  showing_height_line_y = 0 ;
  height_value = 0;
  speed = 0.1;
  to_show_velocity = false;
  timeout_or_not = true;
  moving = false;
  document.getElementById("textarea").value = "Results will be shown here.";
  document.getElementById("interaction").innerHTML = "First, try to change the velocity!! ";

  var c = document.getElementById("simscreen");
  var ctx = c.getContext("2d");
  ctx.clearRect(0,0,800,600);
  varinit();
  document.getElementById("start").style.display = "block"; // shows start button
  document.getElementById("stop").style.display = "none"; // hides stop button

}

function makeInitialBall()  // shows ball with intial roller coaster path
{
  var c = document.getElementById("simscreen");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(40 , 325 , 15 , 0 , Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  document.getElementById("stop").style.display = "none";

}



function line( ctx , x , y , max_coordinate , ltor )    // this function is used with 
{
  ctx.clearRect(0,0,800, 600);
  makeBack(ctx);
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(x , y , 15 , 0 , Math.PI*2,true);
  ctx.closePath();
  ctx.fill();


  if( ltor && x >= max_coordinate )
  {
    clearInterval(intervalID);
    if( x < 330 )
    {
      rt_angle = 270 ;
      y_angle = 90 ;
      intervalID = setInterval(function(){ rotate_ac( ctx , end_angle ); }, speed);
    }
    else {
      $('#velocity_slider').slider( 'enable' );
      $('#mass_slider').slider( 'enable' );
  		now_velocity=$('#velocity_slider').slider("value");
  		now_mass=$('#mass_slider').slider("value");
      document.getElementById("start").style.display = "block";
      document.getElementById("stop").style.display = "none";
      if( now_mass == prev_mass && now_velocity == prev_velocity )
      {
        console.log("Same readings were tried again");
      }
      else
      {
        prev_mass = now_mass;
        prev_velocity = now_velocity;
        showResults();
        moving = false;
        document.getElementById("display_or_not").style.display = "none";
      }
    }
    // animation terminating point
  }
  else if( !ltor && x <= max_coordinate )
  {
    clearInterval(intervalID);
    $('#velocity_slider').slider( 'enable' );
    $('#mass_slider').slider( 'enable' );
    document.getElementById("start").style.display = "block";
    document.getElementById("stop").style.display = "none";
    now_velocity=$('#velocity_slider').slider("value");
		now_mass=$('#mass_slider').slider("value");

    if( now_mass == prev_mass && now_velocity == prev_velocity )
    {
      console.log("Same readings were tried again");
    }
    else
    {
      prev_mass = now_mass;
      prev_velocity = now_velocity;
      showResults();
      moving = false;

      document.getElementById("display_or_not").style.display = "none";
    }
    // animation terminating point
  }
  // console.log("line(ctx,x,y,intervalID,max_coordinate)");
}

function rotate_ac( ctx , end_angle ) {
  if( rt_angle < 450 )
  {
    rt_angle+=0.75;
    y_angle+=0.75;
  }
  else
  {
    rt_angle+=1;
    y_angle+=1;
  }

  ctx.clearRect(0,0,800,600);
  makeBack(ctx);

  ball.x = circle.centerX + Math.cos((rt_angle*Math.PI)/180) * circle.radius ;
  ball.y = circle.centerY + Math.sin((y_angle*Math.PI)/180) * circle.radius ;

  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(ball.x, ball.y , 15 , 0 , Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  if( rt_angle >= end_angle )
  {
    clearInterval(intervalID);
    if( rt_angle > 500 )
      intervalID = setInterval(function () { line( ctx , x++ , y , 575 , true ) }, speed);
    else
    {
      show_x = ball.x;
      show_y = ball.y;
      showing_height_line_x = circle.centerX + Math.cos((rt_angle*Math.PI)/180) * 90;
      showing_height_line_y = circle.centerY + Math.sin((y_angle*Math.PI)/180) * 90;
      to_show_height = true;
      height_value = Math.round( height * 1000 ) / 1000 ;

      setTimeout( function() {
        if(timeout_or_not)
          intervalID = setInterval(function () { rotate_c( ctx ) }, speed);
        } , 500 );

    }
  }
}

function rotate_c( ctx )
{

  rt_angle -= 0.75;
  y_angle -= 0.75;

  ctx.clearRect(0,0,800,600);
  makeBack(ctx);
  //showing_div is invoked

  // show_height();
  var circle = {centerX:327.5 , centerY : 250 , radius : 75}
  var ball = { x:200 , y: 325 };

  ball.x = circle.centerX + Math.cos((rt_angle*Math.PI)/180) * circle.radius ;
  ball.y = circle.centerY + Math.sin((y_angle*Math.PI)/180) * circle.radius ;

  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(ball.x, ball.y , 15 , 0 , Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  if( rt_angle <= 270 )
  {
    clearInterval(intervalID);
    intervalID = setInterval(function(){line( ctx , x-- , y , 40 , false );},speed);
  }
}

function stopAll() {
  moving = false;
  timeout_or_not = false;
  clearTimeout(timeoutID);
  clearInterval(intervalID);

  $('#velocity_slider').slider( 'enable' );
  $('#mass_slider').slider( 'enable' );
  showing_height_line_x = circle.centerX + Math.cos((rt_angle*Math.PI)/180) * 90;
  showing_height_line_y = circle.centerY + Math.sin((y_angle*Math.PI)/180) * 90;
  to_show_height = true;
  to_show_velocity = true;
  height_value = 340 - showing_height_line_y ;
  height_value = Math.round( height_value * 1000 ) / 1000 ;

  stopped_velocity = Math.sqrt((velocity * velocity )-(19.6 * height_value)) ;
  stopped_velocity = Math.round( stopped_velocity * 100 ) / 100 ;
  // console.log(height_value,stopped_velocity);
  if( x < 327.5 )
  {
    height_value = 0 ;
    showing_height_line_x = x ;
    showing_height_line_y = 340;
    stopped_velocity = velocity;
  }

    to_add = "Ball stopped at Height: " + height_value + " m   & at Velocity: " + stopped_velocity + " m/s";
    if ( firstTime )
    {
      document.getElementById("textarea").value = to_add;
      firstTime = false;
    }
    else {
      output = document.getElementById("textarea").value;
      output += "\n" + to_add;
      document.getElementById("textarea").value = output;
    }
  makeBack();
  document.getElementById("start").style.display = "block";
  document.getElementById("stop").style.display = "none";


}
function start()  // this function is called when start button is called
{

  moving = true;
  timeout_or_not = true;
  document.getElementById("start").style.display = "none";
  document.getElementById("stop").style.display = "block";

  document.getElementById("display_or_not").style.display = "block";

  $('#velocity_slider').slider( 'disable' );
  $('#mass_slider').slider( 'disable' );

	to_show_height = false;
  to_show_velocity = false;

  x = 40 ;
  y = 325 ;
  var c = document.getElementById("simscreen");
  var ctx = c.getContext("2d");
  velocity=$('#velocity_slider').slider("value");
  mass = $('#mass_slider').slider("value");


  document.getElementById("display_velocity").innerHTML = velocity;
  document.getElementById("display_mass").innerHTML = mass;

  height = (velocity * velocity ) / 19.6 ;

  speed = ( 100 / velocity);

  show_height = true;

  if( height >= 180 )
  {
    end_angle = 630;
    to_show_height = false;
    height_value = undefined;
  }

  else if( height >= 90 )
    end_angle = 90 + (((Math.asin( ( height - 90 ) / 90 ))* 180)/Math.PI) + 270;
  else
    end_angle = (((Math.acos( ( 90 - height ) / 90 ))* 180)/Math.PI) + 270;

  intervalID = setInterval(function(){ line( ctx , x++ , y , 327.5 , true ); } , speed);

}


function makeBack()
{
  var c1 = document.getElementById("simscreen");
  var ctx1 = c1.getContext("2d");
  ctx1.lineWidth = 5;
  ctx1.strokeStyle = "#000000";
  ctx1.beginPath();
  ctx1.arc(327.5,250,92.5,0,2*Math.PI);
  ctx1.stroke();
  ctx1.beginPath();
  ctx1.moveTo(25,342.5);
  ctx1.lineTo(590,342.5);
  ctx1.stroke();
  if( to_show_height )
  {
    constant = 450;
    if( to_show_velocity )
      constant = 590;
    ctx1.fillStyle = "#008000";
    ctx1.strokeStyle = "#008000";
    ctx1.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
    ctx1.beginPath();
    ctx1.lineWidth = 1;
    ctx1.moveTo(showing_height_line_x,showing_height_line_y);
    ctx1.lineTo(constant, showing_height_line_y);


    //drawing upper arrowheads
    ctx1.stroke();
    ctx1.beginPath();
    ctx1.setLineDash([1,0]);/*dashes are 5px and spaces are 3px*/
    ctx1.strokeStyle = "#000000";

    ctx1.lineWidth = 3;
    ctx1.moveTo(constant+7, showing_height_line_y+10);
    ctx1.lineTo(constant, showing_height_line_y);
    ctx1.lineTo(constant-7, showing_height_line_y+10);
    ctx1.lineTo(constant + 7, showing_height_line_y+10);
    ctx1.stroke();
    ctx1.moveTo(constant, showing_height_line_y);

    ctx1.lineWidth = 3;

    ctx1.font = "25px Comic Sans MS";
    ctx1.fillText(height_value + " m" , constant + 10 , showing_height_line_y +  ( 340 - showing_height_line_y ) / 2 );
    ctx1.stroke();

    if( to_show_velocity )
    {
      // console.log( velocity , height_value );

      if( stopped_velocity )
      {
        ctx1.fillText( "Stopped at " + stopped_velocity, constant + 5 , 30 + showing_height_line_y +  ( 340 - showing_height_line_y ) / 2 );
        ctx1.fillText( "(m/s)", constant + 140 , 55 + showing_height_line_y +  ( 340 - showing_height_line_y ) / 2 );
      }
      else {
        ctx1.fillText( "Velocity = 0 m/s", constant + 5 , 30 + showing_height_line_y +  ( 340 - showing_height_line_y ) / 2 );
      }

      ctx1.stroke();

      x = document.getElementById("textarea").value;
      x += "\n";
      x += "Stopped at Velocity: " + stopped_velocity + " & at Height: " + height_value;

      height_value = undefined;

    }

    ctx1.lineTo( constant , 340);

    //
    ctx1.lineTo( constant + 7 , 340 - 10);
    ctx1.lineTo( constant -7 , 340 - 10);
    ctx1.lineTo( constant , 340);
    ctx1.fill();




    ctx1.stroke();
    // ctx1.moveTo( constant , 340);
    // ctx1.lineTo( constant + 10 , 340 - 10);
    // ctx1.lineTo( constant -10 , 340 - 10);
    // ctx1.lineTo( constant , 340);

    ctx1.lineWidth = 5;

    if( to_show_velocity == false )
    {
      ctx1.beginPath();
      ctx1.arc(show_x, show_y , 13 , 0 , Math.PI*2,true);
      ctx1.fill();
      ctx1.stroke();
    }
    if( to_show_velocity == true)
      to_show_velocity = false;

  }
}

function changing_slider_value(callingID , input_number)
{
  x = document.getElementById(callingID).value;
  if( input_number == 1 )
  $('#velocity_slider').slider("value") = x;
  else
  $('#mass_slider').slider("value") = x;
}

function showResults() {
  document.getElementById("start").style.display = "block";
  document.getElementById("stop").style.display = "none";
  this_velocity = $('#velocity_slider').slider("value")
  // console.log(this_velocity);
  this_mass =  $('#mass_slider').slider("value");
  var output = "";
  var x="";
  if(!firstTime)
  {
    x = document.getElementById("textarea").value;
    x += "\n";
  }

  output = x + count +  ". Velocity taken: " + this_velocity + "m/s   Mass taken: " + this_mass + "kg ";
  if( height_value != undefined )
    output +=  "  Height Reached: " + height_value + "m";
  else {
    output += "    Motion Completed";
  }
  if( count == 4 )
  output += "\nNote: Conditions changes with velocity.";
  if( count == 6 )
  {
    document.getElementById("interaction").innerHTML = "See the results to get the whole concept";
    output += "\nNote: Conditions doesn't changes with mass.";
    output += "\nAs the conditions only depends upon the velocity of the cart & not the Mass.\n";
    output += "If the velocity >= square_root(4*g*r) : then , it'll complete the path\n";
    output += "If the square_root(2*g*r) <= velocity < square_root(4*g*r)  : then , it'll go beyond the height \'r\' but not complete the path.\n";
    output += "If the velocity < square_root(2*g*r) : then , it'll not go beyond height 'r'\n\n";
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
  // console.log("interact krna " + count);
  if( count == 1 )
  {
    interact = "First, try to change the velocity!!";
    document.getElementById("interaction").innerHTML = interact;
  }
  else if( count == 2 )
  {
    interact = "Now, try to change the velocity above 60";
    document.getElementById("interaction").innerHTML = interact;
  }
  else if( count == 3 )
  {
    interact = "Good Going, make velocity b/w 42 & 59";
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
// vaibhuchinnari@gmail.com to mail her the template
