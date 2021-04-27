
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
    
    var theta2 = 55; // all angles to be defined either in degrees only or radians only throughout the program and convert as and when required
    //origin points circle
    var oxcoord2 =250;
    var oycoord2 = 250;
    
    //line to points
    var axcoord2 = 0;
    var aycoord2 = 0;
    
    
    
    var thetax = 90; // all angles to be defined either in degrees only or radians only throughout the program and convert as and when required
    //origin points circle
    var oxcoordx =250;
    var oycoordx = 250;
    
    //line to points
    var axcoordx = 0;
    var aycoordx = 0;
    
    
    var thetay = 90; // all angles to be defined either in degrees only or radians only throughout the program and convert as and when required
    //origin points circle
    var oxcoordy =250;
    var oycoordy = 250;
    
    //line to points
    var axcoordy = 0;
    var aycoordy = 0;
    
    
    
    
    //length of link
    var len1 = 50;
    var len2 = 100;
    
    //radius
    var rad1 =0;
    var rad2 =0;
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
    var subscreen=0;
    var spd=0;
    var spdx=0;
    var spdy=0;
    var torque=0;
    var power=0;
    var rpm=0;
    var lenght1=0;
    var lenght2=0;
    var td=0;
    var radius1;
    var radius2;
    var Ft1;
    var Ft2;
    var Fr1;
    var Fr2;
    var zetha;
    var RAv;
    var RBv;
    var RAh;
    var RBh;
    var VBC;
    var VBD;
    var VBCd;
    var VBDd;
    var HBC;
    var HBD;
    var HBCd;
    var HBDd;
    var RBC;
    var RBD;
    var BM;
    var temp5=0;
    var temp6=0;
    var temp7=0;
    var stress=0;
    var standd=[16,18,20,22,25,28,32,36,40,45,50,56,63,71,80,90,100,110,125,140,160,180,200,220,240]
    var i=0;
    
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
    
    
    $(".varname2").hide(); 
    }
    function variablescreenfw()
     {
       
      document.getElementById('vsfw').src="images/bluefwddullsbw.png"
      document.getElementById('vsbw').src="images/bluebkdulls.png"
      $(".varname").hide(); 
      $(".varname2").show(); 
    
    
     }
     function variablescreenbw()
     {  
       document.getElementById('vsfw').src="images/bluefwddulls.png"
       document.getElementById('vsbw').src="images/bluebkdullsbw.png"
       $(".varname").show(); 
       $(".varname2").hide();  
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
    function rotstate()
    {
      var imgfilename=document.getElementById('rotationbutton').src;
      imgfilename = imgfilename.substring(imgfilename.lastIndexOf('/') + 1, imgfilename.lastIndexOf('.'));
      if (imgfilename=="bluecwdull")
      {
        document.getElementById('rotationbutton').src="images/blueccwdull.png";
        rotstatus=-1;
      }
        if (imgfilename=="blueccwdull")
      {
        document.getElementById('rotationbutton').src="images/bluecwdull.png";
        rotstatus=1;
      } 
    }
    
    
    
    //Initialise system parameters here
    function varinit()
    {
        varchange();		
        //Variable r1 slider and number input types
        $('#l1slider').slider("value", 200);	
      $('#l1spinner').spinner("value", 200);
      
      $('#l2slider').slider("value", 600);	
      $('#l2spinner').spinner("value", 600);
    
      $('#D1slider').slider("value", 700);	
      $('#D1spinner').spinner("value", 700);
    
      $('#D2slider').slider("value", 1300);	
      $('#D2spinner').spinner("value", 1300);
    
      
      $('#A1slider').slider("value", 50);	
      $('#A1spinner').spinner("value", 50);
    
      $('#p1slider').slider("value", 60);	
      $('#p1spinner').spinner("value", 60);
    
      
      $('#n1slider').slider("value", 500);	
      $('#n1spinner').spinner("value", 500);
    
    }
    
    
    
    // Initialise and Monitor variable containing user inputs of system parameters.
    //change #id and repeat block for new variable. Make sure new <div> with appropriate #id is included in the markup
    function varchange()
    {
    //Variable r1 slider and number input types
    $('#l1slider').slider({ max : 450, min : 100, step : 5 });		// slider initialisation : jQuery widget
    $('#l1spinner').spinner({ max : 450, min : 100, step : 5 });		// number initialisation : jQuery widget			
    // monitoring change in value and connecting slider and number
    // setting trace point coordinate arrays to empty on change of link length
    $( "#l1slider" ).on( "slide", function( e, ui ) { $('#l1spinner').spinner("value",ui.value); ptx=[]; pty=[]; } );
    $( "#l1spinner" ).on( "spin", function( e, ui ) { $('#l1slider').slider("value",ui.value); ptx=[]; pty=[]; } );
    $( "#l1spinner" ).on( "change", function() {  varchange() } );
    
    $('#l2slider').slider({ max : 900, min : 550, step : 5 });		// slider initialisation : jQuery widget
    $('#l2spinner').spinner({ max : 900, min : 550, step : 5 });		// number initialisation : jQuery widget			
    // monitoring change in value and connecting slider and number
    // setting trace point coordinate arrays to empty on change of link length
    $( "#l2slider" ).on( "slide", function( e, ui ) { $('#l2spinner').spinner("value",ui.value); ptx=[]; pty=[]; } );
    $( "#l2spinner" ).on( "spin", function( e, ui ) { $('#l2slider').slider("value",ui.value); ptx=[]; pty=[]; } );
    $( "#l2spinner" ).on( "change", function() {  varchange() } );
    
    $('#D1slider').slider({ max : 1500, min : 500, step : 5 });		// slider initialisation : jQuery widget
    $('#D1spinner').spinner({ max : 1500, min : 50, step : 5 });		// number initialisation : jQuery widget			
    // monitoring change in value and connecting slider and number
    // setting trace point coordinate arrays to empty on change of link length
    $( "#D1slider" ).on( "slide", function( e, ui ) { $('#D1spinner').spinner("value",ui.value); ptx=[]; pty=[]; } );
    $( "#D1spinner" ).on( "spin", function( e, ui ) { $('#D1slider').slider("value",ui.value); ptx=[]; pty=[]; } );
    $( "#D1spinner" ).on( "change", function() {  varchange() } );
    
    $('#D2slider').slider({ max : 1500, min : 500, step : 10 });		// slider initialisation : jQuery widget
    $('#D2spinner').spinner({ max : 1500, min : 500, step : 10 });		// number initialisation : jQuery widget			
    // monitoring change in value and connecting slider and number
    // setting trace point coordinate arrays to empty on change of link length
    $( "#D2slider" ).on( "slide", function( e, ui ) { $('#D2spinner').spinner("value",ui.value); ptx=[]; pty=[]; } );
    $( "#D2spinner" ).on( "spin", function( e, ui ) { $('#D2slider').slider("value",ui.value); ptx=[]; pty=[]; } );
    $( "#D2spinner" ).on( "change", function() {  varchange() } );
    
    
    $('#A1slider').slider({ max : 80, min : 30, step : 1 });		// slider initialisation : jQuery widget
    $('#A1spinner').spinner({ max : 80, min : 30, step : 1 });		// number initialisation : jQuery widget			
    // monitoring change in value and connecting slider and number
    // setting trace point coordinate arrays to empty on change of link length
    $( "#A1slider" ).on( "slide", function( e, ui ) { $('#A1spinner').spinner("value",ui.value); ptx=[]; pty=[]; } );
    $( "#A1spinner" ).on( "spin", function( e, ui ) { $('#A1slider').slider("value",ui.value); ptx=[]; pty=[]; } );
    $( "#A1spinner" ).on( "change", function() {  varchange() } );
    
    $('#n1slider').slider({ max : 1000, min : 100, step : 10 });		// slider initialisation : jQuery widget
    $('#n1spinner').spinner({ max : 1000, min : 100, step : 10 });		// number initialisation : jQuery widget			
    // monitoring change in value and connecting slider and number
    // setting trace point coordinate arrays to empty on change of link length
    $( "#n1slider" ).on( "slide", function( e, ui ) { $('#n1spinner').spinner("value",ui.value); ptx=[]; pty=[]; } );
    $( "#n1spinner" ).on( "spin", function( e, ui ) { $('#n1slider').slider("value",ui.value); ptx=[]; pty=[]; } );
    $( "#n1spinner" ).on( "change", function() {  varchange() } );
    
    
    $('#p1slider').slider({ max : 100, min : 10, step : 1 });		// slider initialisation : jQuery widget
    $('#p1spinner').spinner({ max : 100, min : 10, step : 1 });		// number initialisation : jQuery widget			
    // monitoring change in value and connecting slider and number
    // setting trace point coordinate arrays to empty on change of link length
    $( "#p1slider" ).on( "slide", function( e, ui ) { $('#p1spinner').spinner("value",ui.value); ptx=[]; pty=[]; } );
    $( "#p1spinner" ).on( "spin", function( e, ui ) { $('#p1slider').slider("value",ui.value); ptx=[]; pty=[]; } );
    $( "#p1spinner" ).on( "change", function() {  varchange() } );
    
    
    varupdate();
    
    }
    
    function screenfwd()
    {
      if(subscreen<=5)
      {
      subscreen+=1;
      }
      if(subscreen<=5 && subscreen>0)
      {
      document.getElementById("screenbw").src="images/bluebkdulls.png"
      }
      if(subscreen==5)
      {
      document.getElementById('screenfw').src="images/bluefwddullsbw.png"
      }
       
    
    }
    function screenbwd()
    {
      if(subscreen>0)
      {
      subscreen-=1;
      }
      if(subscreen<6 && subscreen>=0)
        {
          document.getElementById('screenfw').src="images/bluefwddulls.png"
        }
      if(subscreen==0)
      {
        document.getElementById('screenbw').src="images/bluebkdullsbw.png"
      }
    
    }
    
    //Computing of various system parameters
    function varupdate()
    {
    
    $('#l1slider').slider("value", $('#l1spinner').spinner('value'));  //updating slider location with change in spinner(debug)
    
    zetha=document.getElementById("Angle").value;
    
    len1=(($('#l1spinner').spinner("value")/10)*3)+50;
    lenght1=$('#l1spinner').spinner("value");
    len2=(($('#l2spinner').spinner("value")/10)*3)+50;
    lenght2=$('#l2spinner').spinner("value");
    
    rad1=(($('#D1spinner').spinner("value"))/20);
    radius1=(($('#D1spinner').spinner("value"))/2);
    rad2=(($('#D2spinner').spinner("value"))/20);
    radius2=(($('#D2spinner').spinner("value"))/2);
    
    spd=(($('#n1spinner').spinner("value"))/6);
    rpm=$('#n1spinner').spinner("value");
    power=$('#p1spinner').spinner("value");
    stress=
    
    spdx=(spd*rad1)/50;
    spdy=(spd*rad2)/50;
    
    torque=9550*1000*(power/rpm);
    torque=torque.toFixed(2);
    
    td=torque/20000;
    
    Ft1=torque/radius1;
    Ft1=Ft1.toFixed(2);
    
    Ft2=torque/radius2;
    Ft2=Ft2.toFixed(2);
    
    
    Fr1=Ft1*Math.tan(rad(zetha));
    Fr1=Fr1.toFixed(2);
    
    Fr2=Ft2*Math.tan(rad(zetha));
    Fr2=Fr2.toFixed(2);
    
    
    RBv=((Ft1*lenght1)+(Ft2*lenght2))/1000;
    RBv=RBv.toFixed(2);
    RAv=parseFloat(Ft1)+parseFloat(Ft2)-parseFloat(RBv);
    RAv=RAv.toFixed(2);
    
    
    RBh=-((Ft1*lenght1)-(Ft2*lenght2))/1000;
    RBh=RBh.toFixed(2);
    RAh=parseFloat(Ft1)+parseFloat(RBh)-parseFloat(Ft2);
    RAh=RAh.toFixed(2);
    
    
    VBC = RAv*lenght1;
    VBC=VBC.toFixed(2);
    VBD=RBv*(1000-lenght2);
    VBD=VBD.toFixed(2);
    
    
    VBCd=VBC/8500;
    VBDd=VBD/8500;
    
    
    HBC=RAh*lenght1;
    HBC=HBC.toFixed(2);
    HBD=(-1*RBh)*(1000-lenght2);
    
    HBD=-1*HBD.toFixed(2);
    
    
    HBCd=HBC/10000;
    HBDd=HBD/10000;
    
    
    RBC=Math.sqrt((VBC*VBC)+(HBC*HBC));
    RBC=RBC.toFixed(2);
    RBD=Math.sqrt((VBD*VBD)+(HBD*HBD));
    RBD=RBD.toFixed(2);
    
    if(RBC>RBD)
    {
      BM=RBC;
    }
    else
    {
      BM=RBD;
    }
    
    
    
    
    temp5 = Math.pow(1.5*BM,2);
    temp6 = Math.pow(1.0*torque,2); 
    temp7 = (16/(Math.PI*stress)*(Math.sqrt(temp5+temp6)));
    d1 = Math.pow(temp7,(1/3));
    d1=d1.toFixed(2)
    
    
    for(i=0 ; i<24 ;i++)
    {
      if(d1<standd[i])
      {
     
        { break; }
      }
      
    }
    
    //If simulation is running
    if(!simstatus)
    {
      
    
    
        //everytime decremented theta value by 20
        theta=theta-(spd*rotstatus);
        
        //to have theta within the range 0 to 360
        theta=theta%360;
        
        //if theta is less than 0 then it should get updated to 360
        if(theta<0)
            theta+=360;
    
    
            //everytime decremented theta value by 20
        theta2=theta2-(spd*rotstatus);
        
        //to have theta within the range 0 to 360
        theta2=theta2%360;
        
        //if theta is less than 0 then it should get updated to 360
        if(theta2<0)
        theta2+=360;
        
    
    
    
    
        thetax=thetax-(spdx*-1);
        
        //to have theta within the range 0 to 360
        thetax=thetax%360;
        
        //if theta is less than 0 then it should get updated to 360
        if(thetax<0)
            thetax+=360;
    
    
            //everytime decremented theta value by 20
        thetay=thetay-(spdy*-1);
        
        //to have theta within the range 0 to 360
        thetay=thetay%360;
        
        //if theta is less than 0 then it should get updated to 360
        if(thetay<0)
            thetay+=360;
    
    }
    
    //If simulation is stopped
    if(simstatus)
    {
    // 	printcomment("Left Side Comment:Length: "+len,1);
    // printcomment("Right Side Comment:Angle: "+theta,2);
        
    }
    oxcoord=175;
        oycoord=150;
        
        axcoord=oxcoord+rad1*Math.cos(rad(theta));
        aycoord=oycoord+rad1*Math.sin(rad(theta));
        
        bxcoord=oxcoord+rad1*Math.cos(rad(theta));
      bycoord=oycoord-200;
      
    
      oxcoord2=375;
        oycoord2=150;
        
        axcoord2=oxcoord2+rad2*Math.cos(rad(theta2));
        aycoord2=oycoord2+rad2*Math.sin(rad(theta2));
        
        bxcoord2=oxcoord2+rad2*Math.cos(rad(theta2));
        bycoord2=oycoord2-200;
    
    
      oxcoordx=oxcoord-rad1-50;
        oycoordx=150;
        
        axcoordx=oxcoordx+50*Math.cos(rad(thetax));
        aycoordx=oycoordx+50*Math.sin(rad(thetax));
        
        bxcoordx=oxcoordx+50*Math.cos(rad(thetax));
      bycoordx=oycoordx-200;
    
      oxcoordy=oxcoord2+rad2+50;
        oycoordy=150;
        
        axcoordy=oxcoordy+50*Math.cos(rad(thetay));
        aycoordy=oycoordy+50*Math.sin(rad(thetay));
        
        bxcoordy=oxcoordy+50*Math.cos(rad(thetay));
      bycoordy=oycoordy-200;
    
      if(subscreen==0)
    {
      printcomment("",0);
    draw();
    }
    else if(subscreen==1)
    {
      printcomment("Neglecting forces due to weight of shaft and gear",0);
      draw2();
    
    }
    else if(subscreen==2)
    {
      printcomment("Torque="+torque+"Nmm",1);
      printcomment("",2);
      draw3();
    
    }
    else if(subscreen==3)
    {
      printcomment("VBM at A=0Nmm <br>VBM at C="+VBC+"Nmm",1);
      printcomment("VBM at D="+VBD+"Nmm  <br>VBM at B=0Nmm",2);
      draw4();
    
    }
    else if(subscreen==4)
    {
      printcomment("HBM at A=0N <br>HBM at C="+HBC+"N",1);
      printcomment("HBM at D=-"+HBD+"N  <br>HBM at B=0N",2);
      draw5();
    
    }
    else if(subscreen==5)
    {
      printcomment("Bending Moment at A=0<br>Bending Moment at C="+RBC+"<br>Bending Moment at D="+RBD+"<br>Bending Moment at B=0",1)
      printcomment("Diamter of shaft="+d1+"mm<br>Standard diameter="+standd[i]+'mm',2);
      draw6();
    
    }
    
    
    
    
    }
    
    //Simulation graphics
    function draw()
    {
      canvas = document.getElementById("simscreen");
      ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,550,400);
      
      
      ctx.beginPath();  
        ctx.strokeStyle="#00004d";
      ctx.lineWidth=1;
      ctx.setLineDash([2,2]);
      ctx.moveTo(50,20);
      ctx.lineTo(50,350);
      ctx.moveTo(len1,20);
      ctx.lineTo(len1,350);
      ctx.moveTo(len2,20);
      ctx.lineTo(len2,350);
      ctx.moveTo(350,20);
      ctx.lineTo(350,350);
      ctx.stroke();
    
      //bearing
      ctx.beginPath();
      ctx.moveTo(10,70);
      ctx.setLineDash([]);
      ctx.strokestyle="black";
      ctx.strokeRect(40,200,20,10);
      ctx.strokeRect(340,200,20,10);
      ctx.stroke();
      ctx.closePath();
    
    // shafts
      ctx.beginPath();
      ctx.moveTo(60,70);
      ctx.fillStyle="#8a8a5c";
      ctx.fillRect(60,200,280,10);
      ctx.fill();
      ctx.closePath();
    
    
      ctx.beginPath();
      ctx.fillStyle="#00ffbf";
      ctx.moveTo(len1,200);
      ctx.fillRect(len1-5,205-rad1,10,rad1*2);
      ctx.fill()
      ctx.closePath();
    
    
      ctx.beginPath();
      ctx.fillStyle="#ecec13";
      ctx.moveTo(len1,200);
      ctx.fillRect(len2-5,205-rad2,10,rad2*2);
      ctx.fill()
      ctx.closePath();
    
    
      ctx.beginPath();
      ctx.setLineDash([]);
      ctx.strokestyle="black";
      ctx.moveTo(50,290);
      ctx.lineTo(50,300);
      ctx.moveTo(len1,290);
      ctx.lineTo(len1,300);
      ctx.moveTo(50,310);
      ctx.lineTo(50,320);
      ctx.moveTo(len2,310);
      ctx.lineTo(len2,320);
      ctx.moveTo(50,295);
      ctx.lineTo(len1,295);
      ctx.moveTo(50,315);
      ctx.lineTo(len2,315);
      ctx.moveTo(50,97);
      ctx.lineTo(350,97);
      ctx.moveTo(50,90);
      ctx.lineTo(50,105);
      ctx.moveTo(350,90);
      ctx.lineTo(350,105);
      ctx.stroke();
      ctx.closePath();
    
    
      ctx.beginPath();
      ctx.fillStyle="black";
      ctx.moveTo(50,97);
      ctx.lineTo(55,92);
      ctx.lineTo(55,102);
      ctx.lineTo(50,97);
      ctx.moveTo(350,97);
      ctx.lineTo(345,92);
      ctx.lineTo(345,102);
      ctx.lineTo(350,97);
      ctx.moveTo(50,295);
      ctx.lineTo(55,290);
      ctx.lineTo(55,300);
      ctx.lineTo(50,295);
      ctx.moveTo(len1,295);
      ctx.lineTo(len1-5,290);
      ctx.lineTo(len1-5,300);
      ctx.lineTo(len1,295);
      ctx.moveTo(50,315);
      ctx.lineTo(55,310);
      ctx.lineTo(55,320);
      ctx.lineTo(50,315);
      ctx.moveTo(len2,315);
      ctx.lineTo(len2-5,310);
      ctx.lineTo(len2-5,320);
      ctx.lineTo(len2,315);
      ctx.fill();
      
      
      
      ctx.font = "15px Georgia";
      ctx.fillStyle ="#00004d";
      ctx.fillText("l1", len1/2+25, 310);
      ctx.fillText("l2", len2/2+25,340);
      ctx.fillText("A",55,225);
      ctx.fillText("B",350,225);
      ctx.fillText("C",len1+5,225);
      ctx.fillText("D",len2+5,225);
      ctx.fillText("1000mm",150,95);
      ctx.fillText("Driver",len1-25,125);
      ctx.fillText("Driven",len2-25,125);
      
      
      
      //clears the complete canvas#simscreen everytime
      // //draw Horizontal line
        // ctx.beginPath();  
        // ctx.strokeStyle="goldenrod";
        // ctx.lineWidth=2;
        // ctx.moveTo(oxcoord-50,oycoord);
        // ctx.lineTo(oxcoord+50,oycoord);
        // ctx.stroke();
        // ctx.closePath();
        
        // //display origin point
        // ctx.beginPath();  
        // ctx.strokeStyle="blue";
        // ctx.fillStyle="#000000";
        // ctx.font = "14px verdana";	
        // ctx.lineWidth=2;
        // ctx.arc(oxcoord,oycoord,10,0,1*Math.PI,true);
        // ctx.fillText("o",oxcoord-5,oycoord+5);
        // ctx.stroke();
        // ctx.closePath();
        
        // //to draw line between o and a point 
        // ctx.beginPath();  
        // ctx.strokeStyle="red";
        // ctx.lineWidth=5;
        // ctx.moveTo(oxcoord,oycoord);
        // ctx.lineTo(axcoord,aycoord);
        // ctx.arc(axcoord,aycoord,5,0,Math.PI*2,true);
        
        // ctx.stroke();
        // ctx.closePath();
        
        // //to draw point at the end of line
        // ctx.beginPath();  
        // ctx.strokeStyle="#000000";
        // ctx.lineWidth=2;
        // ctx.arc(axcoord,aycoord,5,0,2*Math.PI,false);
        // ctx.stroke();
        // ctx.closePath();
        
        
        
    
     
     }
     function draw2()
    {
      canvas = document.getElementById("simscreen");
      ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,550,400);
    
    
      ctx.beginPath();  
        ctx.fillStyle="#00ffbf";
        ctx.lineWidth=2;
      ctx.arc(oxcoord,oycoord,rad1,0,2*Math.PI,true);
      ctx.stroke();
        ctx.fill();
      ctx.closePath();
    
      
    
      ctx.beginPath();  
        ctx.strokeStyle="red";
        ctx.lineWidth=5;
        ctx.moveTo(oxcoord,oycoord);
      ctx.lineTo(axcoord,aycoord);
      ctx.stroke();
      ctx.closePath();
    
    
      ctx.beginPath();  
        ctx.fillStyle="#ecec13";
        ctx.lineWidth=2;
      ctx.arc(oxcoord2,oycoord2,rad2,0,2*Math.PI,true);
        ctx.fill();
      ctx.closePath();
        
        //to draw line between o and a point 
        ctx.beginPath();  
        ctx.strokeStyle="#f20d80";
        ctx.lineWidth=5;
        ctx.moveTo(oxcoord2,oycoord2);
      ctx.lineTo(axcoord2,aycoord2);
      ctx.stroke();
      ctx.closePath();
    
    
      
    
      ctx.beginPath();  
        ctx.fillStyle="#ffb366";
        ctx.lineWidth=2;
      ctx.arc(oxcoordx,oycoordx,50,0,2*Math.PI,true);
      ctx.stroke();
        ctx.fill();
      ctx.closePath();
    
      
        //to draw line between o and a point 
      ctx.beginPath();  
        ctx.strokeStyle="red";
        ctx.lineWidth=5;
        ctx.moveTo(oxcoordx,oycoordx);
      ctx.lineTo(axcoordx,aycoordx);
      ctx.stroke();
      ctx.closePath();
    
      ctx.beginPath();  
        ctx.fillStyle="#990000";
        ctx.lineWidth=2;
      ctx.arc(oxcoordy,oycoordy,50,0,2*Math.PI,true);
      ctx.stroke();
        ctx.fill();
      ctx.closePath();
    
      
        //to draw line between o and a point 
      ctx.beginPath();  
        ctx.strokeStyle="red";
        ctx.lineWidth=5;
        ctx.moveTo(oxcoordy,oycoordy);
      ctx.lineTo(axcoordy,aycoordy);
      ctx.stroke();
      ctx.closePath();
    
    
    
      ctx.beginPath();  
        ctx.strokeStyle="black";
      ctx.lineWidth=2;
      ctx.moveTo(oxcoord-rad1,50);
      ctx.lineTo(oxcoord-rad1,140);
      ctx.stroke();
    
      ctx.beginPath();  
        ctx.strokeStyle="black";
      ctx.lineWidth=2;
      ctx.moveTo(oxcoord2+rad2,50);
      ctx.lineTo(oxcoord2+rad2,140);
      ctx.stroke();
    
      ctx.beginPath();  
      ctx.fillStyle="black"
      ctx.moveTo(oxcoord-rad1,140);
      ctx.lineTo(oxcoord-rad1-5,135);
      ctx.lineTo(oxcoord-rad1+5,135);
      ctx.lineTo(oxcoord-rad1,140);
      ctx.fill();
    
    
      ctx.beginPath();  
      ctx.fillStyle="black"
      ctx.moveTo(oxcoord2+rad2,140);
      ctx.lineTo(oxcoord2+rad2-5,135);
      ctx.lineTo(oxcoord2+rad2+5,135);
      ctx.lineTo(oxcoord2+rad2,140);
      ctx.fill();
    
      ctx.beginPath();  
        ctx.strokeStyle="black";
      ctx.lineWidth=2;
      ctx.moveTo(oxcoord-rad1,50);
      ctx.lineTo(oxcoord-rad1,140);
      ctx.stroke();
    
      ctx.beginPath();  
        ctx.strokeStyle="black";
      ctx.lineWidth=2;
      ctx.moveTo(oxcoord-rad1,150);
      ctx.lineTo(oxcoord-rad1-80,150);
      ctx.stroke();
    
      ctx.beginPath();  
        ctx.strokeStyle="black";
      ctx.lineWidth=2;
      ctx.moveTo(oxcoord2+rad2,150);
      ctx.lineTo(oxcoord2+rad2+80,150);
      ctx.stroke();
    
      ctx.beginPath();  
      ctx.fillStyle="black"
      ctx.moveTo(oxcoord-rad1,150);
      ctx.lineTo(oxcoord-rad1-5,145);
      ctx.lineTo(oxcoord-rad1-5,155);
      ctx.lineTo(oxcoord-rad1,150);
      ctx.fill();
    
      ctx.beginPath();  
      ctx.fillStyle="black"
      ctx.moveTo(oxcoord2+rad2,150);
      ctx.lineTo(oxcoord2+rad2+5,145);
      ctx.lineTo(oxcoord2+rad2+5,155);
      ctx.lineTo(oxcoord2+rad2,150);
      ctx.fill();
     
    
      ctx.font = "15px san-sarif";
      ctx.fillStyle ="#00004d";
      ctx.fillText("Ft1",oxcoord-rad1-10,45);
      ctx.fillText("Ft2",oxcoord2+rad2-10,45);
      ctx.fillText("Fr2",oxcoord2+rad2+80,150);
      ctx.fillText("Fr1",oxcoord-rad1-95,150);
      ctx.fillText("Driver",100,225);
      ctx.fillText("Driven",425,225);
      ctx.fillText("Free Body Diagram",215,300);
    
    }
    function draw3()
    {
      canvas = document.getElementById("simscreen");
      ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,550,400);
      ctx.beginPath();  
      ctx.setLineDash([2,2]);
      ctx.strokeStyle="black";
      ctx.lineWidth=1;
      ctx.moveTo(50,20);
      ctx.lineTo(50,350);
      ctx.moveTo(350,20);
      ctx.lineTo(350,350);
    //vertical line for driver/driven  pulley/gear
      ctx.moveTo(len1,20);
      ctx.lineTo(len1,350);
      ctx.moveTo(len2,20);
      ctx.lineTo(len2,350);
      ctx.stroke();
      ctx.closePath();
    
      ctx.beginPath();
      ctx.setLineDash([]);
      ctx.strokeStyle='black';
      ctx.moveTo(50,205);
      ctx.lineTo(350,205);
      ctx.stroke();
    
    
      ctx.beginPath();
      ctx.fillStyle="#ffccff";
      ctx.moveTo(len1,205);
      ctx.lineTo(len1,205-td);
      ctx.lineTo(len2,205-td);
      ctx.lineTo(len2,205);
      ctx.lineTo(len1,205);
      ctx.fill();
    
      ctx.font = "15px san-sarif";
      ctx.fillStyle ="#00004d";
      ctx.fillText("A",25,225);
      ctx.fillText("B",320,225);
      ctx.fillText("C",len1+5,225);
      ctx.fillText("D",len2+5,225);
      ctx.fillText("Mt=",110,150);
      ctx.fillText(torque+"Nmm",135,150);
    
      ctx.font = "bold 15px san-sarif";
      ctx.fillStyle ="#000000";
      ctx.fillText("TORQUE DIAGRAM",120,350);
    }
    function draw4()
    {
      canvas = document.getElementById("simscreen");
      ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,550,400);
      ctx.beginPath();  
      ctx.setLineDash([2,2]);
      ctx.strokeStyle="black";
      ctx.lineWidth=1;
      ctx.moveTo(50,20);
      ctx.lineTo(50,350);
      ctx.moveTo(350,20);
      ctx.lineTo(350,350);
    //vertical line for driver/driven  pulley/gear
      ctx.moveTo(len1,20);
      ctx.lineTo(len1,350);
      ctx.moveTo(len2,20);
      ctx.lineTo(len2,350);
      ctx.stroke();
      ctx.closePath();
    
      
      ctx.beginPath();
      ctx.setLineDash([]);
      ctx.strokeStyle='black';
      ctx.moveTo(50,55);
      ctx.lineTo(350,55);
      ctx.moveTo(len1,55);
      ctx.lineTo(len1,35);
      ctx.moveTo(len2,55);
      ctx.lineTo(len2,35);
      ctx.moveTo(50,55);
      ctx.lineTo(50,75);
      ctx.moveTo(350,55);
      ctx.lineTo(350,75);
      ctx.stroke();
    
      ctx.beginPath();
      ctx.moveTo(len1,55);
      ctx.lineTo(len1-5,50);
      ctx.lineTo(len1+5,50);
      ctx.lineTo(len1,55);
      ctx.moveTo(len2,55);
      ctx.lineTo(len2-5,50);
      ctx.lineTo(len2+5,50);
      ctx.lineTo(len2,55);
      ctx.moveTo(350,55);
      ctx.lineTo(345,60);
      ctx.lineTo(355,60);
      ctx.lineTo(350,55);
      ctx.moveTo(50,55);
      ctx.lineTo(45,60);
      ctx.lineTo(55,60);
      ctx.lineTo(50,55);
      ctx.fill();
    
      ctx.beginPath();
      ctx.setLineDash([]);
      ctx.strokeStyle='black';
      ctx.moveTo(50,300);
      ctx.lineTo(350,300);
      ctx.stroke();
    
    
      ctx.beginPath()
      ctx.fillStyle="#b3ffb3"
      ctx.moveTo(50,300);
      ctx.lineTo(len1,300-VBCd);
      ctx.lineTo(len2,300-VBDd);
      ctx.lineTo(350,300);
      ctx.lineTo(50,300);
      ctx.fill();
    
     
      ctx.font = "15px san-sarif";
      ctx.fillStyle ="#00004d";
      ctx.fillText("A",30,315);
      ctx.fillText("B",340,315);
      ctx.fillText("C",len1+5,315);
      ctx.fillText("D",len2+5,315);
      ctx.fillText("A",30,70);
      ctx.fillText("B",360,70);
      ctx.fillText("C",len1+5,70);
      ctx.fillText("D",len2+5,70);
      ctx.fillText("Ft1="+Ft1+"N",len1-70,35);
      ctx.fillText("Ft2="+Ft2+"N",len2+2,35);
      ctx.fillText("RAv="+RAv+"N",50,95);
      ctx.fillText("RBv="+RBv+"N",350,95);
    
    
      ctx.font = "bold 15px san-sarif";
      ctx.fillStyle ="#000000";
      ctx.fillText("Vertical load diagram",105,110);
      ctx.fillText("Vertical Bending Moment(VBM) diagram",55,370);
    
    
    }
    
    function draw5()
    {
      canvas = document.getElementById("simscreen");
      ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,550,400);
      ctx.beginPath();  
      ctx.setLineDash([2,2]);
      ctx.strokeStyle="black";
      ctx.lineWidth=1;
      ctx.moveTo(50,20);
      ctx.lineTo(50,350);
      ctx.moveTo(350,20);
      ctx.lineTo(350,350);
    //vertical line for driver/driven  pulley/gear
      ctx.moveTo(len1,20);
      ctx.lineTo(len1,350);
      ctx.moveTo(len2,20);
      ctx.lineTo(len2,350);
      ctx.stroke();
      ctx.closePath();
    
      
      ctx.beginPath();
      ctx.setLineDash([]);
      ctx.strokeStyle='black';
      ctx.moveTo(50,55);
      ctx.lineTo(350,55);
      ctx.stroke();
    
      ctx.beginPath();
      ctx.setLineDash([]);
      ctx.strokeStyle='black';
      ctx.moveTo(50,250);
      ctx.lineTo(350,250);
      ctx.stroke();
    
      ctx.beginPath();
      ctx.setLineDash([]);
      ctx.strokeStyle='black';
      ctx.moveTo(50,55);
      ctx.lineTo(350,55);
      ctx.moveTo(len1,55);
      ctx.lineTo(len1,35);
      ctx.moveTo(len2,55);
      ctx.lineTo(len2,75);
      ctx.moveTo(50,55);
      ctx.lineTo(50,75);
      ctx.moveTo(350,55);
      ctx.lineTo(350,35);
      ctx.stroke();
    
      ctx.beginPath();
      ctx.moveTo(len1,55);
      ctx.lineTo(len1-5,50);
      ctx.lineTo(len1+5,50);
      ctx.lineTo(len1,55);
      ctx.moveTo(len2,55);
      ctx.lineTo(len2-5,60);
      ctx.lineTo(len2+5,60);
      ctx.lineTo(len2,55);
      ctx.moveTo(350,55);
      ctx.lineTo(345,50);
      ctx.lineTo(355,50);
      ctx.lineTo(350,55);
      ctx.moveTo(50,55);
      ctx.lineTo(45,60);
      ctx.lineTo(55,60);
      ctx.lineTo(50,55);
      ctx.fill();
    
    
      ctx.beginPath();
      ctx.fillStyle="#99ddff";
      ctx.moveTo(50,250);
      ctx.lineTo(len1,250-HBCd);
      ctx.lineTo(len2,250+HBDd);
      ctx.lineTo(350,250);
      ctx.fill();
     
      ctx.font = "15px san-sarif";
      ctx.fillStyle ="#00004d";
      ctx.fillText("A",30,275);
      ctx.fillText("B",360,275);
      ctx.fillText("C",len1+5,275);
      ctx.fillText("D",len2+5,275);
      ctx.fillText("A",30,70);
      ctx.fillText("B",340,70);
      ctx.fillText("C",len1+5,70);
      ctx.fillText("D",len2+5,70);
    
      ctx.fillText("Fr1="+Fr1+"N",len1+2,35);
      ctx.fillText("Fr2="+Fr2+"N",len2+2,95);
      ctx.fillText("RAh="+RAh+"N",50,95);
      ctx.fillText("RBh="+RBh+"N",350,35);
    
    
      ctx.font = "bold 15px san-sarif";
      ctx.fillStyle ="#000000";
      ctx.fillText("Horizontal load diagram",105,110);
      ctx.fillText("Horizontal Bending Moment(VBM) diagram",55,370);
    }
    
    
    function draw6()
    {
      canvas = document.getElementById("simscreen");
      ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,550,400);
      ctx.beginPath();  
      ctx.setLineDash([2,2]);
      ctx.strokeStyle="black";
      ctx.lineWidth=1;
      ctx.moveTo(50,20);
      ctx.lineTo(50,350);
      ctx.moveTo(350,20);
      ctx.lineTo(350,350);
    //vertical line for driver/driven  pulley/gear
      ctx.moveTo(len1,20);
      ctx.lineTo(len1,350);
      ctx.moveTo(len2,20);
      ctx.lineTo(len2,350);
      ctx.stroke();
      ctx.closePath();
    
      ctx.beginPath();
      ctx.moveTo(60,70);
      ctx.fillStyle="#8a8a5c";
      ctx.fillRect(60,200,280,10);
      ctx.fill();
      ctx.closePath();
    
    
      ctx.beginPath();
      ctx.moveTo(10,70);
      ctx.setLineDash([]);
      ctx.strokestyle="black";
      ctx.strokeRect(40,200,20,10);
      ctx.strokeRect(340,200,20,10);
      ctx.stroke();
      ctx.closePath();
    
    
    
    
      ctx.beginPath();
      ctx.fillStyle="#00ffbf";
      ctx.moveTo(len1,200);
      ctx.fillRect(len1-5,205-rad1,10,rad1*2);
      ctx.fill()
      ctx.closePath();
    
    
      ctx.beginPath();
      ctx.fillStyle="#ecec13";
      ctx.moveTo(len1,200);
      ctx.fillRect(len2-5,205-rad2,10,rad2*2);
      ctx.fill()
      ctx.closePath();
    
    
      ctx.beginPath();
      ctx.setLineDash([]);
      ctx.strokestyle="black";
      ctx.moveTo(50,290);
      ctx.lineTo(50,300);
      ctx.moveTo(len1,290);
      ctx.lineTo(len1,300);
      ctx.moveTo(50,310);
      ctx.lineTo(50,320);
      ctx.moveTo(len2,310);
      ctx.lineTo(len2,320);
      ctx.moveTo(50,295);
      ctx.lineTo(len1,295);
      ctx.moveTo(50,315);
      ctx.lineTo(len2,315);
      ctx.moveTo(50,97);
      ctx.lineTo(350,97);
      ctx.moveTo(50,90);
      ctx.lineTo(50,105);
      ctx.moveTo(350,90);
      ctx.lineTo(350,105);
      ctx.stroke();
      ctx.closePath();
    
    
      ctx.beginPath();
      ctx.fillStyle="black";
      ctx.moveTo(50,97);
      ctx.lineTo(55,92);
      ctx.lineTo(55,102);
      ctx.lineTo(50,97);
      ctx.moveTo(350,97);
      ctx.lineTo(345,92);
      ctx.lineTo(345,102);
      ctx.lineTo(350,97);
      ctx.moveTo(50,295);
      ctx.lineTo(55,290);
      ctx.lineTo(55,300);
      ctx.lineTo(50,295);
      ctx.moveTo(len1,295);
      ctx.lineTo(len1-5,290);
      ctx.lineTo(len1-5,300);
      ctx.lineTo(len1,295);
      ctx.moveTo(50,315);
      ctx.lineTo(55,310);
      ctx.lineTo(55,320);
      ctx.lineTo(50,315);
      ctx.moveTo(len2,315);
      ctx.lineTo(len2-5,310);
      ctx.lineTo(len2-5,320);
      ctx.lineTo(len2,315);
      ctx.fill();
      
      
      
      ctx.font = "15px Georgia";
      ctx.fillStyle ="#00004d";
      ctx.fillText("l1", len1/2+25, 310);
      ctx.fillText("l2", len2/2+25,340);
      ctx.fillText("A",55,245);
      ctx.fillText("B",350,245);
      ctx.fillText("C",len1+5,245);
      ctx.fillText("D",len2+5,245);
      ctx.fillText("1000mm",150,95);
      ctx.fillText("Driver",len1-25,125);
      ctx.fillText("Driven",len2-25,125);
    
      ctx.beginPath();
      ctx.fillStyle="yellow";
      ctx.fillRect(370,160,170,70);
      ctx.fill();
      ctx.beginPath();
      ctx.strokeStyle="Red";
      ctx.setLineDash([])
      ctx.lineWidth=5;
      ctx.strokeRect(367.5,157.5,170,75);
      ctx.stroke();
    
    
    
      ctx.fillStyle="Red"
      ctx.fillText("Considering nature of  ",370,180);
      ctx.fillText("load as suddenly applied" ,370,195);
      ctx.fillText("load,minor shocks only " ,370,210);
      ctx.fillText("i.e, Cm=1.5 and Ct=1.0",370,225);
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
    
