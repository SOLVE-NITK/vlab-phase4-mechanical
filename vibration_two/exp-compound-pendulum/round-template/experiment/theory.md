A double pendulum system as shown in Fig 1, consists of two-point masses m<sub>1</sub> and m<sub>2</sub> suspended by strings of length l<sub>1</sub> and l<sub>2</sub> as shown below. Let the system vibrates in vertical plane with small amplitudes, under which conditions the masses may be considered to have only horizontal motion. Let θ<sub>1</sub> and θ<sub>2</sub> be the angles the strings at any instant make with vertical and let x<sub>1</sub> and x<sub>2</sub> be the horizontal displacements of the two masses, such that the following relationships holds good for small amplitudes.
<center>

![](images/1.png)
</center>

For finding natural frequency and mode shapes:
Considering no motion in vertical direction, the vertical components of forces on each of two masses must balance. Therefore,
<center>

![](images/2.png)


![](images/3.png)

Fig 1. Repesentation of variables in the double pendulum

![](images/5.png)

Fig 2. Free body diagram of the double pendulum
</center>

Writing down the equation of motion of two masses for motion in horizontal direction from Fig 2, we have
<center>

![](images/4.png)
</center>

If we take T1 and T2 values in the above equation, we get

<center>

![](images/6.png)

</center>

Assuming the general solution of equation of motion to be:

<center>

![](images/7.png)

</center>

Substituting the above solutions with the equation of motion, we get

<center>

![](images/8.png)

</center>

This equation will give,
<center>

![](images/9.png)

</center>

Equating the two expressions in the above two equations and cross multiplying.

If E = (m<sub>2</sub> x g)/l<sub>2</sub> and F = (m<sub>1</sub>+m<sub>2</sub>)g/l<sub>1</sub> , then the frequency equation is

<center>

![](images/10.png)

</center>

The above equation is quadratic in &omega;<sup>2</sup> and gives two values of &omega;<sup>2</sup>, and therefore two positive values of &omega; corresponding to two natural frequencies &omega;<sub>n1</sub> and &omega;<sub>n2</sub> of the system. The above equation is called the frequency equation since the roots of this equation gives the natural frequencies of the system.
Considering,
<center> m<sub>1</sub> = m<sub>2</sub> = m
<br>l<sub>1</sub> = l<sub>2</sub> = l
</center>
<br>
The above equations become,
<center>

![](images/11.png)
</center>

which gives,

<center>

![](images/12.png)

</center>
or
<center>

![](images/13.png)

</center>
which is the frequency equation.

Solving for &omega;, using quadratic equation we have the two values of the natural frequencies as,
<center>

![](images/14.png)

</center>

The amplitude ratio of the equations are:
<center>

![](images/15.png)

![](images/16.png)
</center>

If in either of the equations, on substituting for &omega; the value of &omega;<sub>n1</sub>, we have the first mode shape of the system i.e., when the system is vibrating with the first natural frequency &omega;<sub>n1</sub>, the mode shape is such that the ratio of the amplitude of two masses is equal to the solution of above equation.

Similarly, in either of the equations, substituting for &omega; the value of &omega;<sub>n2</sub>, we have the second mode shape of the system i.e., when the system is vibrating with the second natural frequency &omega;<sub>n2</sub>, the mode shape is such that the ratio of the amplitude of two masses is equal to the solution of above equation.

For calculating the motion of point masses:

The cartesian co-ordinates of two-point masses in a double pendulum are,

<center>

![](images/17.png)

</center>

On solving the equations of motion in polar coordinates and we are going to use the Lagrangian method (L=T-V where T is kinetic energy of system and V is potential energy of system) to derive them. 

The kinetic energy of the system:

<center>

![](images/18.png)

</center>

The potential energy of system:
<center>

![](images/19.png)

</center>

The Lagrange equations for &theta;<sub>1</sub> and &theta;<sub>2</sub> are,
<center>

![](images/21.png)

</center>

On solving,
<center>

![](images/20.png)

</center>

Where &mu; = 1 + (m<sub>1</sub> + m<sub>2</sub>), $ \ddot θ1 $ and $ \ddot θ2 $ are angular accelerations of point masses m<sub>1</sub> and m<sub>2</sub> and $ \dot θ1 $ and $ \dot θ2 $ are angular velocities of point masses m<sub>1</sub> and m<sub>2</sub>.

To solve the equation of motion for the angles, we can use the Euler method. For using Euler method, we should define a time interval and iterate over time. As time changes, angular acceleration, angular velocity and angle is changed. So, from the values of angular acceleration, velocity and angle at that instant of time, we can calculate the position of the system precisely. 
Such that,
<center>

![](images/22.png)

</center>
