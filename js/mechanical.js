let labs = [
    { 
        labName: "Manufacturing Lab", 
        experiments: [
            {id: "ARC WELDING(LAP AND BUTT JOINT)", path: "manufacturing/exp-arc-welding"},
            {id: "DEEP DRAWING", path: "manufacturing/exp-deep-drawing"},
            {id: "BLOW MOULDING", path: "manufacturing/exp-blow-moulding"}]
    },
    { 
        labName: "Heat Transfer Lab", 
        experiments: [
            {id: "Thermal Conductivity of a metal rod", path: "heat_transfer/exp-thermal-conductivity"},
            {id: "Heat Transfer Through Lagged Pipe", path: "heat_transfer/exp-lagged-pipe"},
            {id: "Test on Heat Exchangers", path: "heat_transfer/exp-test-on-heat-exchangers"}]    
    },
    { 
        labName: "Engineering Graphics Lab", 
        experiments: [
            {id: "Projections of Points", path: "engineering_graphics/exp-projection-of-points"},
            {id: "Projections of Lines", path: "engineering_graphics/exp-projection-of-lines"},
            {id: "Basics of Engineering Drawing", path: "engineering_graphics/exp-basics-of-engineering-drawing"}]   
    },
    { 
        labName: "Machine Design Lab", 
        experiments: [
            {id: "Axial Load", path: "machine_design/exp-axial-load"},
            {id: "Design of Shaft(Belt Driven)", path: "machine_designs/exp-design-shaft-belt"},
            {id: "Design of Shaft(Gear Driven)", path: "machine_design/exp-design-shaft-gear"}]   
    },
    { 
        labName: "Thermodynamics Lab", 
        experiments: [
            {id: "Throtolling cycle (measurement of steam )", path: "../thermodynamics/exp-measurement-of-steam-quality/index.html"},
            {id: "Thermodynamics data hand book", path: "../thermodynamics/exp-thermodynamics-hand-book/index.html"},
            {id: "Compressibility Chart ", path: "../thermodynamics/exp-compressibility-chart/index.html"}]    
    },
    { 
        labName: "Vibrations II", 
        experiments: [
            {id: "Coupled Pendulum", path: "vibration_two/exp-coupled-pendulum"},
            {id: "Oscillation in UTube", path: "vibration_two/exp-oscillation-in-utube"},
            {id: "Two Pulley System", path: "vibration_two/exp-two-pully-system"}]    
    },
    { 
        labName: "UAV Lab", 
        experiments: [
            {id: "Determination of Motor Thrust", path: "UAV/exp-determination-of-motor-thrust"},
            {id: "Experiment 2", path: "../EngineeringMechanics/experiment1/index.html"},
            {id: "Experiment 3", path: "../EngineeringMechanics/experiment1/index.html"}]    
    },
    { 
        labName: "Additive Manufacturing Lab", 
        experiments: [
            {id: "Effect of FDM process parameters on tensile strength of 3D printed specimen", path: "additive_manufacturing_lab/exp-fdm-tensile-print"},
            {id: "Effect of FDM process parameters on printing time of 3D printed specimens", path: "additive_manufacturing_lab/exp-print-time-experiment"},
            {id: "Effect of SLM process parameters on tensile strength of 3D printed specimen", path: "additive_manufacturing_lab/exp-slm-tensile"}]    
    },
    { 
        labName: "Dynamics of Machine II", 
        experiments: [
            {id: "Compound Gear Train", path: "dynamics_of_machine_two/exp-compound-gear-train"},
            {id: "Reverted Gear Train", path: "dynamics_of_machine_two/exp-reverted-gear-train"},
            {id: "Epicyclic Gear Train", path: "dynamics_of_machine_two/exp-epicyclic-gear-train"},
            {id: "Continuously Vriable Transmission", path: "dynamics_of_machine_two/exp-continuous-variable-transmission"},
        ]    
    },
    { 
        labName: "Engineering Mechanics II", 
        experiments: [
            {id: "Cart Moving on a Cyclic Track", path: "engineering_mechanics_two/exp-cart-moving-on-cyclic-track"},
            {id: "Beam Bending", path: "engineering_mechanics_two/exp-beam-bending"}]    
    },
]

let labList = "";
let experimentList = "";
labs.forEach((lab)=>{
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
    `
});

function getExperimentList(experiments){
    experiments.forEach(function(expt){
        experimentList+= `
        <button onclick="location.href='${expt.path}'"class="btn btn-outline-primary m-2 p-2">${expt.id}</button>
        `
    });
    return experimentList;
    
} 

document.getElementById("labCards").innerHTML = labList;