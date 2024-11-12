var simsubscreennum = 0;
var temp = 0;
var myInt = 0;

var visibleImagesId = [
  {
    simsubscreennum: 0,
    animImages: [],
    initialImages: ["metal0", "machine0", "holder0", "off0"],
    hideImages: ["machine1", "off1"],
  },
  {
    simsubscreennum: 1,
    animImages: [
      {
        id: "bl",
        className: "bl",
      },
    ],
    initialImages: ["machine1", "off1"],
    hideImages: ["machine2", "metal2", "off2"],
  },
  {
    simsubscreennum: 2,
    animImages: [
      {
        id: "bh",
        className: "bh",
      },
    ],
    initialImages: ["machine2", "metal2", "off2"],
    hideImages: [
      "hyd",
      "blank",
      "machine",
      "m",
      "w",
      "die",
      "off3",
      "sw",
      "on3",
      "metal",
      "press",
      "diebg",
      "rbg",
      "lbg",
      "EQ",
      "EQ1",
    ],
  },
  {
    simsubscreennum: 3,
    animImages: [
      {
        id: "press",
        className: "press",
        hidden: true,
      },
      {
        id: "diebg",
        className: "diebg",
        hidden: true,
      },
      {
        id: "rbg",
        className: "rbg",
        hidden: true,
      },
      {
        id: "lbg",
        className: "lbg",
        hidden: true,
      },
    ],
    initialImages: ["hyd", "blank", "machine", "off3", "sw"],
    hideImages: ["re", "press-4", "m", "w"],
  },
  {
    simsubscreennum: 4,
    animImages: [
      {
        id: "press-4",
        className: "press-4",
      },
    ],
    initialImages: ["re", "m", "w"],
    hideImages: ["blank1", "hyd1", "off5"],
  },
  {
    simsubscreennum: 5,
    animImages: [
      {
        id: "bh1",
        className: "bh1",
      },
    ],
    initialImages: ["blank1", "hyd1", "off5"],
    hideImages: ["hyd1-6", "blank1-6", "cup-6", "off6"],
  },
  {
    simsubscreennum: 6,
    animImages: [
      {
        id: "cup-6",
        className: "cup-6",
        hidden: true,
      },
    ],
    initialImages: ["hyd1-6", "blank1-6", "off6"],
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
    removeFromCanvas("metal0");
    removeFromCanvas("off0");
    removeFromCanvas("holder0");
    removeFromCanvas("machine0");
    navDisplay();
    //Write code for canvas 1 animations
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(11, 56, -90); //specify the left top and deg of arrow
    document.getElementById("bl").onclick = function () {
      document.getElementById("bl").onclick = " ";
      myStopFunction(); //stops blinking arrow
      navHide();
      document.getElementById("bl").style.animation =
        "movePattern 2.2s ease-out forwards ";
      setTimeout(function () {
        navDisplay();
      }, 2350);
    };
  } else if (simsubscreennum == 2) {
    removeFromCanvas("reButton");
    removeFromCanvas("bl");
    removeFromCanvas("off1");
    removeFromCanvas("machine1");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(18, 58, -90); //specify the left top and deg of arrow
    document.getElementById("bh").onclick = function () {
      document.getElementById("bh").onclick = " ";
      myStopFunction(); //stops blinking arrow
      navHide();
      document.getElementById("bh").style.animation =
        "movePattern2 2.2s ease-out forwards";
      setTimeout(function () {
        navDisplay();
      }, 2350);
    };
  } else if (simsubscreennum == 3) {
    removeFromCanvas("reButton");
    removeFromCanvas("off2");
    removeFromCanvas("metal2");
    removeFromCanvas("machine2");
    removeFromCanvas("bh");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(73, 49, -60); //specify the left top and deg of arrow
    document.getElementById("sw").onclick = function () {
      document.getElementById("sw").onclick = " ";
      myStopFunction(); //stops blinking arrow
      removeFromCanvas("off3");
      removeFromCanvas("sw");
      addToCanvas("on3");
      navHide();
      setTimeout(function () {
        removeFromCanvas("on3");
        removeFromCanvas("machine");
        removeFromCanvas("blank");
        removeFromCanvas("hyd");
        addToCanvas("press");
        addToCanvas("metal");
        addToCanvas("die");
        addToCanvas("diebg");
        addToCanvas("m");
        addToCanvas("w");
        setTimeout(function () {
          removeFromCanvas("metal");
          addToCanvas("rbg");
          addToCanvas("lbg");

          document.getElementById("press").style.animation =
            "movepress 2.2s ease-out forwards";
          document.getElementById("diebg").style.animation =
            "movew 2.2s ease-out forwards";
          document.getElementById("rbg").style.animation =
            "moverbg 2.2s ease-out forwards";
          document.getElementById("lbg").style.animation =
            "movelbg 2.2s ease-out forwards";
          setTimeout(function () {
            addToCanvas("EQ1");
            addToCanvas("EQ");
            setTimeout(function () {
              navDisplay();
            }, 1950);
          }, 2500);
        }, 550);
      }, 850);
    };
  } else if (simsubscreennum == 4) {
    removeFromCanvas("EQ1");
    removeFromCanvas("EQ");
    removeFromCanvas("reButton");
    removeFromCanvas("die");
    removeFromCanvas("press");
    removeFromCanvas("off3");
    removeFromCanvas("sw");
    removeFromCanvas("on3");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(42, 42, -90); //specify the left top and deg of arrow
    document.getElementById("press-4").onclick = function () {
      document.getElementById("press-4").onclick = " ";
      myStopFunction(); //stops blinking arrow
      navHide();
      document.getElementById("press-4").style.animation =
        "movepress2 2.2s ease-out forwards";
      setTimeout(function () {
        navDisplay();
      }, 2850);
    };
  } else if (simsubscreennum == 5) {
    removeFromCanvas("reButton");
    removeFromCanvas("re");
    removeFromCanvas("die");
    removeFromCanvas("m");
    removeFromCanvas("press-4");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(52, 55, -120); //specify the left top and deg of arrow
    document.getElementById("bh1").onclick = function () {
      document.getElementById("bh1").onclick = " ";
      myStopFunction(); //stops blinking arrow
      navHide();
      document.getElementById("bh1").style.animation =
        "movePattern3 2.2s ease-out  forwards";
      setTimeout(function () {
        navDisplay();
      }, 2250);
    };
  } else if (simsubscreennum == 6) {
    removeFromCanvas("reButton");
    removeFromCanvas("off5");
    removeFromCanvas("bh1");
    removeFromCanvas("blank1");
    removeFromCanvas("hyd1");
    navDisplay();
    myInt = setInterval(function () {
      animatearrow();
    }, 500); //calls blinking arrow function
    animateArrowATPosition(53, 54, -100); //specify the left top and deg of arrow
    document.getElementById("blank1-6").onclick = function () {
      document.getElementById("blank1-6").onclick = " ";
      myStopFunction(); //stops blinking arrow
      navHide();
      addToCanvas("cup-6");
      document.getElementById("cup-6").style.animation =
        "movecup 1.6s ease-out forwards";
      removeFromCanvas("blank1-6");
      setTimeout(function () {
        navDisplay();
      }, 1250);
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
