let labs = [
  {
    labName: "Manufacturing Lab",
    experiments: [
      {
        id: "Arc Welding(Lap joint and V-butt joint)",
        path: "manufacturing/exp-arc-welding",
      },
      { id: "Deep Drawing", path: "manufacturing/exp-deep-drawing" },
      { id: "Blow Moulding", path: "manufacturing/exp-blow-moulding" },
      { id: "Sand Casting", path: "manufacturing/exp-sand-casting" },
      {
        id: "Spot Welding and Friction Welding",
        path: "manufacturing/exp-spot-friction-welding",
      },
      { id: "Brazing", path: "manufacturing/exp-brazing" },
      { id: "Rolling", path: "manufacturing/exp-rolling" },
      { id: "Forging", path: "manufacturing/exp-forging" },
      {
        id: "Injection Moulding",
        path: "manufacturing/exp-injection-moulding",
      },
      {
        id: "Blanking and Piercing",
        path: "manufacturing/exp-blanking-piercing",
      },
    ],
  },
  {
    labName: "Heat Transfer Lab",
    experiments: [
      {
        id: "Thermal Conductivity of a metal rod",
        path: "heat_transfer/exp-thermal-conductivity",
      },
      {
        id: "Heat Transfer Through Lagged Pipe",
        path: "heat_transfer/exp-lagged-pipe",
      },
      {
        id: "Test on Heat Exchangers",
        path: "heat_transfer/exp-test-on-heat-exchangers",
      },
      {
        id: "Composite Slab Apparatus",
        path: "heat_transfer/exp-composite-slab-apparatus",
      },
      {
        id: "Measurement of Emissivity",
        path: "heat_transfer/exp-measurement-of-emissivity",
      },
      {
        id: "Heat Transfer by Natural Convection",
        path: "heat_transfer/exp-heat-transfer-by-natural-convection",
      },
      {
        id: "Heat Transfer by Forced Convection",
        path: "heat_transfer/exp-heat-transfer-by-forced-convection",
      },
    ],
  },
  {
    labName: "Engineering Graphics Lab",
    experiments: [
      {
        id: "Projection of point and Conventions",
        path: "engineering_graphics/exp-projection-of-points",
      },
      {
        id: "Introduction of Engineering  Drawing",
        path: "engineering_graphics/exp-basics-of-engineering-drawing",
      },
      {
        id: "Projections of Line(Part I)",
        path: "engineering_graphics/exp-projection-of-lines",
      },
      {
        id: "Projections of Line(Part II)",
        path: "engineering_graphics/exp-projection-of-lines-two",
      },
      {
        id: "Projection of Planes",
        path: "engineering_graphics/exp-projection-of-planes",
      },
      {
        id: "Projection of solid",
        path: "engineering_graphics/exp-projection-of-solid",
      },
      {
        id: "Auxiliary plane Method (Part I)",
        path: "engineering_graphics/exp-auxiliary-plane-method",
      },
      {
        id: "Auxiliary Plane method(Part II)",
        path: "engineering_graphics/exp-auxiliary-plane-method-two",
      },
      {
        id: "Isometric to Orthographic View",
        path: "engineering_graphics/exp-isometric-to-orthographic",
      },
      {
        id: "Orthographic to Isometric View",
        path: "engineering_graphics/exp-orthographic-to-isometric",
      },
    ],
  },
  {
    labName: "Machine Design Lab",
    experiments: [
      { id: "Axial Load", path: "machine_design/exp-axial-load" },
      {
        id: "Design of Shaft(Belt Driven)",
        path: "machine_designs/exp-design-shaft-belt",
      },
      {
        id: "Design of Shaft(Gear Driven)",
        path: "machine_design/exp-design-shaft-gear",
      },
    ],
  },
  {
    labName: "Thermodynamics Lab",
    experiments: [
      {
        id: "Measurement of steam Quality",
        path: "thermodynamics/exp-measurement-of-steam-quality",
      },
      {
        id: "Thermodynamics data hand book",
        path: "thermodynamics/exp-thermodynamics-hand-book",
      },
      {
        id: "Compressibility Chart ",
        path: "thermodynamics/exp-compressibility-chart",
      },
      { id: "Carnot Cycle", path: "thermodynamics/exp-carnot-cycle" },
      { id: "Diesel Cycle", path: "thermodynamics/exp-diesel-cycle" },
      { id: "Dual Cycle", path: "thermodynamics/exp-dual-cycle" },
      { id: "Ericsson Cycle", path: "thermodynamics/exp-ericsson-cycle" },
      { id: "Otto Cycle", path: "thermodynamics/exp-otto-cycle" },
      {
        id: "Psychrometric Chart",
        path: "thermodynamics/exp-psychometric-chart",
      },
      {
        id: "Second Law Of Thermodynamics",
        path: "thermodynamics/exp-second-law-of-thermodynamics",
      },
      { id: "Stirling Cycle", path: "thermodynamics/exp-stirling-cycle" },
      {
        id: "Third Law Of Thermodynamics",
        path: "thermodynamics/exp-third-law-of-thermodynamics",
      },
    ],
  },
  {
    labName: "Vibrations II",
    experiments: [
      { id: "Free Vibration Analysis of Two Degree of Freedom System", path: "vibration_two/exp-free-vibration" },
      {
        id: "Compound Pendulum ",
        path: "vibration_two/exp-compound-pendulum",
      }
    ],
  },
  {
    labName: "UAV Lab",
    experiments: [
      {
        id: "Determination of Motor Thrust",
        path: "UAV/exp-determination-of-motor-thrust",
      },
      {
        id: "Assembly of Quadcopter",
        path: "UAV/exp-assembly-of-quadcopter/index.html",
      },
      {
        id: "Caliberation of Quadcopter",
        path: "UAV/exp-calibration-of-quadcopter/index.html",
      },
    ],
  },
  {
    labName: "Additive Manufacturing Lab",
    experiments: [
      {
        id: "Effect of FDM process parameters on tensile strength of 3D printed specimen",
        path: "additive_manufacturing_lab/exp-fdm-tensile-print",
      },
      {
        id: "Effect of FDM process parameters on printing time of 3D printed specimens",
        path: "additive_manufacturing_lab/exp-print-time-experiment",
      },
      {
        id: "Effect of SLM process parameters on tensile strength of 3D printed specimen",
        path: "additive_manufacturing_lab/exp-slm-tensile",
      },
    ],
  },
  {
    labName: "Dynamics of Machine II",
    experiments: [
      {
        id: "Compound Gear Train",
        path: "dynamics_of_machine_two/exp-compound-gear-train",
      },
      {
        id: "Reverted Gear Train",
        path: "dynamics_of_machine_two/exp-reverted-gear-train",
      },
      {
        id: "Epicyclic Gear Train",
        path: "dynamics_of_machine_two/exp-epicyclic-gear-train",
      },
      {
        id: "Continuously Vriable Transmission",
        path: "dynamics_of_machine_two/exp-continuous-variable-transmission",
      },
    ],
  },
  {
    labName: "Engineering Mechanics II",
    experiments: [
      {
        id: "Cart Moving on a Cyclic Track",
        path: "engineering_mechanics_two/exp-cart-moving-on-cyclic-track",
      },
      {
        id: "Beam Bending",
        path: "engineering_mechanics_two/exp-beam-bending",
      },
      // {
      //   id: "Coupled Pendulum,
      //   path: "engineering_mechanics_two/exp-coupled-pendulum",
      // },
      // {
      //   id: "Oscillation in U Tube",
      //   path: "engineering_mechanics_two/exp-oscillation-in-utube",
      // },
    ],
  },
];

let labList = "";
let experimentList = "";
labs.forEach((lab) => {
  experimentList = "";
  getExperimentList(lab.experiments);
  labList += `
    <div class="card col-md-3 m-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${lab.labName}</h5>
            <p class="card-text">List of Experiments</p>
            ${experimentList}
        </div>
    </div> 
    `;
});

function getExperimentList(experiments) {
  experiments.forEach(function (expt) {
    experimentList += `
        <button onclick="location.href='${expt.path}'"class="btn btn-outline-primary m-2 p-2">${expt.id}</button>
        `;
  });
  return experimentList;
}

document.getElementById("labCards").innerHTML = labList;
