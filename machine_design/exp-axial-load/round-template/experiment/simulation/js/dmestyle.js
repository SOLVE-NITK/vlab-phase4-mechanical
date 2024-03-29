
    //Script specific to simulation
    
    //program variables
    //controls section
    var simstatus=0; 
    var rotstatus=1;
    //comments section
    var commenttext="Some Text";
    var commentloc=0;
    
    //computing section
     
    var theta = 55; // all angles to be defined either in degrees only or radians only throughout the program and convert as and when required
    //origin points circle
    var oxcoord =250;
    var oycoord = 250;
    
    //line to points
    var axcoord = 0;
    var aycoord = 0;
    
    var theta = 0;
    
    
    var z=20;
    
    
    //length of link
    var len = 50;
    var len1 = 50;
    var rad=10;
    var stressc=0;
    var strainc=0;
    var defc=0;
    var defc=2;
    var color="#999988";
    
    //graphics section
    var canvas;
    var ctx;
    
    //timing section
    var simTimeId = setInterval("",'1000');
    var pauseTime = setInterval("",'1000');
    var time=0;
    
    //point tracing section
    var ptx = [];
    var pty = [];
    
    //click status of legend and quick reference
    var legendCS = false;
    var quickrefCS = false;
    //temporary or dummy variables
    var temp=0;
    var force=10000;
    
    var area=0;
    var ym=0;
    var temp2=0;
    var temp3=0;
    var typs;
    var   calstatus = 0;
    var checkstatus=0;
    var stressx=0;
    /*
    // for trials during development
    function trythis()
    { 		alert();}
    */
    
    //change simulation specific css content. e.g. padding on top of variable to adjust appearance in variables window
    function editcss()
    {
    $('.variable').css('padding-top','20px');
    $('#datatable1').css('position','absolute');
    $('#datatable2').css('position','absolute');
    $('#datatable1').css('left','120px');
    $('#datatable1').css('top','340px');
    $('#datatable2').css('left','395px');
    $('#datatable2').css('top','340px');
    
    //$('#legend').css("width",document.getElementById('legendimg').width+"px");
    //$('#quickref').css("height",document.getElementById('quickrefimg').height+"px");
    
    }
    
    //start of simulation here; starts the timer with increments of 0.1 seconds
    function startsim()
    {
        simTimeId=setInterval("time=time+0.1; varupdate(); ",'100');
    }
    
    // switches state of simulation between 0:Playing & 1:Paused
    function simstate()
    {
      var imgfilename=document.getElementById('playpausebutton').src;
      imgfilename = imgfilename.substring(imgfilename.lastIndexOf('/') + 1, imgfilename.lastIndexOf('.'));
      if (imgfilename=="bluepausedull")
      {
        document.getElementById('playpausebutton').src="images/blueplaydull.png";
         clearInterval(simTimeId);
        simstatus=1;		//to set simulation parameters on pause
        pauseTime=setInterval("varupdate();",'100');
      }
        if (imgfilename=="blueplaydull")
      {
           time=0;			
           clearInterval(pauseTime);
        document.getElementById('playpausebutton').src="images/bluepausedull.png";
        simTimeId=setInterval("time=time+0.1; varupdate(); ",'100');    
        simstatus=0;
      } 
    }
    
    // switches state of rotation between 1:CounterClockWise & -1:Clockwise
    
    
    
    //Initialise system parameters here
    function varinit()
    {
        varchange();		
        //Variable r1 slider and number input types
        $('#l1slider').slider("value", 135);	
        $('#l1spinner').spinner("value", 135);
    
      $('#r1slider').slider("value", 10);	
        $('#r1spinner').spinner("value", 10);
    
    }
    
    
    
    // Initialise and Monitor variable containing user inputs of system parameters.
    //change #id and repeat block for new variable. Make sure new <div> with appropriate #id is included in the markup
    function varchange()
    {
    //Variable r1 slider and number input types
    $('#l1slider').slider({ max : 150, min : 100, step : 1 });		// slider initialisation : jQuery widget
    $('#l1spinner').spinner({ max : 150, min : 100, step : 1 });		// number initialisation : jQuery widget			
    // monitoring change in value and connecting slider and number
    // setting trace point coordinate arrays to empty on change of link length
    $( "#l1slider" ).on( "slide", function( e, ui ) { $('#l1spinner').spinner("value",ui.value); ptx=[]; pty=[]; } );
    $( "#l1spinner" ).on( "spin", function( e, ui ) { $('#l1slider').slider("value",ui.value); ptx=[]; pty=[]; } );
    $( "#l1spinner" ).on( "change", function() {  varchange() } );
    
    
    $('#r1slider').slider({ max : 10, min : 5, step : 1 });		// slider initialisation : jQuery widget
    $('#r1spinner').spinner({ max : 10, min : 5, step : 1 });		// number initialisation : jQuery widget			
    // monitoring change in value and connecting slider and number
    // setting trace point coordinate arrays to empty on change of link length
    $( "#r1slider" ).on( "slide", function( e, ui ) { $('#r1spinner').spinner("value",ui.value); ptx=[]; pty=[]; } );
    $( "#r1spinner" ).on( "spin", function( e, ui ) { $('#r1slider').slider("value",ui.value); ptx=[]; pty=[]; } );
    $( "#r1spinner" ).on( "change", function() {  varchange() } );
    varupdate();
    
    }
    function calculation()
    {
      var calc = document.getElementById("calc").value;
      document.getElementById('stress').disabled=true;
      document.getElementById('material').disabled=true;
      document.getElementById('checkbttn').style.visibility="visible";
      if(calc == "Simulation")
      {
        calstatus = 0;
        document.getElementById('stress').disabled=false;
        document.getElementById('material').disabled=false;
        document.getElementById('checkbttn').style.visibility="hidden";
      }
      if (calc == "Calculation")
      {
        calstatus = 1;
      
      }
    }
    
    function test()
    {
      var stsans = document.getElementById("s1").value
       var strans = document.getElementById("s2").value
       var deflans = document.getElementById("s3").value
      if(!calstatus)
    {
      document.getElementById('playpausebutton').style.visibility="visible";
      document.getElementById('rst').style.visibility="hidden";
      document.getElementById("calc").value="Calculation";
      document.getElementById("calc").innerText="Calculation";
      document.getElementById('rst').style.visibility="hidden";
      document.getElementById("exp").style.visibility="hidden"
     
      $('#l1slider').slider("enable");	
      $('#l1spinner').spinner("enable");
      $('#r1slider').slider("enable");	
      $('#r1spinner').spinner("enable");
    }
    if(calstatus)
    {
      printcomment("",2);
      ctx.clearRect(210,200,340,285); 
      document.getElementById('rst').style.visibility="visible";
      document.getElementById('playpausebutton').style.visibility="hidden";
      document.getElementById("calc").value="Simulation";
      document.getElementById("calc").innerText="Simulation";
      document.getElementById("exp").style.visibility="visible";
      document.getElementById("material").value=num;
      document.getElementById("stress").value=num1;
      $('#l1slider').slider("disable");	
      $('#l1spinner').spinner("disable");
      $('#r1slider').slider("disable");	
      $('#r1spinner').spinner("disable");
    
    
    
      var stressmax=stressx+0.05;
      var stressmin=stressx-0.05;
      var strainmax=strainc+0.000005;
      var strainmin=strainc-0.000005;
      var deltamax=defc+0.005;
      var deltamin=defc-0.005;
      if(checkstatus==1)
       {
        if(stsans>=stressmin && stsans<=stressmax)
          {
        if(strans>=strainmin && strans<=strainmax)
            {
        if(deflans>=deltamin && deflans<=deltamax)
        {
               printcomment("Correct answer",2);
               document.getElementById('tick').style.visibility="visible";
               document.getElementById('cross').style.visibility="hidden";
               checkstatus=0
               document.getElementById('checkbttn').style.visibility="hidden";
        }
          }
            }
        else if(stsans=="" || strans=="" || deflans=="")
      
          {
    alert("Please enter value to prodeed")
    checkstatus=0;         
          }
        
        else
        {
          document.getElementById('cross').style.visibility="visible";
          document.getElementById('tick').style.visibility="hidden";
          document.getElementById('checkbttn').style.visibility="hidden";
          printcomment(" Stress :"+stressx+"MPa" +" </br>  Strain :"+strainc +"</br> Delection :" + defc+'mm',2);
          // checkstatus=0;
        }
      } 
    
    }
    }
    
    function check()
     {
       checkstatus=1;
       console.log(checkstatus);
     }
    //Computing of various system parameters
    function varupdate()
    {
    
    $('#l1slider').slider("value", $('#l1spinner').spinner('value'));  //updating slider location with change in spinner(debug)
    
    
    len=$('#l1spinner').spinner("value")-40;
    $('#r1slider').slider("value", $('#r1spinner').spinner('value'));  //updating slider location with change in spinner(debug)
    
    len1=$('#l1spinner').spinner("value");
    radi=($('#r1spinner').spinner("value"))*5;
    rad1=($('#r1spinner').spinner("value"));
    
    
    
    
    //If simulation is running
    if(!simstatus)
    {
    printcomment("Force: 10000N  <br> Cross Sectional Area: "+area+"mm²</br> Youngs modulus:"+ym/1000000000+"GPa",1);
    printcomment(" Stress :"+stressx+"MPa" +" </br>  Strain :"+strainc +"</br> Delection :" + defc+'mm',2);
    
    area=Math.PI*rad1*rad1;
    area=area.toFixed(3);
    stressc=force/(area*1e-6);
    stressx=stressc/1e6;
    stressx=stressx.toFixed(2);
    temp=document.getElementById("material").value;
    
    //steel 2.1e11
    //Iron  1.24e11
    //Aluminium 6.9e10
    
    if(temp==1)
    {
    ym = 2.1e11;
    color = "#999988"
    }
    if(temp==2)
    {
    ym = 1.24e11;
    color = "#75a3a3"
    }
    if(temp==3)
    {
    ym = 6.9e10;
    color="#ffff80"
    }
    console.log(ym);
    console.log(stressc);
    
    strainc=stressc/ym;
    strainc=strainc.toFixed(6);
    console.log(len1);
    defc=len1*strainc;
    console.log(defc);
    console.log(strainc);
    defc=defc.toFixed(6)
    defc2=defc*250;
    console.log(defc2);
    
    if(typs=="1")
    {
      z=20;
    draw1();
    stressx=-1*stressx;
    
    }
    if(typs=="2")
    {
      z=60;
    draw2();
    stressx=+1*stressx;
    
    }
    
    
    
    if(temp2<=defc2)
    {
      temp2+=0.1;
      temp3+=0.05;
    
      console.log(temp2);
    }
    
    if(temp2>=defc2)
    {
      temp2=0;
      temp3=0;
    
    }
    
    
    
    }
    
    //If simulation is stopped
    if(simstatus)
    {
    
      printcomment("Force: 5000N  <br> Cross Sectional Area: "+area+"mm² </br> Youngs modulus:"+ym/1000000000+"GPa",1);
    }
    
    typs = document.getElementById("stress").value;
    
    
    
            
    
    test();
    }
    
    //Simulation graphics
    function draw1()
    {
      canvas = document.getElementById("simscreen");
      ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,550,400);  //clears the complete canvas#simscreen everytime
      //draw Horizontal line
    
    
      // ctx.beginPath(0,0);
      // ctx.moveTo(20,40);
      // ctx.quadraticCurveTo(10,90,20,120);
      // ctx.lineTo(100,120);
      // ctx.quadraticCurveTo(110,90,100,40)
      // ctx.lineTo(20,40)
      // ctx.stroke();
    
    
        // ctx.beginPath(0,0);
        // ctx.fillStyle="red";
        // ctx.moveTo(10,40);
        // ctx.quadraticCurveTo(70,(len+40)/2,60,len+80);
        // ctx.lineTo(170,len+80);(len+40)/2
        // ctx.quadraticCurveTo(160,(len+40)/2,170,40);
        // ctx.lineTo(60,40);
        // ctx.fill();
        ctx.beginPath(0,0);
        ctx.fillStyle=color;
        ctx.moveTo(120,45+temp2);
        ctx.lineTo(120-radi,45+temp2);
        ctx.quadraticCurveTo(120-radi-temp3,((len+10-temp2)/2)+len+temp2-15,120-radi,len+55);
        ctx.lineTo(120+radi,len+55);
        ctx.quadraticCurveTo(120+radi+temp3,((len+10-temp2)/2)+len+temp2-15,120+radi,45+temp2);
        ctx.lineTo(120,45+temp2);
        ctx.fill();
    
    
      // plates
        ctx.fillStyle='black'
        ctx.fillRect(20,len+55,200,25);
          ctx.fillStyle='black';
        ctx.fillRect(20,20+temp2,200,25);
    
    
    
        // arrows
        ctx.beginPath(0,0);
        ctx.moveTo(40,z-15+temp2);
        ctx.strokeStyle="black";
        ctx.lineTo(40,z+temp2);
        ctx.stroke();
        ctx.beginPath(40,z+temp2);
        ctx.fillStyle="black"
        ctx.lineTo(35,z-5+temp2);
        ctx.lineTo(45,z-5+temp2);
        ctx.lineTo(40,z+temp2);
        ctx.fill();
        ctx.beginPath(0,0+temp2);
        ctx.moveTo(60,z-15+temp2);
        ctx.strokeStyle="black";
        ctx.lineTo(60,z+temp2);
        ctx.stroke();
        ctx.beginPath(60,z+temp2);
        ctx.fillStyle="black"
        ctx.lineTo(55,z-5+temp2);
        ctx.lineTo(65,z-5+temp2);
        ctx.lineTo(60,z+temp2);
        ctx.fill();
        ctx.beginPath(0,0);
        ctx.moveTo(80,z-15+temp2);
        ctx.strokeStyle="black";
        ctx.lineTo(80,z+temp2);
        ctx.stroke();
        ctx.strokeStyle="black";
        ctx.beginPath(80,z+temp2);
        ctx.fillStyle="black"
        ctx.lineTo(75,z-5+temp2);
        ctx.lineTo(85,z-5+temp2);
        ctx.lineTo(80,z+temp2);
        ctx.fill();
        ctx.beginPath(0,0);
        ctx.moveTo(100,z-15+temp2+8);
        ctx.strokeStyle="black";
        ctx.lineTo(100,z+temp2);
        ctx.stroke();
        ctx.beginPath(80,z+temp2);
        ctx.fillStyle="black"
        ctx.lineTo(95,z-5+temp2);
        ctx.lineTo(105,z-5+temp2);
        ctx.lineTo(100,z+temp2);
        ctx.fill();
        ctx.beginPath(0,0);
        ctx.moveTo(120,z-15+temp2+8);
        ctx.strokeStyle="black";
        ctx.lineTo(120,z+temp2);
        ctx.stroke();
        ctx.beginPath(100,z+temp2);
        ctx.fillStyle="black"
        ctx.lineTo(115,z-5+temp2);
        ctx.lineTo(125,z-5+temp2);
        ctx.lineTo(120,z+temp2);
        ctx.fill();
        ctx.beginPath(0,0);
        ctx.moveTo(140,z-15+temp2+8);
        ctx.strokeStyle="black";
        ctx.lineTo(140,z+temp2);
        ctx.stroke();
        ctx.beginPath(120,z+temp2);
        ctx.fillStyle="black"
        ctx.lineTo(135,z-5+temp2);
        ctx.lineTo(145,z-5+temp2);
        ctx.lineTo(140,z+temp2);
        ctx.fill();
        ctx.beginPath(0,0);
        ctx.moveTo(160,z-15+temp2);
        ctx.strokeStyle="black";
        ctx.lineTo(160,z+temp2);
        ctx.stroke();
        ctx.beginPath(140,z+temp2);
        ctx.fillStyle="black"
        ctx.lineTo(155,z-5+temp2);
        ctx.lineTo(165,z-5+temp2);
        ctx.lineTo(160,z+temp2);
        ctx.fill();
        ctx.beginPath(0,0);
        ctx.moveTo(180,z-15+temp2);
        ctx.strokeStyle="black";
        ctx.lineTo(180,z+temp2);
        ctx.stroke();
        ctx.beginPath(160,z+temp2);
        ctx.fillStyle="black"
        ctx.lineTo(175,z-5+temp2);
        ctx.lineTo(185,z-5+temp2);
        ctx.lineTo(180,z+temp2);
        ctx.fill();
        ctx.beginPath(0,0);
        ctx.moveTo(200,z-15+temp2);
        ctx.strokeStyle="black";
        ctx.lineTo(200,z+temp2);
        ctx.stroke();
        ctx.beginPath(160,z+temp2);
        ctx.fillStyle="black"
        ctx.lineTo(195,z-5+temp2);
        ctx.lineTo(205,z-5+temp2);
        ctx.lineTo(200,z+temp2);
        ctx.fill();
    
    
        // hatched lines
      ctx.beginPath(0,0);
      ctx.setLineDash([]);
        ctx.moveTo(110,300);
        ctx.strokeStyle="black";
        ctx.moveTo(30,len+80);
        ctx.lineTo(25,len+90);
        ctx.moveTo(40,len+80);
        ctx.lineTo(35,len+90);
        ctx.moveTo(50,len+80);
        ctx.lineTo(45,len+90);
        ctx.moveTo(60,len+80);
        ctx.lineTo(55,len+90);
        ctx.moveTo(70,len+80);
        ctx.lineTo(65,len+90);
        ctx.moveTo(80,len+80);
        ctx.lineTo(75,len+90);
        ctx.moveTo(90,len+80);
        ctx.lineTo(85,len+90);
        ctx.moveTo(100,len+80);
        ctx.lineTo(95,len+90);
        ctx.moveTo(110,len+80);
        ctx.lineTo(105,len+90);
        ctx.moveTo(120,len+80);
        ctx.lineTo(115,len+90);
        ctx.moveTo(130,len+80);
        ctx.lineTo(125,len+90);
        ctx.moveTo(140,len+80);
        ctx.lineTo(135,len+90);
        ctx.moveTo(150,len+80);
        ctx.lineTo(145,len+90);
        ctx.moveTo(160,len+80);
        ctx.lineTo(155,len+90);
        ctx.moveTo(170,len+80);
        ctx.lineTo(165,len+90);
        ctx.moveTo(180,len+80);
        ctx.lineTo(175,len+90);
        ctx.moveTo(190,len+80);
        ctx.lineTo(185,len+90);
        ctx.moveTo(200,len+80);
        ctx.lineTo(195,len+90);
        ctx.moveTo(210,len+80);
        ctx.lineTo(205,len+90);
        ctx.moveTo(220,len+80);
        ctx.lineTo(215,len+90);
        ctx.stroke();
    
    
        //crossectional area
        ctx.beginPath(0,0);
        ctx.fillStyle=color;
        ctx.setLineDash([]);
        ctx.moveTo(120,300);
        ctx.arc(120,300,radi,0,2*Math.PI);
        ctx.closePath();
        ctx.fill();
    
    
    
       
        //initial length
        ctx.beginPath();
        ctx.strokeStyle="black";
        ctx.moveTo(120,300);
        ctx.lineTo(120+radi,300);
        ctx.arc(120,300,radi,0,2*Math.PI);
        ctx.stroke();
    
         //change in length
        ctx.beginPath(0,0);
        ctx.fillStyle="color";
        ctx.moveTo(400,45+temp2);
        ctx.lineTo(400-radi,45+temp2);
        ctx.quadraticCurveTo(400-radi-temp3,((len+10-temp2)/2)+len+temp2-15,400-radi,len+55);
        ctx.lineTo(400+radi,len+55);
        ctx.quadraticCurveTo(400+radi+temp3,((len+10-temp2)/2)+len+temp2-15,400+radi,45+temp2);
        ctx.lineTo(400,45+temp2);
        ctx.fill();
    
    
    
    
        ctx.beginPath(0,0);
        ctx.fillStyle="black";
        ctx.setLineDash([5, 5]);
        ctx.moveTo(400,45);
        ctx.lineTo(400-radi,45);
        ctx.quadraticCurveTo(400-radi,(len+40)/2,400-radi,len+55);
        ctx.lineTo(400+radi,len+55);
        ctx.quadraticCurveTo(400+radi,(len+40)/2,400+radi,45);
        ctx.lineTo(400,45);
        ctx.closePath();
        ctx.stroke();
        
        //length arrows
        ctx.beginPath(0,0);
        ctx.setLineDash([]);
        ctx.moveTo(400-radi,45);
        ctx.lineTo(385-radi,45);
        ctx.moveTo(400-radi,len+55);
        ctx.lineTo(385-radi,len+55)
        ctx.moveTo(392-radi,45);
        ctx.lineTo(392-radi,len+55);
        ctx.stroke();
    
        ctx.beginPath(0,0);
        ctx.moveTo(392-radi,45);
        ctx.lineTo(392-radi-5,55);
        ctx.lineTo(392-radi+5,55);
        ctx.lineTo(392-radi,45);
        ctx.fill();
    
        ctx.beginPath(0,0);
        ctx.moveTo(392-radi,len+55);
        ctx.lineTo(392-radi-5,len+45);
        ctx.lineTo(392-radi+5,len+45);
        ctx.lineTo(392-radi,len+55);
        ctx.fill();
    
    //change in lenght arrows
        ctx.beginPath(0,0);
        ctx.setLineDash([]);
        ctx.moveTo(400+radi,45);
        ctx.lineTo(415+radi,45);
        ctx.moveTo(400+radi,45+temp2);
        ctx.lineTo(415+radi,45+temp2);
        ctx.moveTo(407+radi,45);
        ctx.lineTo(407+radi,30);
        ctx.moveTo(407+radi,45+temp2);
        ctx.lineTo(407+radi,60+temp2);
        ctx.stroke();
    
        ctx.beginPath(0,0,);
        ctx.moveTo(407+radi,45);
        ctx.lineTo(407+radi-5,35);
        ctx.lineTo(407+radi+5,35);
        ctx.lineTo(407+radi,45);
        
        ctx.moveTo(407+radi,45+temp2);
        ctx.lineTo(407+radi+5,55+temp2);   
        ctx.lineTo(407+radi-5,55+temp2);
        ctx.lineTo(407+radi,45+temp2);
    
    
        ctx.fill()
    
    
        ctx.beginPath(0,0);
        ctx.moveTo(150,100);
        ctx.strokeStyle="black";
        ctx.lineTo(190,100);
        ctx.stroke();
        ctx.beginPath(0,0);
        ctx.fillStyle="black"
        ctx.moveTo(190,100);
        ctx.lineTo(180,90);
        ctx.lineTo(180,110);
        ctx.lineTo(190,100);
        ctx.fill();
    
    
    
        ctx.font = "15px Georgia";
        ctx.fillText("l", 380-radi, (len+100)/2);
        ctx.fillText("r", (240+radi)/2, 298);
        ctx.fillText("dl",419+radi,48+(temp2)/2);
        ctx.fillText("Crossectional area",120,370);
    
        
        ctx.font = "15px Arial";
        ctx.fillStyle = "#e6e600";
        ctx.textAlign = "center";
        ctx.fillText("FORCE",120, z-8+temp2);
    
        ctx.fillStyle = "#ff0000";
        ctx.textAlign = "center";
        ctx.fillText("WORKPIECE", 240, 107);
    
    
      
      
     }
     function draw2()
    {
      canvas = document.getElementById("simscreen");
      ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,550,400);  //clears the complete canvas#simscreen everytime
      //draw Horizontal line
    
    
      
        ctx.beginPath(0,0);
        ctx.fillStyle=color;
        ctx.moveTo(120,85-temp2);
        ctx.lineTo(120-radi,85-temp2);
        ctx.quadraticCurveTo(120-radi+temp3,((len+10+temp2)/2)+len-temp2+25,120-radi,len+95);
        ctx.lineTo(120+radi,len+95);
        ctx.quadraticCurveTo(120+radi-temp3,((len+10+temp2)/2)+len-temp2+25,120+radi,85-temp2);
        ctx.lineTo(120,85-temp2);
        ctx.fill();
    
    
      // plates
        ctx.fillStyle='black'
        ctx.fillRect(20,len+95,200,25);
          ctx.fillStyle='black';
        ctx.fillRect(20,60-temp2,200,25);
    
    
    
        // arrows
        ctx.beginPath(0,0);
        ctx.moveTo(40,z-15-temp2);
        ctx.strokeStyle="black";
        ctx.lineTo(40,z-temp2);
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle="black"
        ctx.moveTo(40,z-15-temp2);
        ctx.lineTo(35,z-5-temp2);
        ctx.lineTo(45,z-5-temp2);
        ctx.lineTo(40,z-15-temp2);
        ctx.fill();
    
        ctx.beginPath(0,0-temp2);
        ctx.moveTo(60,z-15-temp2);
        ctx.strokeStyle="black";
        ctx.lineTo(60,z-temp2);
        ctx.stroke();
        ctx.beginPath(60,z-15-temp2);
        ctx.fillStyle="black"
        ctx.lineTo(55,z-5-temp2);
        ctx.lineTo(65,z-5-temp2);
        ctx.lineTo(60,z-15-temp2);
        ctx.fill();
        ctx.beginPath(0,0);
        ctx.moveTo(80,z-15-temp2);
        ctx.strokeStyle="black";
        ctx.lineTo(80,z-temp2);
        ctx.stroke();
        ctx.strokeStyle="black";
        ctx.beginPath(80,z-15-temp2);
        ctx.fillStyle="black"
        ctx.lineTo(75,z-5-temp2);
        ctx.lineTo(85,z-5-temp2);
        ctx.lineTo(80,z-15-temp2);
        ctx.fill();
        ctx.beginPath(0,0);
        ctx.moveTo(100,z-15-temp2);
        ctx.strokeStyle="black";
        ctx.lineTo(100,z-temp2);
        ctx.stroke();
        ctx.beginPath(100,z-15-temp2);
        ctx.fillStyle="black"
        ctx.lineTo(95,z-5-temp2);
        ctx.lineTo(105,z-5-temp2);
        ctx.lineTo(100,z-15-temp2);
        ctx.fill();
        ctx.beginPath(0,0);
        ctx.moveTo(120,z-15-temp2);
        ctx.strokeStyle="black";
        ctx.lineTo(120,z-temp2);
        ctx.stroke();
        ctx.beginPath(120,z-15-temp2);
        ctx.fillStyle="black"
        ctx.lineTo(115,z-5-temp2);
        ctx.lineTo(125,z-5-temp2);
        ctx.lineTo(120,z-15-temp2);
        ctx.fill();
        ctx.beginPath(0,0);
        ctx.moveTo(140,z-15-temp2);
        ctx.strokeStyle="black";
        ctx.lineTo(140,z-temp2);
        ctx.stroke();
        ctx.beginPath(140,z-15-temp2);
        ctx.fillStyle="black"
        ctx.lineTo(135,z-5-temp2);
        ctx.lineTo(145,z-5-temp2);
        ctx.lineTo(140,z-15-temp2);
        ctx.fill();
        ctx.beginPath(0,0);
        ctx.moveTo(160,z-15-temp2);
        ctx.strokeStyle="black";
        ctx.lineTo(160,z-temp2);
        ctx.stroke();
        ctx.beginPath(160,z-15-temp2);
        ctx.fillStyle="black"
        ctx.lineTo(155,z-5-temp2);
        ctx.lineTo(165,z-5-temp2);
        ctx.lineTo(160,z-15-temp2);
        ctx.fill();
        ctx.beginPath(0,0);
        ctx.moveTo(180,z-15-temp2);
        ctx.strokeStyle="black";
        ctx.lineTo(180,z-temp2);
        ctx.stroke();
        ctx.beginPath(180,z-15-temp2);
        ctx.fillStyle="black"
        ctx.lineTo(175,z-5-temp2);
        ctx.lineTo(185,z-5-temp2);
        ctx.lineTo(180,z-15-temp2);
        ctx.fill();
        ctx.beginPath(0,0);
        ctx.moveTo(200,z-15-temp2);
        ctx.strokeStyle="black";
        ctx.lineTo(200,z-temp2);
        ctx.stroke();
        ctx.beginPath(200,z-15-temp2);
        ctx.fillStyle="black"
        ctx.lineTo(195,z-5-temp2);
        ctx.lineTo(205,z-5-temp2);
        ctx.lineTo(200,z-15-temp2);
        ctx.fill();
    
    
        // hatched lines
      ctx.beginPath(0,0);
      ctx.setLineDash([]);
        ctx.moveTo(110,300);
        ctx.strokeStyle="black";
        ctx.moveTo(30,len+120);
        ctx.lineTo(25,len+130);
        ctx.moveTo(40,len+120);
        ctx.lineTo(35,len+130);
        ctx.moveTo(50,len+120);
        ctx.lineTo(45,len+130);
        ctx.moveTo(60,len+120);
        ctx.lineTo(55,len+130);
        ctx.moveTo(70,len+120);
        ctx.lineTo(65,len+130);
        ctx.moveTo(80,len+120);
        ctx.lineTo(75,len+130);
        ctx.moveTo(90,len+120);
        ctx.lineTo(85,len+130);
        ctx.moveTo(100,len+120);
        ctx.lineTo(95,len+130);
        ctx.moveTo(110,len+120);
        ctx.lineTo(105,len+130);
        ctx.moveTo(120,len+120);
        ctx.lineTo(115,len+130);
        ctx.moveTo(130,len+120);
        ctx.lineTo(125,len+130);
        ctx.moveTo(140,len+120);
        ctx.lineTo(135,len+130);
        ctx.moveTo(150,len+120);
        ctx.lineTo(145,len+130);
        ctx.moveTo(160,len+120);
        ctx.lineTo(155,len+130);
        ctx.moveTo(170,len+120);
        ctx.lineTo(165,len+130);
        ctx.moveTo(180,len+120);
        ctx.lineTo(175,len+130);
        ctx.moveTo(190,len+120);
        ctx.lineTo(185,len+130);
        ctx.moveTo(200,len+120);
        ctx.lineTo(195,len+130);
        ctx.moveTo(210,len+120);
        ctx.lineTo(205,len+130);
        ctx.moveTo(220,len+120);
        ctx.lineTo(215,len+130);
        ctx.stroke();
    
    
        //crossectional area
        ctx.beginPath(0,0);
        ctx.fillStyle=color;
        ctx.setLineDash([]);
        ctx.moveTo(120,300);
        ctx.arc(120,300,radi,0,2*Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.strokeStyle="black";
        ctx.moveTo(120,300);
        ctx.lineTo(120+radi,300);
        ctx.arc(120,300,radi,0,2*Math.PI);
        ctx.stroke();
    
         //change in length
        ctx.beginPath(0,0);
        ctx.fillStyle="color";
        ctx.moveTo(400,85-temp2);
        ctx.lineTo(400-radi,85-temp2);
        ctx.quadraticCurveTo(400-radi+temp3,((len+10+temp2)/2)+len-temp2+25,400-radi,len+95);
        ctx.lineTo(400+radi,len+95);
        ctx.quadraticCurveTo(400+radi-temp3,((len+10+temp2)/2)+len-temp2+25,400+radi,85-temp2);
        ctx.lineTo(400,85-temp2);
        ctx.fill();
    
    
    
        //initial lenght
        ctx.beginPath(0,0);
        ctx.fillStyle="black";
        ctx.setLineDash([5, 5]);
        ctx.moveTo(400,85);
        ctx.lineTo(400-radi,85);
        ctx.quadraticCurveTo(400-radi,(len+40)/2+40,400-radi,len+95);
        ctx.lineTo(400+radi,len+95);
        ctx.quadraticCurveTo(400+radi,(len+40)/2+40,400+radi,85);
        ctx.lineTo(400,85);
        ctx.closePath();
        ctx.stroke();
        
        //length arrows
        ctx.beginPath(0,0);
        ctx.setLineDash([]);
        ctx.moveTo(400-radi,85);
        ctx.lineTo(385-radi,85);
        ctx.moveTo(400-radi,len+95);
        ctx.lineTo(385-radi,len+95)
        ctx.moveTo(392-radi,85);
        ctx.lineTo(392-radi,len+95);
        ctx.stroke();
    
        ctx.beginPath(0,0);
        ctx.moveTo(392-radi,85);
        ctx.lineTo(392-radi-5,95);
        ctx.lineTo(392-radi+5,95);
        ctx.lineTo(392-radi,85);
        ctx.fill();
    
        ctx.beginPath(0,0);
        ctx.moveTo(392-radi,len+95);
        ctx.lineTo(392-radi-5,len+85);
        ctx.lineTo(392-radi+5,len+85);
        ctx.lineTo(392-radi,len+95);
        ctx.fill();
    
    //change in lenght arrows
        ctx.beginPath(0,0);
        ctx.setLineDash([]);
        ctx.moveTo(400+radi,85-temp2);
        ctx.lineTo(415+radi,85-temp2);
        ctx.moveTo(400+radi,85);
        ctx.lineTo(415+radi,85);
      
        ctx.moveTo(407+radi,85-temp2);
        ctx.lineTo(407+radi,70-temp2);
        ctx.moveTo(407+radi,85);
        ctx.lineTo(407+radi,100);
        ctx.stroke();
    
        ctx.beginPath(0,0);
        ctx.moveTo(407+radi,85-temp2);
        ctx.lineTo(407+radi-5,75-temp2);
        ctx.lineTo(407+radi+5,75-temp2);
        ctx.lineTo(407+radi,85-temp2);
        
        ctx.moveTo(407+radi,85);
        ctx.lineTo(407+radi+5,95);   
        ctx.lineTo(407+radi-5,95);
        ctx.lineTo(407+radi,85);
        ctx.fill()
    
    
        ctx.beginPath(0,0);
        ctx.moveTo(150,140);
        ctx.strokeStyle="black";
        ctx.lineTo(190,140);
        ctx.stroke();
        ctx.beginPath(0,0);
        ctx.fillStyle="black"
        ctx.moveTo(190,140);
        ctx.lineTo(180,130);
        ctx.lineTo(180,150);
        ctx.lineTo(190,140);
        ctx.fill();
    
    
    
        ctx.font = "15px Georgia";
        ctx.fillText("l", 380-radi, (len+180)/2);
        ctx.fillText("r", (240+radi)/2, 298);
        ctx.fillText("dl",419+radi,88-(temp2)/2);
        ctx.fillText("Crossectional area",120,370);
    
        
        ctx.font = "15px Arial";
        ctx.fillStyle = "#e6e600";
        ctx.textAlign = "center";
        ctx.fillText("FORCE",120, z-20-temp2);
    
        ctx.fillStyle = "#ff0000";
        ctx.textAlign = "center";
        ctx.fillText("WORKPIECE", 240, 147);
    
    
      
      
     }
     
     
    
    // prints comments passed as 'commenttext' in location specified by 'commentloc' in the comments box;
    // 0 : Single comment box, 1 : Left comment box, 2 : Right comment box
    function printcomment(commenttext,commentloc)
    {
      if(commentloc==0)
      {
      document.getElementById('commentboxright').style.visibility='hidden';
      document.getElementById('commentboxleft').style.width='570px';
      document.getElementById('commentboxleft').innerHTML = commenttext;
      }
      else if(commentloc==1)
      {
      document.getElementById('commentboxright').style.visibility='visible';
      document.getElementById('commentboxleft').style.width='285px';
      document.getElementById('commentboxleft').innerHTML = commenttext;
      }
      else if(commentloc==2)
      {
      document.getElementById('commentboxright').style.visibility='visible';
      document.getElementById('commentboxleft').style.width='285px';
      document.getElementById('commentboxright').innerHTML = commenttext;
      }
      else
      {
      document.getElementById('commentboxright').style.visibility='hidden';
      document.getElementById('commentboxleft').style.width='570px';
      document.getElementById('commentboxleft').innerHTML = "<center>please report this issue to adityaraman@gmail.com</center>"; 
      // ignore use of deprecated tag <center> . Code is executed only if printcomment function receives inappropriate commentloc value
      }
    }
    //function to convert radians to degrees
    function deg(vrad)
    {
        return vrad*180/Math.PI;
    }
    
    //function to convert degrees to radians
    function rad(vdeg)
    {
        return vdeg*Math.PI/180;
    }
    function Random()
    {
      random1 = randomNumber(2000,5000);
      random2 = randomNumber(190,250);
     document.getElementById("s1").value="";
     document.getElementById("s2").value="";
     document.getElementById("s3").value=""; 
      document.getElementById("l1spinner").value=randomNumber(100,150);
      document.getElementById("r1spinner").value=randomNumber(5,10);
      document.getElementById('tick').style.visibility="hidden";
      document.getElementById('cross').style.visibility="hidden";
      num = Math.floor(Math.random() * 3 + 1);
      num1 = Math.floor(Math.random() * 2 + 1);
     checkstatus=0;
     printcomment("",2)
    }
    function randomNumber(min, max)
    {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    
    function resetcheck()
    {
      document.getElementById('checkbttn').style.visibility='visible';
    }
    
    
    