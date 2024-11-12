var simsubscreennum = 0;
var temp = 0;
var myInt = 0;

var visibleImagesId = [
  {
    simsubscreennum: 0,
    animImages: [],
    initialImages: [
      "m0",
      "h0",
      "metal0",
      "g0",
      "metal01",
      "grinder0",
      "hammer0",
    ],
    hideImages: ["grinder", "brush", "workpiece", "metal1"],
  },
  {
    simsubscreennum: 1,
    animImages: [
      {
        id: "grinder",
        className: "grinder",
        hidden: false,
      },
      {
        id: "brush",
        className: "brush",
        hidden: true,
      },
    ],
    initialImages: ["workpiece"],
    hideImages: ["lj", "w2", "w1"],
  },

  {
    simsubscreennum: 2,
    animImages: [
      {
        id: "w2",
        className: "w2",
        hidden: false,
      },
      {
        id: "w1",
        className: "w1",
        hidden: false,
      },
    ],
    initialImages: [],
    hideImages: ["p1", "p2", "final"],
  },
  {
    simsubscreennum: 3,
    animImages: [
      {
        id: "p1",
        className: "p1",
      },
      {
        id: "p2",
        className: "p2",
      },
    ],
    initialImages: [],
    hideImages: ["mac", "dial", "knob"],
  },
  {
    simsubscreennum: 4,
    animImages: [
      {
        id: "dial",
        className: "dial",
        hidden: true,
      },
    ],
    initialImages: ["mac"],
    hideImages: ["spark", "wp5", "electrode", "s1", "s2", "s3", "s4"],
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
        id: "electrode",
        className: "electrode",
      },
    ],
    initialImages: ["wp5"],
    hideImages: ["metal4", "metal2"],
  },
  {
    simsubscreennum: 6,
    animImages: [
      {
        id: "metal4",
        className: "metal4",
      },
    ],
    initialImages: [],
    hideImages: [
      "spark1",
      "weld1",
      "electrode1",
      "blank",
      "wp7",
      "dust",
      "weld",
    ],
  },
  {
    simsubscreennum: 7,
    animImages: [
      {
        id: "weld",
        className: "weld",
      },
      {
        id: "spark1",
        className: "spark1",
        hidden: true,
      },
      {
        id: "electrode1",
        className: "electrode1",
      },
    ],
    initialImages: ["blank", "wp7", "dust"],
    hideImages: ["dust1", "wp8", "brush1", "hammer", "weld8", "weld81"],
  },
  {
    simsubscreennum: 8,
    animImages: [
      {
        id: "brush1",
        className: "brush1",
      },
      {
        id: "hammer",
        className: "hammer",
      },
    ],
    initialImages: ["dust1", "wp8", "weld8", "weld81"],
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
  for (temp = 0; temp <= 8; temp++) {
    removeFromCanvas("canvas" + temp);
  }
  simsubscreennum += 1;
  addToCanvas("canvas" + simsubscreennum);
  removeFromCanvas("nextButton");
  refresh();
  magic();
}

