The problem statement was to simulate an experiment "Cart moving on a circular path ".
The challenge was to use only javascript which has only 2 functions for cart to look like it's moving. i.e., setInterval() and timeout() .

We basically have two type of animations in it.
  1. When cart has enough velocity to complete the circle and reach the final destination.
    We broke down the prcoess into several animations as:
      (1) Straight line motion(left to right) : The cart goes from initial point to the point where its circular motion starts.
      (2) Circular Motion(anti-clockwise) : The cart traverses the whole circle.
      (3) Straight line motion(left to right) : The cart goes from the circular motion end to its final point

  2. When cart doesn't have enough velocity to complete the circle, reaches some particular height(which can be calculated from given values) and comes to its initial point.
    We broke down the prcoess into several animations as:
      (1) Straight line motion(left to right) : The cart goes from initial point to the point where its circular motion starts.
      (2) Circular Motion(anti-clockwise) : The cart traverses the circle anti-clockwise to some certain degree which is calculated from height.
      (3) Circular Motion(clockwise) : The cart traverses the circle from the stopping point of cart to initial point of circular motion.
      (4) Straight line motion(right to left) : The cart goes from the intitial circular motion starting to its initial point.

All the motion is done using setInterval function and breaking its interval using clearInterval function.

Thanks for giving our team the opportunity for working on this project.
