class System  {
    constructor(x, y, _w, _h, _a1, _a2)   {
        this.width = _w;
        this.h = _h
        this.x_equilibrium = x;
        this.y_equilibrium = y;
        this.l1 = 0;
        this.l2 = 0;
        this.a1 = _a1*Math.PI/180;
        this.m1 = 10;
        this.a2 = _a2*Math.PI/180;
        this.m2 = 0;
        this.w1 =0;
        this.w2 =0;
        this.x1d = 0;
        this.x2d = 0;
        this.x1dd = 0;
        this.x2dd = 0;
        this.ar1 = 0;
        this.ar2 = 0;
        this.masscoordinates = [];
        this.a1v=0;
        this.a2v=0;
        this.a1a=0.01;
        this.a2a=0.01;
        this.g=9.8;
        this.x1=0;
        this.y1=0;
        this.x2=0;
        this.y2=0;
        this.k1=0;
        this.k2=0;

    }

    initialise(_l1, _l2, _a1,_m1 ,_a2 ,_m2)  {
        
        this.l1 = _l1*1000;
        this.l2 = _l2*1000;
        this.k1=_a1*Math.PI/180;
        this.k2=_a2*Math.PI/180;
        this.m1 = _m1;
        this.m2 = _m2;
    }

    update(t, _mulfact)  {
        let x=this.a1;
        let y=this.a2;
        let muu = 1+(this.m1/this.m2);
        let num1 = this.g*((Math.sin(y)*Math.cos(x-y))-(muu*Math.sin(x)))
        let num2 = ((this.l2*this.a2v*this.a2v)+(this.l1*this.a1v*this.a1v*Math.cos(x-y)))*Math.sin(x-y);
        let den1 = this.l1*(muu-(Math.cos(x-y)*Math.cos(x-y)));
        this.a1a = (num1-num2)/(den1);
        let num3 = this.g*muu*((Math.sin(x)*Math.cos(x-y))-Math.sin(y))
        let num4 = ((muu*this.l1*this.a1v*this.a1v)+(this.l2*this.a2v*this.a2v*Math.cos(x-y)))*Math.sin(x-y);
        let den2 = this.l2*(muu-(Math.cos(x-y)*Math.cos(x-y)));
        this.a2a = (num3+num4)/(den2);  
        this.a1v =this.a1v+(this.a1a*t);
        this.a2v =this.a2v+(this.a2a*t);
        this.a1 =x+(this.a1v*t);
        this.a2=y+(this.a2v*t);
        
        this.x1=(this.x_equilibrium+(this.l1*Math.sin(this.a1)));
        this.y1=(this.y_equilibrium+(this.l1*Math.cos(this.a1)));
        this.x2=(this.x1+(this.l2*Math.sin(this.a2)));
        this.y2=(this.y1+(this.l2*Math.cos(this.a2)));

        let e=(this.m2*this.g)/this.l2;
        let f=(this.m1+this.m2)*this.g/this.l1;
        let b=(((this.m1+this.m2)*e)+(this.m2*f))/(this.m1*this.m2);
        let c=(e*f)/(this.m1*this.m2);
        let b2=Math.pow((((this.m1+this.m2)*e)+(this.m2*f))/(this.m1*this.m2),2)
        let det=Math.pow(b2-(4*c),0.5);
        this.w2=Math.pow(((b+det)/2),0.5);
        this.w1=Math.pow(((b-det)/2),0.5);
        this.ar1= e/(f+e-(this.m1*Math.pow(this.w1,2)));
        this.ar2= e/(f+e-(this.m1*Math.pow(this.w2,2)));
        // finding x1 and x2(equation of motion)
        let r1= this.l1*Math.sin(this.k1);
        let r2= this.l2*Math.sin(this.k2)
        this.x2d=(r1-(this.ar2*r2))/(this.ar1-this.ar2);
        this.x2dd=((this.ar1*r2)-r1)/(this.ar1-this.ar2);
        this.x1d=this.ar1*this.x2d;
        this.x1dd=this.ar2*this.x2dd;
        t=t+dt
    }

    show(_stroke, _strockweight, _fill) {
        push();

        let wid = spr.width-50;
        let hei = spr.height-140;
        var h = 255;
        strokeWeight(4);
        stroke(0,0,0);
        line(this.x_equilibrium-10,this.y_equilibrium, this.x_equilibrium+10,this.y_equilibrium);
        line(this.x_equilibrium,this.y_equilibrium, this.x1,this.y1);
        fill(235);
        line(this.x1,this.y1,this.x2,this.y2);
        ellipse(this.x1,this.y1, this.m1,this.m1);
        fill(0);
        textSize(this.m1/3);
        strokeWeight(1);
        text("m1",this.x1-this.m1/3+5,this.y1+3);
        fill(235);
        strokeWeight(4);
        ellipse(this.x2,this.y2, this.m2, this.m2);
        fill(0);
        textSize(this.m2/3);
        strokeWeight(1);
        text("m2",this.x2-(this.m2/3)+5,this.y2+3);
    }

    static mag_func1(x, obj)  {

        let mu = obj.m1/obj.m2;
        let temp1 = x;
        let temp2 = Math.pow(((obj.w2*x)/obj.w1),2);
        let denom = ((1+mu)*temp2) + Math.pow(temp1,2);
        
        let solution = (1-Math.pow(temp1,2)) / ((Math.pow(temp1,2)*temp2)-denom+1)
        if (abs(solution)<200){
            return(abs(solution));
        }
        else{
            return (200);
        }
         
        
    }
    static mag_func2(x, obj)  {
        let mu = obj.m1/obj.m2;
        let temp1 = x;
        let temp2 = Math.pow(((obj.w2*x**x)/obj.w1),2);
        let denom = ((1+mu)*temp2) +Math.pow(temp1,2);
        
        let solution = (1)/ ((Math.pow(temp1,2)*temp2)-denom+1);
        if (abs(solution)<200){
            return(abs(solution));
        }
        else {
            return (200);
        }
        
        
        
    }

    
}
