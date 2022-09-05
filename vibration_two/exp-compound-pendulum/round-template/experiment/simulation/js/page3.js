function runPage3() {
    background(255);
    image(bg, 0, 0);
    
    stroke(0);
    fill(0);

    push();
    strokeWeight(1);
    textSize(36);
    textFont("Times");
    text('TWO DEGREE OF FREEDOM SYSTEM',100, 40);

    textSize(16);
    text("CONTROLS", 655, 417);
    text("VARIABLES", 655, 107);
    pop();
    textSize(15);
    text('X1',20,350);
    text('X2',20,500);
    strokeWeight(0.5);
    line(45,350,590,350);
    line(45,500,590,500);
    if(spring1.k1==spring1.k2){
    textFont("Comic Sans MS");
    textSize(20);
    text("MODE SHAPE", 250, 110);
    textSize(15);
    text("When the initial excitation is given same to both masses in same direction, it",30,150);
    text("gives only the first mode shape of the system",150,170);
    strokeWeight(2.5);
    stroke(0);
    line(300,200,300,500);
    stroke(0,0,255);
    line(300,350,300+(spring1.x1d),350);
    line(300,500,300+(spring1.x2d),500);
    stroke(255,0,0);
    line(300,200,300+(spring1.x1d),350);
    line(300+(spring1.x1d),350,300+(spring1.x2d),500);
    // line(300+(spring1.x2d),400,300,500);
    }
    else if(spring1.k1==(-spring1.k2)){
        textFont("Comic Sans MS");
        textSize(20);
        text("MODE SHAPE", 250, 110);
        textSize(15);
        text("When the initial excitation is given same to both masses in different direction, it",30,150)
        text("gives only the second mode shape of the system",150,170);
        strokeWeight(2.5);
        stroke(0);
        line(300,200,300,500);
        stroke(0,0,255);
        line(300,300,300+(spring1.x1dd),300);
        line(300,400,300+(spring1.x2dd),400);
        stroke(255,0,0);
        line(300,200,300+(spring1.x1dd),300);
        line(300+(spring1.x1dd),300,300+(spring1.x2dd),400);
        // line(300+(spring1.x2dd),400,300,500);
    
        }
    else{
    textFont("Comic Sans MS");
    textSize(20);
    text("MODE SHAPES", 215, 110);
    textSize(15);
    text("FIRST MODE SHAPE",90,180);
    text("SECOND MODE SHAPE",370,180);
    strokeWeight(2.5);
    stroke(0);
    line(120,200,120,500);
    stroke(0,0,255);
    line(120,350,120+(spring1.x1d),350);
    stroke(0,0,255);
    line(120,500,120+(spring1.x2d),500);
    stroke(255,0,0);
    line(120,200,120+(spring1.x1d),350);
    line(120+(spring1.x1d),350,120+(spring1.x2d),500);
    // line(120+(spring1.x2d),400,120,500);
    strokeWeight(2.5);
    stroke(0);
    line(400,200,400,500);
    stroke(0,0,255);
    line(400,350,400+(spring1.x1dd),350);
    stroke(0,0,255);
    line(400,500,400+(spring1.x2dd),500);
    stroke(255,0,0);
    line(400,200,400+(spring1.x1dd),350);
    line(400+(spring1.x1dd),350,400+(spring1.x2dd),500);
    // line(400+(spring1.x2dd),400,400,500);
    

    }
    strokeWeight(1);
    spring1.initialise(l1.inp,l2.inp,a1.inp,m1.inp,a2.inp,m2.inp);
    spring1.update(t, factor);
    button5.draw()
    l1.draw();
    l2.draw();
    a1.draw();
    m1.draw();
    a2.draw();
    m2.draw();
    t = t+dt;
}
