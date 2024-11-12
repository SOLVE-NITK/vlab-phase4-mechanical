var simsubscreennum = 0;
var temp = 0;
var myInt = 0;

var visibleImagesId = [
  {
    simsubscreennum: 0,
    animImages: [],
    initialImages: ["fr", "bt", "wh", "gl", "wp1", "wp2", "gr", "br"],
    hideImages: ["workpiece1", "workpiece2"],
  },
  {
    simsubscreennum: 1,
    animImages: [
      {
        id: "grinder",
        className: "grinder",
      },
      {
        id: "brush",
        className: "brush",
      },
    ],
    initialImages: ["workpiece1", "workpiece2"],
    hideImages: ["lj"],
  },
  {
    simsubscreennum: 2,
    animImages: [
      {
        id: "w1",
        className: "w1",
      },
      {
        id: "w2",
        className: "w2",
      },
    ],
    initialImages: [],
    hideImages: [
      // "p1", "p2", "fx"
    ],
  },
  {
    simsubscreennum: 3,
    animImages: [
      {
        id: "bro",
        className: "bro",
      },
    ],
    initialImages: ["p1", "p2", "fx"],
    hideImages: ["wp4"],
  },
  {
    simsubscreennum: 4,
    animImages: [
      {
        id: "fill",
        className: "fill",
      },
    ],
    initialImages: ["wp4"],
    hideImages: ["filler", "b1", "wp5", "dt"],
  },
  {
    simsubscreennum: 5,
    animImages: [
      {
        id: "spark",
        className: "spark",
        hidden: true,
      },
      {
        id: "weld",
        className: "weld",
      },
      {
        id: "electrode",
        className: "electrode",
      },
      {
        id: "part",
        className: "part",
      },
    ],
    initialImages: ["filler", "b1", "wp5", "dt"],
    hideImages: ["dust1", "wp6", "weld6"],
  },
  {
    simsubscreennum: 6,
    animImages: [
      {
        id: "brush1",
        className: "brush1",
      },
    ],
    initialImages: ["dust1", "wp6", "weld6"],
    hideImages: [],
  },
];

document.querySelector("#prevButton").addEventListener("click", navBack);
document.querySelector("#nextButton").addEventListener("click", navNext);
function animatearrow() {
  if (document.getElementById("arrow1").classList.contains("hide"))
    addToCanvas("arrow1");
  else removeFromCanvas("arrow1");
}

//animate arrow at position
function animateArrowATPosition(left, top, degg) {
  document.getElementById("arrow1").style =
    "position:absolute; left:" +
    left +
    "%; top: " +
    top +
    "%; width:5%;height: 5%; z-index: 10;";
  document.getElementById("arrow1").style.WebkitTransform =
    "rotate(" + degg + "deg)";
  // Code for IE9
  document.getElementById("arrow1").style.msTransform =
    "rotate(" + degg + "deg)";
  // Standard syntax
  document.getElementById("arrow1").style.transform = "rotate(" + degg + "deg)";
  addToCanvas("arrow1");
}

//stop blinking arrow
function myStopFunction() {
  clearInterval(myInt);
  removeFromCanvas("arrow1");
}

function navNext() {
  for (temp = 0; temp <= 6; temp++) {
    removeFromCanvas("canvas" + temp);
  }
  simsubscreennum += 1;
  addToCanvas("canvas" + simsubscreennum);
  removeFromCanvas("nextButton");
  refresh();
  magic();
}

function navBack() {
  for (temp = 0; temp <= 6; temp++) {
    removeFromCanvas("canvas" + temp);
  }
  simsubscreennum -= 1;
  addToCanvas("canvas" + simsubscreennum);
  removeFromCanvas("nextButton");
  refresh();
  magic();
}

