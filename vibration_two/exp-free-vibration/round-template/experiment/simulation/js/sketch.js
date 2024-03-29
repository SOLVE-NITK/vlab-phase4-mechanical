﻿// canvas
let width = 800;
let height = 600;


// counter
let t = 0.05;
let dt = 0.01;

// system
let spring1;

// graphs
let position_graph1;
let position_graph2;
let magFac;
//let force_graph;
//let magFac;
//let phaseAng;

// inputs
//let slider_force;
//let slider_ang_freq;
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
    
}

function setup() {
    textFont("Comic Sans MS");
    
    createCanvas(width, height);
    spring1 = new System(450, 365, 90, 25);
    
    position_graph1 = new Graph(50, 295, 100, 220, "x1", "t");

    position_graph2 = new Graph(50, 210, 100, 220, "x2", "t");

    magFac1 = new DynamicGraph(50, 400, 300, 220, "X1/Xst", "ω/ω2", 0,7,0,10, System.mag_func1);
    magFac2 = new DynamicGraph(50, 400, 300, 220, "X2/Xst", "ω/ω2",0, 7,0,10, System.mag_func2);

    //magFac = new DynamicGraph(125, 325, 230, 290, "Magnification Factor", "n", 0, 2.5, 0, 7.5, System.mag_func);
    //phaseAng = new DynamicGraph(125, 495, 150, 290, "Phase Angle", "n", 0, 2.5, 0, 180, System.phase_func);

    // x1 = new NumberInput(620, 140, "Xo1(m)",-30, 30,0 ,0.5,1, true); //(x, y, label, min, max, iniVal, change,fine_change, ifSlider)
    // x2= new NumberInput(620, 190, "Xo2(m)", -30, 30, 0, 0.5,1, true);
    // k1 = new NumberInput(620, 240, "k1 (N/m)",5, 20, 5, 2,1, true);
    x1 = new NumberInput(620, 140, "Xo1(m)",-0.030, 0.030,0 ,0.001,1, true); //(x, y, label, min, max, iniVal, change,fine_change, ifSlider)
    x2= new NumberInput(620, 190, "Xo2(m)", -0.030, 0.030, 0, 0.001,1, true);
    k1 = new NumberInput(620, 240, "k1 (N/m)",500, 2000, 500, 2,1, true);
    m1 = new NumberInput(620, 290, "m1(kg)", 10, 50, 10, 1,1, true);
    // k2 = new NumberInput(620, 340, "k2 (N/m)", 5, 20 ,5, 2,1, true);
    k2 = new NumberInput(620, 340, "k2 (N/m)", 500, 2000 ,500, 2,1, true);
    m2 = new NumberInput(620, 380, "m2(kg)", 10, 50, 10, 1,1, true);
    button1 = new Button(645, 430, pause)
    button2 = new Button(706, 430, graph)
    button3 = new Button(645,460,back)
    button4 = new Button(705, 460, graph)
    button5 = new Button(645,470,back)

    
}

function draw() {
    if (page1) {
        runPage1();
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
