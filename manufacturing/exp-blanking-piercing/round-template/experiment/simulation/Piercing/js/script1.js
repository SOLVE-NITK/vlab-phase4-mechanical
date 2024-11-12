var simsubscreennum = 0;
var temp = 0;
var myInt = 0;

var visibleImagesId = [
  {
    simsubscreennum: 0,
    animImages: [], //animated images in the current screen
    initialImages: ["machine0", "g0", "off0", "metal0"], //initial images to be displayed in current screen
    hideImages: ["machine1", "b1", "off1"], //images in the next screen which needs to be hidden when clicked on back button
  },
  {
    simsubscreennum: 1,
    animImages: [
      {
        id: "b1",
        className: "b1",
      },
    ],
    initialImages: ["machine1", "off1"],
    hideImages: [
      "hyd",
      "blank",
      "m",
      "die",
      "off2",
      "on2",
      "metal",
      "metal1",
      "press",
      "diebg",
    ],
  },

  {
    simsubscreennum: 2,
    animImages: [
      {
        id: "press",
        className: "press",
        hidden: true,
      },
      {
        id: "m",
        className: "m",
        hidden: true,
      },
    ],
    initialImages: ["hyd", "blank", "off2"],
    hideImages: ["machine3", "off3", "bl3", "mbg3", "m3", "eq", "eq1"],
  },
  {
    simsubscreennum: 3,
    animImages: [
      {
        id: "bl3",
        className: "bl3",
      },
      {
        id: "m3",
        className: "m3",
      },
    ],
    initialImages: ["machine3", "off3", "mbg3"],
    hideImages: ["m4", "g4"],
  },
  {
    simsubscreennum: 4,
    animImages: [
      {
        id: "g4",
        className: "g4",
      },
    ],
    initialImages: ["m4"],
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
  for (temp = 0; temp <= 4; temp++) {
    removeFromCanvas("canvas" + temp);
  }
  simsubscreennum += 1;
  addToCanvas("canvas" + simsubscreennum);
  removeFromCanvas("nextButton");
  refresh();
  magic();
}

function navBack() {
  for (temp = 0; temp <= 4; temp++) {
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
    removeFromCanvas("g0");
    removeFromCanvas("metal0");
    removeFromCanvas("machine0");
    removeFromCanvas("off0");
    navDisplay();

    //Write code for canvas 1 animations
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(12, 58, -90); //specify the left top and deg of arrow
    document.getElementById("b1").onclick = function () {
      document.getElementById("b1").onclick = " ";
      myStopFunction(); //stops blinking arrow
      navHide();
      document.getElementById("b1").style.animation =
        "movePattern 2.2s ease-out forwards ";
      setTimeout(function () {
        navDisplay();
      }, 2550);
    };
  } else if (simsubscreennum == 2) {
    removeFromCanvas("reButton");
    removeFromCanvas("off1");
    removeFromCanvas("machine1");
    removeFromCanvas("b1");
    navDisplay();

    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(73, 46, -60); //specify the left top and deg of arrow
    document.getElementById("off2").onclick = function () {
      document.getElementById("off2").onclick = " ";
      myStopFunction(); //stops blinking arrow
      removeFromCanvas("off2");
      addToCanvas("on2");
      navHide();
      setTimeout(function () {
        removeFromCanvas("on2");
        removeFromCanvas("blank");
        removeFromCanvas("hyd");
        addToCanvas("press");
        addToCanvas("metal");
        addToCanvas("die");
        addToCanvas("diebg");
        setTimeout(function () {
          document.getElementById("press").style.animation =
            "movepress 4.2s linear forwards";
          setTimeout(function () {
            removeFromCanvas("metal");
            addToCanvas("metal1");
            addToCanvas("m");
            document.getElementById("m").style.animation =
              "movew 1.8s ease-out forwards";
            setTimeout(function () {
              navDisplay();
            }, 2450);
          }, 2050);
        }, 550);
      }, 850);
    };
  } else if (simsubscreennum == 3) {
    removeFromCanvas("reButton");
    removeFromCanvas("die");
    removeFromCanvas("hyd");
    removeFromCanvas("press");
    removeFromCanvas("off2");
    removeFromCanvas("on2");
    removeFromCanvas("metal1");
    removeFromCanvas("diebg");
    removeFromCanvas("metal");
    removeFromCanvas("m");
    removeFromCanvas("blank");
    navDisplay();

    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(56, 52, -90); //specify the left top and deg of arrow
    document.getElementById("bl3").onclick = function () {
      document.getElementById("bl3").onclick = " ";
      myStopFunction(); //stops blinking arrow
      navHide();
      document.getElementById("bl3").style.animation =
        "movePattern2 2.2s ease-out forwards";
      document.getElementById("m3").style.animation =
        "movescrap 2.2s ease-out forwards";
      setTimeout(function () {
        addToCanvas("eq");
        addToCanvas("eq1");
        setTimeout(function () {
          navDisplay();
        }, 1750);
      }, 2250);
    };
  } else if (simsubscreennum == 4) {
    removeFromCanvas("reButton");
    removeFromCanvas("off3");
    removeFromCanvas("m3");
    removeFromCanvas("machine3");
    removeFromCanvas("bl3");
    removeFromCanvas("mbg3");
    removeFromCanvas("eq");
    removeFromCanvas("eq1");
    navDisplay();

    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(55, 50, -90); //specify the left top and deg of arrow
    document.getElementById("g4").onclick = function () {
      document.getElementById("g4").onclick = " ";
      myStopFunction(); //stops blinking arrow
      navHide();
      document.getElementById("g4").style.animation =
        "movegrinder 6.2s ease-out  forwards";
      setTimeout(function () {
        navDisplay();
      }, 6450);
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
  if (simsubscreennum === 4) {
    addToCanvas("reButton");
  } else addToCanvas("nextButton");
}
function navHide() {
  removeFromCanvas("reButton");
  removeFromCanvas("prevButton");
  removeFromCanvas("nextButton");
}
