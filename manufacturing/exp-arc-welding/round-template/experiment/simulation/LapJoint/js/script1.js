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
    hideImages: ["grinder", "brush", "workpiece"],
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
    hideImages: ["mac", "knob", "dial"],
  },
  {
    simsubscreennum: 3,
    animImages: [
      {
        id: "dial",
        className: "dial",
        hidden: true,
      },
    ],
    initialImages: ["mac"],
    hideImages: ["spark1", "weld", "electrode1", "blank", "wp7", "dust"],
  },
  {
    simsubscreennum: 4,
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
    simsubscreennum: 5,
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
  for (temp = 0; temp <= 5; temp++) {
    removeFromCanvas("canvas" + temp);
  }
  simsubscreennum += 1;
  addToCanvas("canvas" + simsubscreennum);
  removeFromCanvas("nextButton");
  refresh();
  magic();
}

function navBack() {
  for (temp = 0; temp <= 5; temp++) {
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
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(25, 36, -90); //specify the left top and deg of arrow
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
  } else if (simsubscreennum == 4) {
    removeFromCanvas("reButton");
    removeFromCanvas("mac");
    removeFromCanvas("knob");
    removeFromCanvas("dial");
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
        "moveelectrode 4.9s linear forwards";
      document.getElementById("weld").style.animation =
        "moveweld 2.6s linear forwards";
      setTimeout(function () {
        removeFromCanvas("spark1");
        addToCanvas("weld1");
        setTimeout(function () {
          navDisplay();
        }, 2750);
      }, 2750);
    };
  } else if (simsubscreennum == 5) {
    removeFromCanvas("reButton");
    removeFromCanvas("wp7");
    removeFromCanvas("spark1");
    removeFromCanvas("electrode1");
    removeFromCanvas("blank");
    removeFromCanvas("weld");
    removeFromCanvas("weld1");
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
          removeFromCanvas("weld8");
          removeFromCanvas("weld81");
          removeFromCanvas("wp8");
          addToCanvas("wp81");
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
  if (simsubscreennum === 5) {
    addToCanvas("reButton");
  } else addToCanvas("nextButton");
}
function navHide() {
  removeFromCanvas("reButton");
  removeFromCanvas("prevButton");
  removeFromCanvas("nextButton");
}
