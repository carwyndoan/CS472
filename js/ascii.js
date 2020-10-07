var timer = null;
var interval = 250;//ms
var i = 0;
var arr;
var isRunning = false;

function start() {
    if (timer === null) {
        let animation = document.getElementById("animation").value;
        arr = ANIMATIONS[animation].split("=====\n");
        i = 0;
        if (arr.length > 0) {
            isRunning = true;
            timer = setInterval(animate, interval);
            document.getElementById("start").setAttribute("disabled", "disabled");
            document.getElementById("stop").removeAttribute("disabled");
            document.getElementById("animation").setAttribute("disabled", "disabled");
        }
    }
}

function stop() {
    clearInterval(timer);
    timer = null;
    isRunning = false;
    document.getElementById("stop").setAttribute("disabled", "disabled");
    document.getElementById("start").removeAttribute("disabled");
    document.getElementById("animation").removeAttribute("disabled");
}

function animate() {
    document.getElementById("text-area").value = arr[i];
    if (i === arr.length - 1)
        i = 0;
    else
        i++;
}

function changeAnimation() {
    if (isRunning) {
        stop();
        start();
    }
}

function changeFont() {
    let fontsize = document.getElementById("fontsize").value;
    switch (fontsize) {
        case "Tiny":
            fontsize = 7;
            break;
        case "Small":
            fontsize = 10;
            break;
        case "Medium":
            fontsize = 12;
            break;
        case "Large":
            fontsize = 16;
            break;
        case "Extra Large":
            fontsize = 24;
            break;
        case "XXL":
            fontsize = 32;
            break;
    }
    document.getElementById("text-area").style.fontSize = fontsize + "pt";
    if (isRunning) {
        stop();
        start();
    }
}

function boost() {
    if (document.getElementById("turbo").checked === true)
        interval = 50;
    else
        interval = 250;
    if (isRunning) {
        stop();
        start();
    }
}
