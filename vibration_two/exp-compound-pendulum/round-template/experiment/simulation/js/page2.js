function runPage2() {
    background(255);
    image(bg, 0, 0);
    
    stroke(0);
    fill(0);

    strokeWeight(1);
    push();
    textSize(36);
    textFont("Times");
    text('TWO DEGREE OF FREEDOM SYSTEM',110, 50);

    textSize(16);
    text("CONTROLS", 655, 417);
    text("VARIABLES", 655, 107);
    pop();

    strokeWeight(1);
    textSize(16);
    let q1=spring1.w1.toFixed(4)/(2*Math.PI);
    let q2=spring1.w2.toFixed(4)/(2*Math.PI);
    text('THE FIRST NATURAL FREQUENCY OF SYSTEM (ω1) : '+q1.toFixed(6)+' Hz',30,150);
    text('THE SECOND NATURAL FREQUENCY OF SYSTEM (ω2) : '+q2.toFixed(6)+' Hz',30,200);
    text('THE FIRST MODE SHAPE RATIO [(X1/X2) AT ω1] : '+spring1.ar1.toFixed(4),30,250);
    text('THE SECOND MODE SHAPE RATIO [(X1/X2) AT ω2] : '+spring1.ar2.toFixed(4),30,300);
    strokeWeight(1);
    spring1.initialise(l1.inp,l2.inp,a1.inp,m1.inp,a2.inp,m2.inp);
    spring1.update(t, factor);
    button3.draw()
    button4.draw()
    l1.draw();
    l2.draw();
    a1.draw();
    m1.draw();
    a2.draw();
    m2.draw();
    t = t+dt;
}
