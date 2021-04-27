Oscillation of a fluid in U tube

A Javascript library for modelling Oscillation of a fluid in U tube for animation purposes.

About:

This project is aimed at developing a Javascript library to model Oscillation of a fluid in U tube for animation purposes. In particular the library supports modeling the simple harmonic motion executed by the fluid and calculating time period.

utube.html

This is the library file that is used to model the Oscillation of a fluid in U tube. This library makes use of some features including the "class" and "var" keywords.
In this demonstration, a Oscillation of a fluid in U tube is modeled and animated using an HTML5 canvas element.

Usage

Instantiation:

To create an instance of a u tube model within an application, the constructor can be called as follows.

  javascript
  
ctx.beginPath();
ctx.moveTo(165,20);
ctx.lineTo(165,130);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(235,20);
ctx.lineTo(235,130);
ctx.stroke();
ctx.closePath();

The above 2 paragraphs are used to draw the inner 2 lines of the U tube

ctx.beginPath();
ctx.arc(200,130, (35+radius), 0, Math.PI);
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

This is the code written to fill the given diameter by red  

ctx.beginPath();
ctx.arc(200,130,35,0,Math.PI);
ctx.stroke();
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

This is to fill the inner diameter by white.

ctx.beginPath();
ctx.moveTo(200-(35+radius),20);
ctx.lineTo(200-(35+radius),130);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(200+(35+radius) ,20);
ctx.lineTo(200+(35+radius),130);
ctx.stroke();
ctx.closePath();

The above 2 paragraphs are to draw the outer lines 

//left side	
ctx.beginPath();
ctx.rect(200-(35+radius), 130-50+h1, (35+radius)-35, 50-h1);
ctx.fillStyle = "red";
ctx.fill();

This is the code for filling the colour in the left limb

// right side 
ctx.beginPath();
ctx.rect(235, 130-(50+h1), (35+radius)-35, 50+h1);
ctx.fillStyle = "red";
ctx.fill();

This is the code for filling the colour in the right limb

fillStyle - Color of the fluid.


Updating positions:

The initial calculated height is taken as h1.
h3 is the left limb height.
h4 is the right limb height.
h2 is the differance of h3 and h4


h2=h3-h4;

h1=h1-factor;
iteration = iteration + 1;

if (iteration==h2 )

{
factor = factor * -1;
iteration=0;
}


The above method can be called to update the positions of the fluid.

Plotting graph

For Plotting the graph the function plot_graph can be called.
pt[1] gives the x coordinate.
pty[1] gives the y coordinate.

function plot_graph(pt,pty,ctx,truncate,black,width)
{
ctx.save();
ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle=black;
ctx.moveTo(pt[1],pty[1]);
i=1;

while(i<pty.length)
{	
ctx.lineTo(pt[i],pty[i]);
i++;
if (i>=200)
{
pty.splice(0,1);
i=i-1;
}
}
ctx.stroke();
ctx.closePath();
ctx.restore();
}

  ```javascript
    
  ```
This will update the positions of the components within the overall model based on the total time that has elapsed since the beginning of the simulation. 

Animation:

The following method can be called for animation

iteration=0;
radius=$('#radius').spinner("value");                             //takes the value from spinner
pressure=$('#pressure').spinner("value");                         //takes the value from spinner
density=$('#density').spinner("value");                           //takes the value from spinner

height=Math.round((pressure*1000)/(density*9.8));                 // for calculating height

otime=Math.round(2*3.14*Math.sqrt(height/9.8));                   // for calculating time period of oscillation

frequency=(1/(otime));                                            // for calculating frequency.

$('#height').spinner("value",height);
$('#otime').spinner("value",otime);
$('#frequency').spinner("value",frequency);

speed=Math.round(otime*1000/(2))                                   // for calculating speed.

h1=height;
h2=0;
h3=130-50+height; 
h4=130-50-height;
factor=1;

intervel=setInterval(oscillation, speed);                          // for setting time interval for oscillation


Theory:

The library uses the following equations to determine the oscillation and height variables based on the known variables that have been selected. 

height calculations:

height=(pressure*1000)/(density*9.8) 

time period of oscillation calculations:

time period of oscillation=2*3.14*sqrt(height/9.8)
