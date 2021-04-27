
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
    
    var theta2 = 90; // all angles to be defined either in degrees only or radians only throughout the program and convert as and when required
    //origin points circle
    var oxcoord2 =250;
    var oycoord2 = 250;
    
    //line to points
    var axcoord2 = 0;
    var aycoord2 = 0;
    
    
    
    //length 
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
    var variablescreen=0;
    var subscreen=0;
    
    var tension1;
    var tension2;
    var tension3;
    var tension4;
    var angle=Math.PI;
    var cof=0.3;
    var torque;
    var temp2;
    var td;
    var vload;
    var hload;
    var reactionAv;
    var reactionBv;
    var reactionAh;
    var reactionBh;
    var VBC;
    var VBD;
    var HBC;
    var HBD;
    var VBCd;
    var VBDd;
    var HBCd;
    var HBDd;
    var BMD;
    var BMC;
    var BMDd;
    var BMCd;
    var maxBM;
    var temp5;
    var temp6;
    var temp7;
    var stress;
    var d1;
    var d2;
    var standd=[36,40,45,50,56,63,71,80,90,100,110,125];
    
    // var standd=[6,8,10,12,14,16,18,20,22,25,28,32,36,40,45,50,56,63,71,80,90,100,110,125,140,160,180,200,220,240,260,280,300,320,340,360,380,400,420,440,450,480,500,530,560,600]
    var temp4;
    var i=0
    var d2;
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
        simstatus=1;
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
      
    
      $('#r1slider').slider("value", 500);	
      $('#r1spinner').spinner("value", 500);
      
      $('#r2slider').slider("value", 300);	
        $('#r2spinner').spinner("value", 300);
    
      $('#t1slider').slider("value", 2000);	
        $('#t1spinner').spinner("value", 2000);
    
      $('#c1slider').slider("value", 0.3) ;	
      $('#c1spinner').spinner("value", 0.3);
      
    
      $('#A1slider').slider("value", 50) ;	
        $('#A1spinner').spinner("value", 50);
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
    
    $('#r1slider').slider({ max : 700, min : 200, step : 5 });		// slider initialisation : jQuery widget
    $('#r1spinner').spinner({ max : 700, min : 200, step : 5 });		// number initialisation : jQuery widget			
    // monitoring change in value and connecting slider and number
    // setting trace point coordinate arrays to empty on change of link length
    $( "#r1slider" ).on( "slide", function( e, ui ) { $('#r1spinner').spinner("value",ui.value); ptx=[]; pty=[]; } );
    $( "#r1spinner" ).on( "spin", function( e, ui ) { $('#r1slider').slider("value",ui.value); ptx=[]; pty=[]; } );
    $( "#r1spinner" ).on( "change", function() {  varchange() } );
    
    $('#r2slider').slider({ max : 700, min : 200, step : 10 });		// slider initialisation : jQuery widget
    $('#r2spinner').spinner({ max : 700, min : 200, step : 10 });		// number initialisation : jQuery widget			
    // monitoring change in value and connecting slider and number
    // setting trace point coordinate arrays to empty on change of link length
    $( "#r2slider" ).on( "slide", function( e, ui ) { $('#r2spinner').spinner("value",ui.value); ptx=[]; pty=[]; } );
    $( "#r2spinner" ).on( "spin", function( e, ui ) { $('#r2slider').slider("value",ui.value); ptx=[]; pty=[]; } );
    $( "#r2spinner" ).on( "change", function() {  varchange() } );
    
    $('#t1slider').slider({ max : 5000, min : 1000, step : 250 });		// slider initialisation : jQuery widget
    $('#t1spinner').spinner({ max :5000, min : 1000, step : 250 });		// number initialisation : jQuery widget			
    // monitoring change in value and connecting slider and number
    // setting trace point coordinate arrays to empty on change of link length
    $( "#t1slider" ).on( "slide", function( e, ui ) { $('#t1spinner').spinner("value",ui.value); ptx=[]; pty=[]; } );
    $( "#t1spinner" ).on( "spin", function( e, ui ) { $('#t1slider').slider("value",ui.value); ptx=[]; pty=[]; } );
    $( "#t1spinner" ).on( "change", function() {  varchange() } );
    
    $('#c1slider').slider({ max : 1, min : 0.1, step : 0.1 });		// slider initialisation : jQuery widget
    $('#c1spinner').spinner({ max :1, min : 0.1, step : 0.1 });		// number initialisation : jQuery widget			
    // monitoring change in value and connecting slider and number
    // setting trace point coordinate arrays to empty on change of link length
    $( "#c1slider" ).on( "slide", function( e, ui ) { $('#c1spinner').spinner("value",ui.value); ptx=[]; pty=[]; } );
    $( "#c1spinner" ).on( "spin", function( e, ui ) { $('#c1slider').slider("value",ui.value); ptx=[]; pty=[]; } );
    $( "#c1spinner" ).on( "change", function() {  varchange() } );
    
    $('#A1slider').slider({ max : 80, min : 30, step : 1 });		// slider initialisation : jQuery widget
    $('#A1spinner').spinner({ max :80, min : 30, step : 1 });		// number initialisation : jQuery widget			
    // monitoring change in value and connecting slider and number
    // setting trace point coordinate arrays to empty on change of link length
    $( "#A1slider" ).on( "slide", function( e, ui ) { $('#A1spinner').spinner("value",ui.value); ptx=[]; pty=[]; } );
    $( "#A1spinner" ).on( "spin", function( e, ui ) { $('#A1slider').slider("value",ui.value); ptx=[]; pty=[]; } );
    $( "#A1spinner" ).on( "change", function() {  varchange() } );
    
    
    varupdate();
    }
    
    
    function screenfwd()
    {
      if(subscreen<=4)
      {
      subscreen+=1;
      }
      if(subscreen<=4 && subscreen>0)
      {
      document.getElementById("screenbw").src="images/bluebkdulls.png"
      }
      if(subscreen==4)
      {
      document.getElementById('screenfw').src="images/bluefwddullsbw.png"
      }
        console.log(subscreen);
    
    }
    function screenbwd()
    {
      if(subscreen>0)
      {
      subscreen-=1;
      }
      if(subscreen<4 && subscreen>=0)
        {
          document.getElementById('screenfw').src="images/bluefwddulls.png"
        }
      if(subscreen==0)
      {
        document.getElementById('screenbw').src="images/bluebkdullsbw.png"
      }
      console.log(subscreen);
    }
    
    //Computing of various system parameters
    function varupdate()
    {
    
    $('#l1slider').slider("value", $('#l1spinner').spinner('value'));  //updating slider location with change in spinner(debug)
    
    
    len1=(($('#l1spinner').spinner("value")/10)*3)+20;
    lenght1=$('#l1spinner').spinner("value");
    
    len2=(($('#l2spinner').spinner("value")/10)*3)+20;
    lenght2=$('#l2spinner').spinner("value");
    
    rad1=(($('#r1spinner').spinner("value"))/10);
    radius1=$('#r1spinner').spinner("value");
    
    rad2=(($('#r2spinner').spinner("value"))/10);
    radius2=$('#r2spinner').spinner("value");
    
    tension1=$('#t1spinner').spinner("value");
    cof=$('#c1spinner').spinner("value");
    
    stress=$('#A1spinner').spinner("value");
    
    
    tension2 = (tension1)/(Math.exp(cof*angle));
    tension2 = tension2.toFixed(2);
    console.log(tension2);
    torque = (tension1-tension2)*radius1;
    torque = torque.toFixed(2);
    console.log(torque);
    
    
    temp2 = torque/radius2;
    
    tension4 = (temp2)/(Math.exp(cof*angle)-1);
    tension4 = tension4.toFixed(2);
    console.log(tension4);
    
    tension3 = (Math.exp(cof*angle)*tension4);
    tension3 = tension3.toFixed(2);
    console.log(tension3);
    
    console.log(subscreen);
    
    td = torque/10000;
    
    
    vload = parseFloat(tension1)+parseFloat(tension2);
    vload = vload.toFixed(2);
    console.log(vload);
    hload = parseFloat(tension3)+parseFloat(tension4);
    console.log(hload)
    hload = hload.toFixed(2);
    
    reactionBv = (vload*lenght1)/1000;
    reactionBv = reactionBv.toFixed(2);
    console.log(reactionBv)
    reactionAv = vload-reactionBv;
    reactionAv = reactionAv.toFixed(2);
    console.log(reactionAv)
    
    
    reactionBh = (hload*lenght2)/1000;
    reactionBh = reactionBh.toFixed(2);
    console.log(reactionBh);
    reactionAh = hload-reactionBh;
    reactionAh = reactionAh.toFixed(2);
    console.log(reactionAh);
    
    
    
    
    VBC = reactionAv*lenght1;
    VBC = VBC.toFixed(2);
    // console.log(VBC);
    VBD = reactionBv*(1000-lenght2);
    // console.log(VBD)
    VBD = VBD.toFixed(2);
    
    HBC = reactionAh*lenght1;
    HBC = HBC.toFixed(2);
    // console.log(HBC);
    HBD = reactionBh*(1000-lenght2);
    HBD = HBD.toFixed(2);
    // console.log(HBC);
    
    
    VBCd = (VBC/5000);
    // console.log(VBCd);
    VBDd = (VBD/4500);
    // console.log(VBDd);
    HBCd = (HBC/6000);
    console.log(HBCd);
    HBDd = (HBD/7000);
    // console.log(HBDd);
    
    
    BMC = Math.sqrt((VBC*VBC)+(HBC*HBC));
    BMC = BMC.toFixed(2)
    console.log(BMC);
    BMD = Math.sqrt((VBD*VBD)+(HBD*HBD));
    BMD = BMD.toFixed(2)
    
    BMDd = BMD/8000;
    BMCd = BMC/8000;
    
    Math.p
    if(BMC>=BMD)
    {
      maxBM=BMC
    }
    if(BMD>=BMC)
    {
      maxBM=BMD
    }
    temp5 = Math.pow(1.5*maxBM,2);
    temp6 = Math.pow(1.0*torque,2); 
    temp7 = (16/(Math.PI*stress)*(Math.sqrt(temp5+temp6)));
    d1 = Math.pow(temp7,(1/3));
    d2=d1.toFixed(2)
    console.log(d1);
    
    for(i=0 ; i<13 ;i++)
    {
      if(d1<standd[i])
      {
        console.log(standd[i])
        { break; }
      }
      
    }
    // while(d1/standd[i]>=1)
    // {
    
    //   i++;
    // }
    console.log(standd[i]);
    
    //If simulation is running
    if(!simstatus)
    {
        //everytime decremented theta value by 20
        theta=theta-(20*rotstatus);
        
        //to have theta within the range 0 to 360
        theta=theta%360;
        
        //if theta is less than 0 then it should get updated to 360
        if(theta<0)
        theta+=360;
        
        theta2=theta2-(20*rotstatus);
        
        //to have theta within the range 0 to 360
        theta2=theta2%360;
        
        //if theta is less than 0 then it should get updated to 360
        if(theta2<0)
            theta2+=360;
    
    
    
    
    }
    
    //If simulation is stopped
    if(simstatus)
    {
    // 	printcomment("Left Side Comment:Length: "+len,1);
    // printcomment("Right Side Comment:Angle: "+theta,2);
        
    }
    oxcoord=420;
        oycoord=205;
        
        axcoord=oxcoord+rad1*Math.cos(rad(theta));
        aycoord=oycoord+rad1*Math.sin(rad(theta));
        
        bxcoord=oxcoord+rad1*Math.cos(rad(theta));
        bycoord=oycoord-200;
      
      oxcoord2=420;
        oycoord2=205;
        
        axcoord2=oxcoord2+rad2*Math.cos(rad(theta2));
        aycoord2=oycoord2+rad2*Math.sin(rad(theta2));
        
        bxcoord2=oxcoord2+rad2*Math.cos(rad(theta2));
        bycoord2=oycoord2-200;
    
    
    if(subscreen==0)
    {
    draw();
    printcomment("Angle of contact=180 <br> Neglecting forces due to weight of pulleys and shaft",0)
    }
    else if(subscreen==1)
    {
      draw2();
      printcomment("Tension1="+tension1+"N</br>Tension2="+tension2+"N",1);
      printcomment("Tension3="+tension3+"N<br>Tension4="+tension4+"N",2);
    }
    else if(subscreen==2)
    {
      draw3();
    printcomment("VBM at A =0Nmm </br>VBM at C ="+VBC+"Nmm ",1);
    printcomment("VBM at D ="+VBD+"Nmm </br> VBM at B =0Nmm",2);
    }
    else if(subscreen==3)
    {
      draw4();
      printcomment("HBM at A =0Nmm </br>HBM at C ="+HBC+"Nmm ",1);
      printcomment("HBM at D ="+HBD+"Nmm </br> HBM at B =0Nmm",2);
    }
    else if(subscreen==4)
    {
      draw5();
      printcomment("RBM at A=0Nmm <br> RBM at C="+BMC+"Nmm"+"</br> RBM at D="+BMD+"Nmm</br> RBM at B=0Nmm",1);
      printcomment("Diameter of shaft="+d2+"mm </br> Standard diameter="+standd[i]+"mm",2);
    }
    }
    console.log(variablescreen);
    //Simulation graphics
    function draw()
    {
      canvas = document.getElementById("simscreen");
      ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,550,400);  //clears the complete canvas#simscreen everytime
    //vertical lines for bearings
        ctx.beginPath();  
      ctx.setLineDash([2,2]);
      ctx.strokeStyle="black";
      ctx.lineWidth=1;
      ctx.moveTo(20,20);
      ctx.lineTo(20,350);
      ctx.moveTo(320,20);
      ctx.lineTo(320,350);
    //vertical line for driver/driven  pulley/gear
      ctx.moveTo(len1,20);
      ctx.lineTo(len1,350);
      ctx.moveTo(len2,20);
      ctx.lineTo(len2,350);
    
      ctx.stroke();
      ctx.closePath();
    
    
    //bearing
      ctx.beginPath();
      ctx.moveTo(10,70);
      ctx.setLineDash([]);
      ctx.strokestyle="black";
      ctx.strokeRect(10,200,20,10);
      ctx.strokeRect(310,200,20,10);
      ctx.stroke();
      ctx.closePath();
    
    // shafts
      ctx.beginPath();
      ctx.moveTo(30,70);
      ctx.fillStyle="#8a8a5c";
      ctx.fillRect(30,200,280,10);
      ctx.fill();
      ctx.closePath();
    
      
    //driver/driven  pulley/gear
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
    
    
    //length arrows
      ctx.beginPath();
      ctx.setLineDash([]);
      ctx.strokestyle="black";
      ctx.moveTo(20,290);
      ctx.lineTo(20,300);
      ctx.moveTo(len1,290);
      ctx.lineTo(len1,300);
      ctx.moveTo(20,310);
      ctx.lineTo(20,320);
      ctx.moveTo(len2,310);
      ctx.lineTo(len2,320);
      ctx.moveTo(20,295);
      ctx.lineTo(len1,295);
      ctx.moveTo(20,315);
      ctx.lineTo(len2,315);
      ctx.moveTo(20,97);
      ctx.lineTo(320,97);
      ctx.moveTo(20,90);
      ctx.lineTo(20,105);
      ctx.moveTo(320,90);
      ctx.lineTo(320,105);
      ctx.stroke();
      ctx.closePath();
    
    
      ctx.beginPath();
      ctx.fillStyle="black";
      ctx.moveTo(20,97);
      ctx.lineTo(25,92);
      ctx.lineTo(25,102);
      ctx.lineTo(20,97);
      ctx.moveTo(320,97);
      ctx.lineTo(315,92);
      ctx.lineTo(315,102);
      ctx.lineTo(320,97);
      ctx.moveTo(20,295);
      ctx.lineTo(25,290);
      ctx.lineTo(25,300);
      ctx.lineTo(20,295);
      ctx.moveTo(len1,295);
      ctx.lineTo(len1-5,290);
      ctx.lineTo(len1-5,300);
      ctx.lineTo(len1,295);
      ctx.moveTo(20,315);
      ctx.lineTo(25,310);
      ctx.lineTo(25,320);
      ctx.lineTo(20,315);
      ctx.moveTo(len2,315);
      ctx.lineTo(len2-5,310);
      ctx.lineTo(len2-5,320);
      ctx.lineTo(len2,315);
      ctx.fill();
    
    
      ctx.font = "15px Georgia";
      ctx.fillStyle ="#00004d";
      ctx.fillText("l1", len1/2, 310);
      ctx.fillText("l2", len2/2,340);
      ctx.fillText("A",25,225);
      ctx.fillText("B",320,225);
      ctx.fillText("C",len1+5,225);
      ctx.fillText("D",len2+5,225);
      ctx.fillText('Driver',len1-25,120);
      ctx.fillText('Driven',len2-25,120);
      ctx.fillText("1000mm",150,95);
      
    
    
      
    
      ctx.beginPath();  
        ctx.fillStyle="#00ffbf";
        ctx.lineWidth=2;
      ctx.arc(oxcoord,oycoord,rad1,0,2*Math.PI,true);
      ctx.stroke();
        ctx.fill();
      ctx.closePath();
    
      
        //to draw line between o and a point 
      ctx.beginPath();  
        ctx.strokeStyle="red";
        ctx.lineWidth=5;
        ctx.moveTo(oxcoord,oycoord);
      ctx.lineTo(axcoord,aycoord);
      ctx.stroke();
      ctx.closePath();
      
      ctx.beginPath();
      ctx.strokeStyle='black';
      ctx.lineWidth=1;
      ctx.moveTo(oxcoord,oycoord);
      ctx.moveTo(oxcoord-rad1,oycoord);
      ctx.lineTo(oxcoord-rad1,300);
      ctx.moveTo(oxcoord+rad1,oycoord);
      ctx.lineTo(oxcoord+rad1,300);
      ctx.stroke();
    
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.moveTo(oxcoord-rad1,300);
      ctx.lineTo(oxcoord-rad1-5,300);
      ctx.lineTo(oxcoord-rad1,310);
      ctx.lineTo(oxcoord-rad1+5,300);
      ctx.lineTo(oxcoord-rad1,300);
      ctx.fill();
    
    
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.moveTo(oxcoord+rad1,300);
      ctx.lineTo(oxcoord+rad1-5,300);
      ctx.lineTo(oxcoord+rad1,310);
      ctx.lineTo(oxcoord+rad1+5,300);
      ctx.lineTo(oxcoord+rad1,300);
      ctx.fill();
    
      ctx.font = "15px sans-serif";
      ctx.fillStyle ="#990000";
      ctx.fillText("T1=",oxcoord-rad1-30,320);
      ctx.fillText(tension1,oxcoord-rad1,320)
      ctx.fillText("T2",oxcoord+rad1+5,320);
    
    
    
      
    
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
      ctx.strokeStyle='black';
      ctx.lineWidth=1;
      ctx.moveTo(oxcoord2,oycoord2);
      ctx.moveTo(oxcoord2,oycoord2-rad2);
      ctx.lineTo(520,oycoord2-rad2);
      ctx.moveTo(oxcoord2,oycoord2+rad2);
      ctx.lineTo(520,oycoord2+rad2);
      ctx.stroke();
    
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.moveTo(520,oycoord2-rad2);
      ctx.lineTo(520,oycoord2-rad2-5);
      ctx.lineTo(530,oycoord2-rad2);
      ctx.lineTo(520,oycoord2-rad2+5);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.moveTo(520,oycoord2+rad2);
      ctx.lineTo(520,oycoord2+rad2-5);
      ctx.lineTo(530,oycoord2+rad2);
      ctx.lineTo(520,oycoord2+rad2+5);
      ctx.fill();
    
      ctx.font = "15px Georgia";
      ctx.fillStyle ="#990000";
      ctx.fillText("T3",530,oycoord2-rad2);
      ctx.fillText("T4",530,oycoord2+rad2);
    
    
      ctx.font = "bold 15px san-sarif";
      ctx.fillStyle='black';
      ctx.fillText("FRONT VIEW",100,50);
      ctx.fillText("SIDE VIEW",400,50);
     
     }
     function draw2()
    {
      canvas = document.getElementById("simscreen");
      ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,550,400);
      ctx.beginPath();  
      ctx.setLineDash([2,2]);
      ctx.strokeStyle="black";
      ctx.lineWidth=1;
      ctx.moveTo(20,20);
      ctx.lineTo(20,350);
      ctx.moveTo(320,20);
      ctx.lineTo(320,350);
    //vertical line for driver/driven  pulley/gear
      ctx.moveTo(len1,20);
      ctx.lineTo(len1,350);
      ctx.moveTo(len2,20);
      ctx.lineTo(len2,350);
      ctx.stroke();
      ctx.closePath();
    
    
      ctx.beginPath();  
        ctx.fillStyle="#00ffbf";
      ctx.lineWidth=2;
      ctx.setLineDash([]);
      ctx.arc(oxcoord,oycoord,rad1,0,2*Math.PI,true);
      ctx.stroke();
        ctx.fill();
      ctx.closePath();
    
      
        //to draw line between o and a point 
      ctx.beginPath();  
        ctx.strokeStyle="red";
        ctx.lineWidth=5;
        ctx.moveTo(oxcoord,oycoord);
      ctx.lineTo(axcoord,aycoord);
      ctx.stroke();
      ctx.closePath();
      
      ctx.beginPath();
      ctx.strokeStyle='black';
      ctx.lineWidth=1;
      ctx.moveTo(oxcoord,oycoord);
      ctx.moveTo(oxcoord-rad1,oycoord);
      ctx.lineTo(oxcoord-rad1,300);
      ctx.moveTo(oxcoord+rad1,oycoord);
      ctx.lineTo(oxcoord+rad1,300);
      ctx.stroke();
    
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.moveTo(oxcoord-rad1,300);
      ctx.lineTo(oxcoord-rad1-5,300);
      ctx.lineTo(oxcoord-rad1,310);
      ctx.lineTo(oxcoord-rad1+5,300);
      ctx.lineTo(oxcoord-rad1,300);
      ctx.fill();
    
    
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.moveTo(oxcoord+rad1,300);
      ctx.lineTo(oxcoord+rad1-5,300);
      ctx.lineTo(oxcoord+rad1,310);
      ctx.lineTo(oxcoord+rad1+5,300);
      ctx.lineTo(oxcoord+rad1,300);
      ctx.fill();
    
      ctx.font = "15px sans-serif";
      ctx.fillStyle ="#990000";
      ctx.fillText("T1=",oxcoord-rad1-50,320);
      ctx.fillText(tension1+"N",oxcoord-rad1-25,320)
      ctx.fillText("T2=",oxcoord+rad1-20,320);
      ctx.fillText(tension2+"N",oxcoord+rad1+5,320)
    
    
    
      
    
      ctx.beginPath();  
        ctx.fillStyle="#ecec13";
        ctx.lineWidth=2;
      ctx.arc(oxcoord2,oycoord2,rad2,0,2*Math.PI,true);
      ctx.stroke();
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
      ctx.strokeStyle='black';
      ctx.lineWidth=1;
      ctx.moveTo(oxcoord2,oycoord2);
      ctx.moveTo(oxcoord2,oycoord2-rad2);
      ctx.lineTo(520,oycoord2-rad2);
      ctx.moveTo(oxcoord2,oycoord2+rad2);
      ctx.lineTo(520,oycoord2+rad2);
      ctx.stroke();
    
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.moveTo(520,oycoord2-rad2);
      ctx.lineTo(520,oycoord2-rad2-5);
      ctx.lineTo(530,oycoord2-rad2);
      ctx.lineTo(520,oycoord2-rad2+5);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.moveTo(520,oycoord2+rad2);
      ctx.lineTo(520,oycoord2+rad2-5);
      ctx.lineTo(530,oycoord2+rad2);
      ctx.lineTo(520,oycoord2+rad2+5);
      ctx.fill();
    
      ctx.font = "15px san-sarif";
      ctx.fillStyle ="#990000";
      ctx.fillText("T3=",460,oycoord2-rad2-10);
      ctx.fillText(tension3+"N",490,oycoord2-rad2-10)
      ctx.fillText("T4=",460,oycoord2+rad2-10);
      ctx.fillText(tension4+"N",490,oycoord2+rad2-10)
    
    
    
    
      ctx.beginPath();
      ctx.fillStyle='#c6b3cc';
      ctx.moveTo(len1,205);
      ctx.lineTo(len1,205-td);
      ctx.lineTo(len2,205-td);
      ctx.lineTo(len2,205);
      ctx.lineTo(len1,205);
      ctx.fill();
    
      ctx.beginPath();
      ctx.strokeStyle='black';
      ctx.moveTo(20,205);
      ctx.lineTo(320,205);
      ctx.stroke();
    
    
      ctx.font = "15px san-sarif";
      ctx.fillStyle ="#00004d";
      ctx.fillText("A",25,225);
      ctx.fillText("B",320,225);
      ctx.fillText("C",len1+5,225);
      ctx.fillText("D",len2+5,225);
      ctx.fillText("Mt=",90,150);
      ctx.fillText(torque+"Nmm",115,150);
    
      ctx.font = "bold 15px san-sarif";
      ctx.fillStyle ="#000000";
      ctx.fillText("TORQUE DIAGRAM",90,350);
      
    
    }
    
    //Simulation graphics
    function draw3()
    {
      canvas = document.getElementById("simscreen");
      ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,550,400);  //clears the complete canvas#simscreen everytime
    //vertical lines for bearings
        ctx.beginPath();  
      ctx.setLineDash([2,2]);
      ctx.strokeStyle="black";
      ctx.lineWidth=1;
      ctx.moveTo(20,20);
      ctx.lineTo(20,350);
      ctx.moveTo(320,20);
      ctx.lineTo(320,350);
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
      ctx.moveTo(20,55);
      ctx.lineTo(320,55);
      ctx.stroke();
    
      ctx.beginPath();
      ctx.strokeStyle="black";
      ctx.moveTo(20,80);
      ctx.lineTo(20,55);
      ctx.moveTo(len1,55);
      ctx.lineTo(len1,30);
      ctx.moveTo(320,80);
      ctx.lineTo(320,55);
      ctx.stroke();
    
      ctx.beginPath();
      ctx.fillStyle ="black";
      ctx.moveTo(20,55);
      ctx.lineTo(25,65);
      ctx.lineTo(15,65)
      ctx.lineTo(20,55);
      ctx.moveTo(len1,55);
      ctx.lineTo(len1-5,45);
      ctx.lineTo(len1+5,45);
      ctx.lineTo(len1,55);
      ctx.moveTo(320,55);
      ctx.lineTo(315,65);
      ctx.lineTo(325,65);
      ctx.fill();
    
      
      ctx.beginPath();
      ctx.fillStyle='#ffb3d9';
      ctx.moveTo(20,285);
      ctx.lineTo(len1,285-VBCd);
      ctx.lineTo(len2,285-VBDd);
      ctx.lineTo(320,285);
      ctx.lineTo(20,285);
      ctx.fill();
      
    
    
    
      ctx.beginPath();  
      ctx.fillStyle="#00ffbf";
      ctx.setLineDash([]);
        ctx.lineWidth=2;
      ctx.arc(oxcoord,oycoord-100,rad1,0,2*Math.PI,true);
      ctx.stroke();
        ctx.fill();
      ctx.closePath();
    
      
        //to draw line between o and a point 
      ctx.beginPath();  
      ctx.strokeStyle="red";
      ctx.setLineDash([])
        ctx.lineWidth=5;
        ctx.moveTo(oxcoord,oycoord-100);
      ctx.lineTo(axcoord,aycoord-100);
      ctx.stroke();
      ctx.closePath();
    
    
      ctx.beginPath();
      ctx.strokeStyle='black';
      ctx.lineWidth=1;
      ctx.moveTo(oxcoord,oycoord-150);
      ctx.moveTo(oxcoord-rad1,oycoord-100);
      ctx.lineTo(oxcoord-rad1,200);
      ctx.moveTo(oxcoord+rad1,oycoord-100);
      ctx.lineTo(oxcoord+rad1,200);
      ctx.stroke();
    
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.moveTo(oxcoord-rad1,200);
      ctx.lineTo(oxcoord-rad1-5,200);
      ctx.lineTo(oxcoord-rad1,210);
      ctx.lineTo(oxcoord-rad1+5,200);
      ctx.lineTo(oxcoord-rad1,200);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.moveTo(oxcoord+rad1,200);
      ctx.lineTo(oxcoord+rad1-5,200);
      ctx.lineTo(oxcoord+rad1,210);
      ctx.lineTo(oxcoord+rad1+5,200);
      ctx.lineTo(oxcoord+rad1,200);
      ctx.fill();
    
      ctx.font = "15px sans-serif";
      ctx.fillStyle ="#990000";
      ctx.fillText("T1=",oxcoord-rad1-50,190);
      ctx.fillText(tension1+"N",oxcoord-rad1-25,190)
      ctx.fillText("T2=",oxcoord+rad1-20,190);
      ctx.fillText(tension2+"N",oxcoord+rad1+5,190)
    
    
    
    
      ctx.font = "15px san-sarif";
      ctx.fillStyle ="#00004d";
      ctx.fillText("A",25,305);
      ctx.fillText("B",320,305);
      ctx.fillText("C",len1+5,305);
      ctx.fillText("D",len2+5,305);
      ctx.fillText("A",25,55);
      ctx.fillText("B",320,55);
      ctx.fillText("C",len1+5,55);
      ctx.fillText("D",len2+5,55);
      ctx.fillText("R1=",23,90);
      ctx.fillText(reactionAv+"N",47,90);
      ctx.fillText("R2=",283,90);
      ctx.fillText(reactionBv+"N",310,90);
      ctx.fillText("T1+T2=",len1+3,30);
      ctx.fillText(vload+"N",len1+55,30);
    
      ctx.font = "bold 15px san-sarif";
      ctx.fillStyle ="#000000";
      ctx.fillText("Vertical load diagram",95,110);
      ctx.fillText("Vertical Bending Moment(VBM) diagram",55,370);
    
    
    
    }
    
    function draw4()
    {
      canvas = document.getElementById("simscreen");
      ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,550,400);  //clears the complete canvas#simscreen everytime
    //vertical lines for bearings
        ctx.beginPath();  
      ctx.setLineDash([2,2]);
      ctx.strokeStyle="black";
      ctx.lineWidth=1;
      ctx.moveTo(20,20);
      ctx.lineTo(20,350);
      ctx.moveTo(320,20);
      ctx.lineTo(320,350);
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
      ctx.moveTo(20,285);
      ctx.lineTo(320,285);
      ctx.stroke();
    
      ctx.beginPath();
      ctx.setLineDash([]);
      ctx.strokeStyle='black';
      ctx.moveTo(20,55);
      ctx.lineTo(320,55);
      ctx.stroke();
    
      ctx.beginPath();
      ctx.strokeStyle="black";
      ctx.moveTo(20,80);
      ctx.lineTo(20,55);
      ctx.moveTo(len2,55);
      ctx.lineTo(len2,30);
      ctx.moveTo(320,80);
      ctx.lineTo(320,55);
      ctx.stroke();
    
      ctx.beginPath();  
        ctx.fillStyle="#ecec13";
        ctx.lineWidth=2;
      ctx.arc(oxcoord2,oycoord2-70,rad2,0,2*Math.PI,true);
      ctx.stroke();
        ctx.fill();
      ctx.closePath();
        
        //to draw line between o and a point 
        ctx.beginPath();  
        ctx.strokeStyle="#f20d80";
        ctx.lineWidth=5;
        ctx.moveTo(oxcoord2,oycoord2-70);
      ctx.lineTo(axcoord2,aycoord2-70);
      ctx.stroke();
      ctx.closePath();
      
    
     
    
      ctx.beginPath();
      ctx.fillStyle ="black";
      ctx.moveTo(20,55);
      ctx.lineTo(25,65);
      ctx.lineTo(15,65)
      ctx.lineTo(20,55);
      ctx.moveTo(len2,55);
      ctx.lineTo(len2-5,45);
      ctx.lineTo(len2+5,45);
      ctx.lineTo(len2,55);
      ctx.moveTo(320,55);
      ctx.lineTo(315,65);
      ctx.lineTo(325,65);
      ctx.fill();
    
      ctx.beginPath();
      ctx.strokeStyle='black';
      ctx.lineWidth=1;
      ctx.moveTo(oxcoord2,oycoord2-70);
      ctx.moveTo(oxcoord2,oycoord2-rad2-70);
      ctx.lineTo(520,oycoord2-rad2-70);
      ctx.moveTo(oxcoord2,oycoord2+rad2-70);
      ctx.lineTo(520,oycoord2+rad2-70);
      ctx.stroke();
    
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.moveTo(520,oycoord2-rad2-80);
      ctx.lineTo(520,oycoord2-rad2-65);
      ctx.lineTo(530,oycoord2-rad2-70);
      ctx.lineTo(520,oycoord2-rad2-75);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.moveTo(520,oycoord2+rad2-70);
      ctx.lineTo(520,oycoord2+rad2-65);
      ctx.lineTo(530,oycoord2+rad2-70);
      ctx.lineTo(520,oycoord2+rad2-75);
      ctx.fill();
    
      ctx.font = "15px san-sarif";
      ctx.fillStyle ="#990000";
      ctx.fillText("T3=",460,oycoord2-rad2-80);
      ctx.fillText(tension3+"N",490,oycoord2-rad2-80)
      ctx.fillText("T4=",460,oycoord2+rad2-80);
      ctx.fillText(tension4+"N",490,oycoord2+rad2-80)
      
      ctx.beginPath();
      ctx.fillStyle='#cbe481';
      ctx.moveTo(20,285);
      ctx.lineTo(len1,285-HBCd);
      ctx.lineTo(len2,285-HBDd);
      ctx.lineTo(320,285);
      ctx.lineTo(20,285);
      ctx.fill();
    
    
    
    
      ctx.font = "15px san-sarif";
      ctx.fillStyle ="#00004d";
      ctx.fillText("A",25,305);
      ctx.fillText("B",320,305);
      ctx.fillText("C",len1+5,305);
      ctx.fillText("D",len2+5,305);
      ctx.fillText("A",25,55);
      ctx.fillText("B",320,55);
      ctx.fillText("C",len1+5,55);
      ctx.fillText("D",len2+5,55); 
      ctx.fillText("R3=",23,90);
      ctx.fillText(reactionAh+"N",47,90);
      ctx.fillText("R4=",263,90);
      ctx.fillText(reactionBh+"N",290,90);
      ctx.fillText("T3+T4=",len2+3,30);
      ctx.fillText(hload+"N",len2+55,30);
      ctx.font = "bold 15px san-sarif";
      ctx.fillStyle ="#000000";
      ctx.fillText("Horizontal Bending Moment(HBM) diagram",55,370);
      ctx.fillText("Horizontal load diagram",95,110);
    
    
    }
    
    function draw5()
    {
      canvas = document.getElementById("simscreen");
      ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,550,400);  //clears the complete canvas#simscreen everytime
    //vertical lines for bearings
        ctx.beginPath();  
      ctx.setLineDash([2,2]);
      ctx.strokeStyle="black";
      ctx.lineWidth=1;
      ctx.moveTo(20,20);
      ctx.lineTo(20,350);
      ctx.moveTo(320,20);
      ctx.lineTo(320,350);
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
      ctx.moveTo(20,285);
      ctx.lineTo(320,285);
      ctx.stroke();
    
    
    
    
      ctx.beginPath();
      ctx.fillStyle='#ccddff';
      ctx.moveTo(20,285);
      ctx.lineTo(len1,285-BMCd);
      ctx.lineTo(len2,285-BMDd);
      ctx.lineTo(320,285);
      ctx.lineTo(20,285);
      ctx.fill();
    
      ctx.beginPath();
      ctx.fillStyle="yellow";
      ctx.fillRect(350,160,150,70);
      ctx.fill();
    
      ctx.beginPath();
      ctx.strokeStyle="Red";
      ctx.lineWidth=5;
      ctx.strokeRect(347.5,157.5,155,75);
      ctx.stroke();
    
    
    
      ctx.font = "15px san-sarif";
      ctx.fillStyle ="#00004d";
      ctx.fillText("A",25,305);
      ctx.fillText("B",320,305);
      ctx.fillText("C",len1+5,305);
      ctx.fillText("D",len2+5,305);
    
      ctx.fillStyle="Red"
      ctx.fillText("Considering nature of  ",350,180);
      ctx.fillText("load as suddenly applied" ,350,195);
      ctx.fillText("load,minor shocks only " ,350,210);
      ctx.fillText("i.e, Cm=1.5 and Ct=1.0",350,225);
    
      ctx.font = "bold 15px san-sarif";
      ctx.fillStyle ="#000000";
      ctx.fillText("Total Bending Moment diagram",55,370);
    
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
    
