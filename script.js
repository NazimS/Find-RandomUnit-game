
const unit = document.getElementById("unit");
const result = document.getElementById("result");
let refresh = document.getElementById("refresh");

let n = rand(1, 100);
let x = 1;

function find() {

        let s = +unit.value
        let msg = ''
        x++

        if (s < 1 || s > 100) msg = "check units only mentioned range";
        else if (s > n) msg = `${s} is bigger`
        else if (s < n) msg = `${s} is less`
        else msg = `Congratulations !! You've found the unit on the ${x} - th attempt`

        result.innerHTML = msg;
}

function reset() {
        document.getElementById("unit").value = null;
        let clear = '';
        result.innerHTML = clear;
}

function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
}