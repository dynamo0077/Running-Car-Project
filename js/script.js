setInterval(run, 100);
var m = 0;
var run;

function start() {
    y = setInterval(run, 100);

    function run() {
        // m += 5;
        // var x = document.getElementById("img");
        // x.style.marginLeft = m + 'px';

        if (m == 1200) {
            clearInterval(x);
            m = 0;
        } else {
            m += 5;
            var x = document.getElementById("img");
            x.style.marginLeft = m + "px";
        }
    }
}

function stop() {
    clearInterval(y);
}

// setInterval(run, 100);
// m = 0;

// function run() {
//     m += 5;
//     var x = document.getElementById("img");
//     x.style.marginLeft = m + 'px';
// }
