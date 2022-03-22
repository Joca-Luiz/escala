/* Equation Type */
const $equation = document.getElementById("equation");

const $scale = document.getElementById("scale");
const $draw = document.getElementById("draw");
const $real = document.getElementById("real");

var equationType = 1;

$equation.addEventListener('change', e => {
    switch (e.target.value) {
        case "Escala": 
            equationType = 1;
            $scale.disabled = true;
            $draw.disabled = false;
            $real.disabled = false;
            break;
        case "Real":
            equationType = 2;
            $scale.disabled = false;
            $draw.disabled = false;
            $real.disabled = true;
            break; 
        case "Desenho":
            equationType = 3;
            $scale.disabled = false;
            $draw.disabled = true;
            $real.disabled = false;
            break;
    }
});

/* Formating units */
const $unit1 = document.getElementById("unit1");
const $unit2 = document.getElementById("unit2");

const formatDraw = d => {
    if ($unit1.value == "cm") {
        return d;
    } else if ($unit1.value == "m") {
        return d * Math.pow(10, 2);
    } else if ($unit1.value == "km") {
        return d * Math.pow(10, 5);
    }
}

const formatReal = r => {
    if ($unit2.value == "cm") {
        return r;
    } else if ($unit2.value == "m") {
        return r * Math.pow(10, 2);
    } else if ($unit2.value == "km") {
        return r * Math.pow(10, 5);
    }
}

/* Calc */
const $button = document.querySelector("form .division input[type=button]");
const $form = document.querySelector("form");

var scale;
var draw;
var real;

$button.addEventListener('click', () => {
    const $div = document.createElement('div');
    $div.className = "result";

    scale = $scale.value;
    draw = formatDraw($draw.value);
    real = formatReal($real.value);
    $div.innerText = scaleEquation();
    
    if (document.querySelector("form .result")) {
        document.querySelector("form .result").remove();
    }

    $form.appendChild($div);
});

const scaleEquation = () => {
    if (equationType == 1) {
        return `
                1/E = ${draw}/${real}
                ${draw}E = ${real}
                E = ${real}/${draw}
                E = ${real/draw} cm
        `;
    } else if (equationType == 2) {
        return `
                1/${scale} = ${draw}/R
                R = ${scale}*${draw}
                R = ${scale*draw} cm
        `;
    } else if (equationType == 3) {
        return `
                1/${scale} = d/${real}
                ${scale}d = ${real}
                d = ${real}/${scale}
                d = ${real/scale} cm
        `;
    }
} 