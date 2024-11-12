var simsubscreennum = 0;
var temp = 0;
var myInt = 0;

var visibleImagesId = [
  {
    simsubscreennum: 0,
    animImages: [],
    initialImages: ["screw0", "m0", "off0", "b0", "sb0", "bl0", "p0", "p10"],
    hideImages: [
      "screw1",
      "m1",
      "off1",
      "b1",
      "bl11",
      "fill1",
      "bl1",
      "d1",
      "sb1",
    ],
  },
  {
    simsubscreennum: 1,
    animImages: [
      {
        id: "b1",
        className: "b1",
      },
      {
        id: "fill1",
        className: "fill1",
      },
    ],
    initialImages: ["screw1", "off1", "m1", "bl1", "bl11", "sb1"],
    hideImages: [
      "fill2",
      "m2",
      "off2",
      "p2",
      "screw2",
      "p12",
      "bl2",
      "sb2",
      "pb2",
    ],
  },
  {
    simsubscreennum: 2,
    animImages: [
      {
        id: "p2",
        className: "p2",
      },

      {
        id: "p12",
        className: "p12",
      },
    ],
    initialImages: ["m2", "off2", "screw2", "fill2", "bl2", "sb2", "pb2"],
    hideImages: [
      "fill3",
      "m3",
      "screw3",
      "off3",
      "on3",
      "bl3",
      "sb3",
      "p3",
      "p13",
      "melt3",
      "melt13",
      "melt23",
    ],
  },
  {
    simsubscreennum: 3,
    animImages: [
      {
        id: "screw3",
        className: "screw3",
      },
      {
        id: "fill3",
        className: "fill3",
      },
      {
        id: "melt3",
        className: "melt3",
        hidden: true,
      },
      {
        id: "melt13",
        className: "melt13",
        hidden: true,
      },
      {
        id: "melt23",
        className: "melt23",
        hidden: true,
      },
    ],
    initialImages: ["m3", "off3", "bl3", "sb3", "p3", "p13"],
    hideImages: [
      "m4",
      "screw4",
      "sb4",
      "p14",
      "p4",
      "off4",
      "bg4",
      "f14",
      "f24",
      "tap4",
      "hand4",
      "pipe4",
    ],
  },
  {
    simsubscreennum: 4,
    animImages: [
      {
        id: "f14",
        className: "f14",
        hidden: true,
      },
      {
        id: "f24",
        className: "f24",
        hidden: true,
      },
      {
        id: "hand4",
        className: "hand4",
        hidden: true,
      },
    ],
    initialImages: ["m4", "screw4", "p14", "off4", "p4", "sb4", "bg4", "tap4"],
    hideImages: [
      "m5",
      "screw5",
      "bg5",
      "off5",
      "f5",
      "sb5",
      "p5",
      "p15",
      "pb5",
    ],
  },
  {
    simsubscreennum: 5,
    animImages: [
      {
        id: "p5",
        className: "p5",
      },

      {
        id: "p15",
        className: "p15",
      },
    ],
    initialImages: ["m5", "screw5", "bg5", "off5", "f5", "sb5", "pb5"],
    hideImages: ["m6", "screw6", "bg6", "off6", "sb6", "f6"],
  },
  {
    simsubscreennum: 6,
    animImages: [
      {
        id: "f6",
        className: "f6",
      },
    ],
    initialImages: ["m6", "screw6", "bg6", "off6", "sb6"],
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
    //Write code for canvas 1 animations
    removeFromCanvas("reButton");
    removeFromCanvas("screw0");
    removeFromCanvas("m0");
    removeFromCanvas("off0");
    removeFromCanvas("b0");
    removeFromCanvas("sb0");
    removeFromCanvas("p0");
    removeFromCanvas("p10");
    removeFromCanvas("bl0");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(12, 55, -90); //specify the left top and deg of arrow
    document.getElementById("b1").onclick = function () {
      document.getElementById("b1").onclick = " "; //To stop further click on pattern
      myStopFunction(); //stops blinking arrow
      navHide();
      document.getElementById("b1").style.animation =
        "movebucket 3.5s ease-out forwards "; //Since it runs for 1.2s
      setTimeout(function () {
        addToCanvas("d1");
        document.getElementById("fill1").style.animation =
          "movefill 2.5s ease-out forwards ";
        setTimeout(function () {
          removeFromCanvas("d1");
          removeFromCanvas("b1");
          navDisplay();
        }, 2600);
      }, 3450);
    };
  } else if (simsubscreennum == 2) {
    removeFromCanvas("reButton");
    removeFromCanvas("m1");
    removeFromCanvas("off1");
    removeFromCanvas("fill1");
    removeFromCanvas("screw1");
    removeFromCanvas("b1");
    removeFromCanvas("d1");
    removeFromCanvas("bl1");
    removeFromCanvas("bl11");
    removeFromCanvas("sb1");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(11, 58, -90); //specify the left top and deg of arrow
    document.getElementById("pb2").onclick = function () {
      document.getElementById("pb2").onclick = " ";
      myStopFunction();
      navHide();
      removeFromCanvas("pb2");
      document.getElementById("p2").style.animation =
        "movepress2 4.2s ease-out forwards";
      document.getElementById("p12").style.animation =
        "movepress12 4.2s ease-out forwards";
      setTimeout(function () {
        navDisplay();
      }, 4350);
    };
  } else if (simsubscreennum == 3) {
    removeFromCanvas("reButton");
    removeFromCanvas("off2");
    removeFromCanvas("fill2");
    removeFromCanvas("m2");
    removeFromCanvas("p2");
    removeFromCanvas("screw2");
    removeFromCanvas("bl2");
    removeFromCanvas("p12");
    removeFromCanvas("sb2");
    removeFromCanvas("pb2");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(18, 35, -90); //specify the left top and deg of arrow
    document.getElementById("off3").onclick = function () {
      document.getElementById("off3").onclick = " ";
      myStopFunction();
      navHide();
      removeFromCanvas("off3");
      addToCanvas("on3");
      setTimeout(function () {
        document.getElementById("screw3").style.animation =
          "movescrew3 4.3s ease-out forwards";
        document.getElementById("fill3").style.animation =
          "movefill3 4.3s ease-out forwards";
        document.getElementById("melt3").style.animation =
          "movemelt3 4.3s ease-out forwards  ";
        addToCanvas("melt13");
        document.getElementById("melt13").style.animation =
          "movemelt13 4.3s ease-out forwards  ";
        document.getElementById("melt23").style.animation =
          "movemelt23 4.3s ease-out forwards";
        setTimeout(function () {
          addToCanvas("melt3");
          setTimeout(function () {
            addToCanvas("melt23");
            setTimeout(function () {
              navDisplay();
            }, 2750);
          }, 2550);
        }, 750);
      }, 300);
    };
  } else if (simsubscreennum == 4) {
    removeFromCanvas("reButton");
    removeFromCanvas("m3");
    removeFromCanvas("fill3");
    removeFromCanvas("off3");
    removeFromCanvas("on3");
    removeFromCanvas("screw3");
    removeFromCanvas("bl3");
    removeFromCanvas("sb3");
    removeFromCanvas("p3");
    removeFromCanvas("p13");
    removeFromCanvas("melt3");
    removeFromCanvas("melt13");
    removeFromCanvas("melt23");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(52, 29, -90); //specify the left top and deg of arrow
    document.getElementById("tap4").onclick = function () {
      document.getElementById("tap4").onclick = " "; //To stop further click on pattern
      myStopFunction(); //stops blinking arrow
      navHide();
      addToCanvas("pipe4");
      addToCanvas("hand4");
      document.getElementById("hand4").style.animation =
        "movehand4 1.5s ease-out forwards";
      setTimeout(function () {
        setTimeout(function () {
          removeFromCanvas("pipe4");
          removeFromCanvas("hand4");
        }, 650);
        addToCanvas("f14");
        addToCanvas("f24");
        document.getElementById("f14").style.animation =
          "movef4 3.3s ease-out forwards";
        document.getElementById("f24").style.animation =
          "movef4 3.3s ease-out forwards";
        setTimeout(function () {
          navDisplay();
        }, 3450);
      }, 850);
    };
  } else if (simsubscreennum == 5) {
    removeFromCanvas("reButton");
    removeFromCanvas("screw4");
    removeFromCanvas("m4");
    removeFromCanvas("off4");
    removeFromCanvas("p4");
    removeFromCanvas("p14");
    removeFromCanvas("sb4");
    removeFromCanvas("f14");
    removeFromCanvas("f24");
    removeFromCanvas("bg4");
    removeFromCanvas("pipe4");
    removeFromCanvas("pipe4");
    removeFromCanvas("hand4");
    removeFromCanvas("tap4");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(66, 60, -50); //specify the left top and deg of arrow
    document.getElementById("pb5").onclick = function () {
      document.getElementById("pb5").onclick = " "; //To stop further click on pattern
      myStopFunction(); //stops blin
      navHide();
      removeFromCanvas("pb5");
      document.getElementById("p5").style.animation =
        "movepress5 2.2s ease-out forwards ";
      document.getElementById("p15").style.animation =
        "movepress15 2.2s ease-out forwards ";
      setTimeout(function () {
        navDisplay();
      }, 2350);
    };
  } else if (simsubscreennum == 6) {
    removeFromCanvas("reButton");
    removeFromCanvas("screw5");
    removeFromCanvas("m5");
    removeFromCanvas("off5");
    removeFromCanvas("p5");
    removeFromCanvas("p15");
    removeFromCanvas("sb5");
    removeFromCanvas("f5");
    removeFromCanvas("pb5");
    removeFromCanvas("bg5");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(63, 72, 0); //specify the left top and deg of arrow
    document.getElementById("f6").onclick = function () {
      document.getElementById("f6").onclick = " "; //To stop further click on pattern
      myStopFunction(); //stops blink
      navHide();
      document.getElementById("f6").style.animation =
        "movefinal6 3.2s ease-out forwards ";
      setTimeout(function () {
        navDisplay();
      }, 3550);
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
