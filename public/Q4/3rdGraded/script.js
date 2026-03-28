function plotPoint(x0, y0, x, y) {  //CHANGE 2: DECLARE x0 x y0 y

    let in1 = document.getElementById("in1"); //CHANGE 3: DECALRE THESE THINGIES TOO
    let out1 = document.getElementById("out1");

    console.log(x0, y0, x, y) // checks the arguments passed to this function
    in1.innerHTML = x0 + " " + y0 + " " + x + " " + y;


    var point = document.createElement('div');  
    point.className = 'point';
    point.style.position = "absolute"; /* CHANGE 4: USE PROPER STYLE ACCORDING TO COMMENT --
    control where to place the div on the screen using left and bottom of position:absolute */

    //CHANGE 5: FIX STYLING BY ADDING .
    point.style.left = (x - x0 + 200 - 5) + 'px'; // subtract half the width of the point to center it by changing left css property
    point.style.bottom = (y - y0 + 200 - 5) + 'px'; // subtract half the height of the point to center it by changing bottom css property
    document.getElementById('coordinatePlane').appendChild(point);

    if (x > x0 && y > y0){
      out1.innerHTML = "NE"
    }
    else if (x < x0 && y < y0){
      out1.innerHTML = "SO"
    }
    else if (x > x0 && y < y0){
      out1.innerHTML = "SE"
    }
    else if (x < x0 && y > y0){
      out1.innerHTML = "NO"
    }
    else{
      out1.innerHTML = "divisa"
    }
  } //CHANGE 1: Function plotPoint is not closed