//magic function for animation in each canvas
function magic() {
  if (simsubscreennum == 0) {
    addToCanvas("nextButton");
    removeFromCanvas("prevButton");
    removeFromCanvas("reButton");
  } else if (simsubscreennum == 1) {
    removeFromCanvas("reButton");
    removeFromCanvas("fr");
    removeFromCanvas("bt");
    removeFromCanvas("wh");
    removeFromCanvas("gl");
    removeFromCanvas("wp1");
    removeFromCanvas("wp2");
    removeFromCanvas("br");
    removeFromCanvas("gr");
    navDisplay();
    //Write code for canvas 1 animations
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(60, 28, -90); //specify the left top and deg of arrow
    document.getElementById("grinder").onclick = function () {
      navHide();
      document.getElementById("grinder").onclick = " "; //To stop further click on pattern
      myStopFunction(); //stops blinking arrow
      document.getElementById("grinder").style.animation =
        "movePattern 4.2s linear forwards ";
      setTimeout(function () {
        document.getElementById("brush").style.animation =
          "movebrush 4.2s linear forwards ";
        setTimeout(function () {
          navDisplay();
        }, 4550);
      }, 4450);
    };
  } else if (simsubscreennum == 2) {
    removeFromCanvas("reButton");
    removeFromCanvas("workpiece1");
    removeFromCanvas("workpiece2");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(21, 42, -90); //specify the left top and deg of arrow
    document.getElementById("w2").onclick = function () {
      document.getElementById("w2").onclick = " ";
      navHide();
      myStopFunction();
      document.getElementById("w1").style.animation =
        "movew1 1.2s ease-out forwards";
      document.getElementById("w2").style.animation =
        "movew2 1.2s   ease-out forwards";
      setTimeout(function () {
        removeFromCanvas("w1");
        removeFromCanvas("w2");
        addToCanvas("lj");
        setTimeout(function () {
          navDisplay();
        }, 300);
      }, 880);
    };
  } else if (simsubscreennum == 3) {
    removeFromCanvas("reButton");
    removeFromCanvas("lj");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(65, 8, -90); //specify the left top and deg of arrow
    document.getElementById("bro").onclick = function () {
      navHide();
      document.getElementById("bro").onclick = " "; //To stop further click on pattern
      myStopFunction(); //stops blinking arrow
      document.getElementById("bro").style.animation =
        "movebro 5.0s linear forwards ";

      setTimeout(function () {
        navDisplay();
      }, 4850);
    };
  } else if (simsubscreennum == 4) {
    removeFromCanvas("reButton");
    removeFromCanvas("p2");
    removeFromCanvas("p1");
    removeFromCanvas("fx");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(61, 62, -90); //specify the left top and deg of arrow
    document.getElementById("fill").onclick = function () {
      navHide();
      document.getElementById("fill").onclick = " ";
      myStopFunction();
      document.getElementById("fill").style.animation =
        "movefiller 2.6s linear forwards";
      setTimeout(function () {
        navDisplay();
      }, 2750);
    };
  } else if (simsubscreennum == 5) {
    removeFromCanvas("reButton");
    removeFromCanvas("wp4");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(61, 60, -90); //specify the left top and deg of arrow
    document.getElementById("electrode").onclick = function () {
      document.getElementById("electrode").onclick = " ";
      navHide();
      myStopFunction();
      document.getElementById("spark").style.animation =
        "movespark 5.4s linear forwards";
      document.getElementById("electrode").style.animation =
        "moveelectrode 5.4s linear forwards";
      document.getElementById("weld").style.animation =
        "moveweld 5.4s linear forwards";
      document.getElementById("part").style.animation =
        "movepart 5.4s linear forwards";
      setTimeout(function () {
        addToCanvas("spark");
      }, 20);
      setTimeout(function () {
        removeFromCanvas("spark");
        navDisplay();
      }, 5550);
    };
  } else if (simsubscreennum == 6) {
    removeFromCanvas("filler");
    removeFromCanvas("b1");
    removeFromCanvas("wp5");
    removeFromCanvas("dt");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(62, 45, -90); //specify the left top and deg of arrow
    document.getElementById("brush1").onclick = function () {
      navHide();
      document.getElementById("brush1").onclick = " ";
      myStopFunction();
      document.getElementById("brush1").style.animation =
        "movebrush1 4.3s linear forwards";
      setTimeout(function () {
        removeFromCanvas("dust1");
        setTimeout(function () {
          navDisplay();
        }, 1950);
      }, 2500);
    };
  }
}

function refresh() {
  myStopFunction();
  clearInterval(myInt);
  removeFromCanvas("prevButton");
  removeFromCanvas("nextButton");

  if (simsubscreennum == 0) {
    removeFromCanvas("prevButton");
    addToCanvas("nextButton");
    if (visibleImagesId[simsubscreennum].initialImages.length > 0) {
      visibleImagesId[simsubscreennum].initialImages.forEach(function (
        id,
        index
      ) {
        addToCanvas(id);
      });
    }
    if (visibleImagesId[simsubscreennum].hideImages.length > 0) {
      visibleImagesId[simsubscreennum].hideImages.forEach(function (id, index) {
        removeFromCanvas(id);
      });
    }
  } else {
    // if(visibleImagesId[simsubscreennum-1].initialImages.length>0) {
    visibleImagesId[simsubscreennum].animImages.forEach(function (img, index) {
      document.getElementById(img.id).style = " ";
      document.getElementById(img.id).classList.add(img.className);
      if (img.hidden) {
        removeFromCanvas(img.id);
      } else addToCanvas(img.id);
    });
    // }
    if (visibleImagesId[simsubscreennum].initialImages.length > 0) {
      visibleImagesId[simsubscreennum].initialImages.forEach(function (
        id,
        index
      ) {
        addToCanvas(id);
      });
    }
    if (visibleImagesId[simsubscreennum].hideImages.length > 0) {
      visibleImagesId[simsubscreennum].hideImages.forEach(function (id, index) {
        removeFromCanvas(id);
      });
    }
  }
}

function removeFromCanvas(id) {
  const canvasScreen = id.slice(0, 6);
  console.log(canvasScreen);
  if (canvasScreen == "canvas") {
    document.getElementById(id).classList.remove("display-flex");
  } else {
    document.getElementById(id).classList.remove("display-block");
  }
  document.getElementById(id).classList.add("hide");
}

function addToCanvas(id) {
  const canvasScreen = id.slice(0, 6);
  document.getElementById(id).classList.remove("hide");
  if (canvasScreen == "canvas") {
    document.getElementById(id).classList.add("display-flex");
  } else {
    document.getElementById(id).classList.add("display-block");
  }
}

function navDisplay() {
  addToCanvas("prevButton");
  if (simsubscreennum === 6) {
    addToCanvas("reButton");
  } else addToCanvas("nextButton");
}
function navHide() {
  removeFromCanvas("reButton");
  removeFromCanvas("prevButton");
  removeFromCanvas("nextButton");
}
