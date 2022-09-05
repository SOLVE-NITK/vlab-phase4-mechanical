// canvas
let width = 800;
let height = 600;


// counter
let t = 0.1;
let dt = 0.01;

// system
let spring1;

// graphs
let position_graph1;
let position_graph2;
let magFac;
let k1;
let k2;
let m1;
let m2;
let w;
let F0;

// factor
let factor = 1;

// images
let img;
let button1;
let button2;
let button3;
let button4;
let button5;
let spr;

// pages
let page1 = true;
let page2 = false;
let page3 = false;

// animation
let animation = true;
let touch = false;

// Buttons
let clear;

function preload() {
    play = loadImage("images/blueplaydull.png");
    pause = loadImage("images/bluepausedull.png");
    graph = loadImage("images/bluefwddulls.png");
    back = loadImage("images/bluebkdulls.png");
    bg = loadImage("images/frame_copper_ver02.png");
    spr = loadImage("images/spring.png");
    dia= loadImage("images/dimg270.gif");
}

function setup() {
    textFont("Comic Sans MS");
    createCanvas(width, height);
    l1 = new NumberInput(620, 140, "l1(m)",0.050, 0.130,0.080 ,0.001,1, true); //(x, y, label, min, max, iniVal, change,fine_change, ifSlider)
    l2= new NumberInput(620, 190, "l2(m)", 0.050, 0.130,0.080 ,0.001,1, true);
    a1 = new NumberInput(620, 240, "θ1 (degrees)",10,60 , 30, 1,1, true);
    m1 = new NumberInput(620, 290, "m1(kg)", 25, 60, 40, 1,1, true);
    a2 = new NumberInput(620, 340, "θ2 (degrees)", 10, 60 ,40, 1,1, true);
    m2 = new NumberInput(620, 380, "m2(kg)", 25, 60, 40, 1,1, true);
    spring1 = new System(300, 150, 90, 25, a1.iniVal, a2.iniVal);
    position_graph1 = new Graph(50, 295, 100, 220, "x1", "t");
    position_graph2 = new Graph(50, 210, 100, 220, "x2", "t");
    magFac1 = new DynamicGraph(50, 400, 300, 220, "X1/Xst", "ω/ω2", 0,7,0,10, System.mag_func1);
    magFac2 = new DynamicGraph(50, 400, 300, 220, "X2/Xst", "ω/ω2",0, 7,0,10, System.mag_func2);
    button1 = new Button(645, 430, pause)
    button2 = new Button(706, 430, graph)
    button3 = new Button(645,460,back)
    button4 = new Button(705, 460, graph)
    button5 = new Button(645,470,back)
}
function draw() {
    if (page1) {
        runPage1();
         if(animation==true){
        l1.disable();
        l2.disable();
        a1.disable();
        m1.disable();
        a2.disable();
        m2.disable();
    }
     else{
        l1.enable();
            l2.enable();
            a1.enable();
            m1.enable();
            a2.enable();
            m2.enable();
            spring1.a1v=0;
            spring1.a2v=0;
            spring1.a1a=0.01;
            spring1.a2a=0.01;
            t=0.1;
            spring1 = new System(300, 150, 90, 25, a1.inp, a2.inp);     
     }
    }
    if (page2) {
        runPage2();
    }
    if (page3){
        runPage3();
    }
}
function mousePressed() {
    console.log(mouseX, mouseY)
    handleEvents();
}
