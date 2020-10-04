"use strict";
function decorateText() {
    var text = document.getElementById('text');
    if(text.style.fontSize && parseInt(text.style.fontSize) < 30)
        text.style.fontSize = (parseInt(text.style.fontSize) + 2) + "pt";
    else {
        text.style.fontSize = "12pt";
    }
}

function bling() {
    var text = document.getElementById('text');
    var chk = document.getElementById('chk');
    if(chk.checked) {
        text.className = "bling";
        document.body.className = "bodybling";
    }
    else {
        text.attributes.removeNamedItem('class');
        document.body.attributes.removeNamedItem('bodybling');
    }
}

function pigLatin() {
    var text = document.getElementById('text').value;
    var arr = text.split(" ");
    arr = Array.from(arr).map(x => {
        if(isVowel(x.charAt(0))) {
            return x + "ay";
        }
        else {
            return x.slice(1) + x.charAt(0) + "ay";
        }
    });
    document.getElementById('text').value = Array.from(arr).join(" ");
}

function malkovitch() {
    var text = document.getElementById('text').value;
    var arr = text.split(" ");
    arr = Array.from(arr).map(x => {
        if(x.length >= 5) {
            return "Malkovich";
        }
        else
            return x;
    });
    document.getElementById('text').value = Array.from(arr).join(" ");
}

function isVowel(char) {
    let Vowels = ['A', 'E', 'I', 'O', 'U'];
    if (char.length > 1 || char.length === 0) {
        return false;
    }
    else {
        return Vowels.indexOf(char.toUpperCase()) >= 0;
    }
}