function navBack() {
  for (temp = 0; temp <= 8; temp++) {
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
  }

  if (simsubscreennum == 1) {
    removeFromCanvas("reButton");
    removeFromCanvas("m0");
    removeFromCanvas("g0");
    removeFromCanvas("h0");
    removeFromCanvas("metal0");
    removeFromCanvas("grinder0");
    removeFromCanvas("hammer0");
    removeFromCanvas("metal01");
    navDisplay();

    //Write code for canvas 1 animations
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(58, 58, -90); //specify the left top and deg of arrow
    document.getElementById("grinder").onclick = function () {
      document.getElementById("grinder").onclick = " "; //To stop further click on pattern
      myStopFunction(); //stops blinking arrow
      navHide();
      document.getElementById("grinder").style.animation =
        "movePattern 2.2s linear forwards ";
      setTimeout(function () {
        addToCanvas("metal1");
        removeFromCanvas("workpiece");
        setTimeout(function () {
          removeFromCanvas("grinder");
          addToCanvas("brush");
          document.getElementById("brush").style.animation =
            "movebrush 1.2s linear forwards ";
          setTimeout(function () {
            removeFromCanvas("brush");
            navDisplay();
          }, 1250);
        }, 1250);
      }, 2250);
    };
  } else if (simsubscreennum == 2) {
    removeFromCanvas("reButton");
    removeFromCanvas("workpiece");
    removeFromCanvas("metal1");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(27, 43, -90); //specify the left top and deg of arrow
    document.getElementById("w2").onclick = function () {
      document.getElementById("w2").onclick = " ";
      myStopFunction();
      navHide();
      document.getElementById("w1").style.animation =
        "movew1 1.2s ease-out forwards";
      document.getElementById("w2").style.animation =
        "movew2 1.2s ease-out forwards";
      setTimeout(function () {
        removeFromCanvas("w1");
        removeFromCanvas("w2");
        addToCanvas("lj");
        setTimeout(function () {
          navDisplay();
        }, 1250);
      }, 250);
    };
  } else if (simsubscreennum == 3) {
    removeFromCanvas("reButton");
    removeFromCanvas("lj");
    removeFromCanvas("w2");
    removeFromCanvas("w1");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(38, 43, -90); //specify the left top and deg of arrow
    document.getElementById("p2").onclick = function () {
      document.getElementById("p2").onclick = " ";
      myStopFunction();
      navHide();
      document.getElementById("p1").style.animation =
        "movepiece 1.2s ease-out forwards";
      document.getElementById("p2").style.animation =
        "movepiece 1.2s ease-out forwards";
      setTimeout(function () {
        removeFromCanvas("p1");
        removeFromCanvas("p2");
        addToCanvas("final");
        setTimeout(function () {
          navDisplay();
        }, 850);
      }, 500);
    };
  } else if (simsubscreennum == 4) {
    removeFromCanvas("reButton");
    removeFromCanvas("final");
    removeFromCanvas("p2");
    removeFromCanvas("p1");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(83, 33, -90); //specify the left top and deg of arrow
    document.getElementById("mac").onclick = function () {
      document.getElementById("mac").onclick = " ";
      myStopFunction();
      navHide();
      addToCanvas("knob");
      addToCanvas("dial");
      document.getElementById("dial").style.animation =
        "movedial 1.2s ease-out forwards";
      setTimeout(function () {
        removeFromCanvas("knob");
        removeFromCanvas("dial");
        navDisplay();
      }, 1250);
    };
  }
  if (simsubscreennum == 5) {
    removeFromCanvas("reButton");
    removeFromCanvas("mac");
    removeFromCanvas("knob");
    removeFromCanvas("dial");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(9, 9, -90); //specify the left top and deg of arrow
    document.getElementById("electrode").onclick = function () {
      document.getElementById("electrode").onclick = " "; //To stop further click on pattern
      myStopFunction(); //stops blinking arrow
      navHide();
      document.getElementById("electrode").style.animation =
        "moveelectrode1 2s linear forwards ";
      addToCanvas("spark");
      document.getElementById("spark").style.animation =
        "movespark1 2s linear forwards ";
      setTimeout(function () {
        addToCanvas("spark");
        document.getElementById("spark").style.animation =
          "movespark2 2s linear forwards ";
        addToCanvas("s1");
        document.getElementById("electrode").style.animation =
          "moveelectrode2 2s linear forwards ";
        setTimeout(function () {
          document.getElementById("spark").style.animation =
            "movespark3 2s linear forwards ";
          addToCanvas("s2");
          document.getElementById("electrode").style.animation =
            "moveelectrode3 2s linear forwards ";
          setTimeout(function () {
            document.getElementById("spark").style.animation =
              "movespark4 2s linear forwards ";
            addToCanvas("s3");
            document.getElementById("electrode").style.animation =
              "moveelectrode4 2s linear forwards ";
            setTimeout(function () {
              document.getElementById("spark").style.animation =
                "movespark5 2s linear forwards ";
              addToCanvas("s4");
              document.getElementById("electrode").style.animation =
                "moveelectrode5 2s linear forwards ";
              setTimeout(function () {
                navDisplay();
              }, 2250);
            }, 3000);
          }, 3000);
        }, 3000);
      }, 3000);
    };
  } else if (simsubscreennum == 6) {
    removeFromCanvas("reButton");
    removeFromCanvas("s1");
    removeFromCanvas("s2");
    removeFromCanvas("s3");
    removeFromCanvas("s4");
    removeFromCanvas("spark");
    removeFromCanvas("electrode");
    removeFromCanvas("wp5");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(50, 35, -90); //specify the left top and deg of arrow
    document.getElementById("metal4").onclick = function () {
      document.getElementById("metal4").onclick = " ";
      myStopFunction();
      navHide();
      document.getElementById("metal4").style.transformOrigin = "70% 35%";
      document.getElementById("metal4").style.animation =
        "metalrotate 0.9s linear forwards";
      setTimeout(function () {
        removeFromCanvas("metal4");
        addToCanvas("metal2");
        setTimeout(function () {
          navDisplay();
        }, 1250);
      }, 850);
    };
  } else if (simsubscreennum == 7) {
    removeFromCanvas("reButton");
    removeFromCanvas("metal4");
    removeFromCanvas("metal2");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(13, 16, -90); //specify the left top and deg of arrow
    document.getElementById("electrode1").onclick = function () {
      document.getElementById("electrode1").onclick = " ";
      myStopFunction();
      navHide();
      addToCanvas("spark1");
      document.getElementById("spark1").style.animation =
        "movespark 2.5s linear forwards";
      document.getElementById("electrode1").style.animation =
        "moveelectrode 4.1s linear forwards";
      document.getElementById("weld").style.animation =
        "moveweld 2.6s linear forwards";
      setTimeout(function () {
        addToCanvas("weld1");
        setTimeout(function () {
          navDisplay();
        }, 2250);
      }, 2500);
    };
  } else if (simsubscreennum == 8) {
    removeFromCanvas("reButton");
    removeFromCanvas("wp7");
    removeFromCanvas("spark1");
    removeFromCanvas("electrode1");
    removeFromCanvas("blank");
    removeFromCanvas("weld");
    removeFromCanvas("dust");
    navDisplay();

    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(76, 10, -90); //specify the left top and deg of arrow
    document.getElementById("hammer").onclick = function () {
      document.getElementById("hammer").onclick = " ";
      myStopFunction();
      navHide();
      document.getElementById("hammer").style.animation =
        "movehammer 5.3s linear forwards";
      setTimeout(function () {
        document.getElementById("brush1").style.animation =
          "movebrush1 5.3s linear forwards";
        setTimeout(function () {
          removeFromCanvas("dust1");
          setTimeout(function () {
            navDisplay();
          }, 1850);
        }, 3500);
      }, 5300);
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
  if (simsubscreennum === 8) {
    addToCanvas("reButton");
  } else addToCanvas("nextButton");
}
function navHide() {
  removeFromCanvas("prevButton");
  removeFromCanvas("nextButton");
}
