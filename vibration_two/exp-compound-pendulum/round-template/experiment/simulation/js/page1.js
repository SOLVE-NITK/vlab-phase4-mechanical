function runPage1() {
    background(255);
    image(bg, 0, 0)
    stroke(0);
    fill(0);
    strokeWeight(1);
    push();
    textSize(36);
    textFont("Comic Sans MS")
    text('Two Degree of Freedom System',150, 50);
    textSize(16);
    text("CONTROLS", 655, 417);
    text("VARIABLES", 655, 107);
    pop();
    spring1.initialise(l1.inp,l2.inp,a1.inp,m1.inp,a2.inp,m2.inp);
    spring1.update(t, factor);
    spring1.show(0, 1, 0);
    strokeWeight(1);    
    line (spring1.masscoordinates[0], spring1.masscoordinates[1], position_graph1.graphend[0], position_graph1.graphend[1])
    line (spring1.masscoordinates[2], spring1.masscoordinates[3], position_graph2.graphend[0], position_graph2.graphend[1])
    fill(0,0,0);
    textSize(20);
    text("Double Pendulum System", 180, 110);
    l1.draw();
    l2.draw();
    a1.draw();
    m1.draw();
    a2.draw();
    m2.draw();
        button1.draw();
        if(animation==false){
        button2.draw();
        }
        image(dia, 50,350,150,200);
        fill(0);
        strokeWeight(3);
        arc(spring1.x_equilibrium,spring1.y_equilibrium , 15, 15, 0, PI);
}
