const unit = document.getElementById("unit");
const result = document.getElementById("result");
let refresh = document.getElementById("refresh");

let n = rand(1, 100);
let x = 1;

function find() {

    let s = +unit.value
    let msg = ''
    x++

    if (s > n) msg = 'boyukdur'
    else if (s < n) msg = 'kicikdir'
    else msg = `Tapdin ${x}-ci cehdden`

    result.innerHTML = msg;
}

function reset() {
    document.getElementById("unit").value = null;
    document.getElementById("result").innerHTML.value = null;
   
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}