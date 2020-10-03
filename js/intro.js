"use strict";

function max(num1, num2) {
    if(num1 > num2)
        return num1;
    else
        return num2;
}

function maxOfThree(num1, num2, num3) {
    return max(max(num1, num2), num3);
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

var sum = function (arr) {
    return arr.reduce((total, num) => total + num);
};

var multiply = function (arr) {
    return arr.reduce((total, num) => total * num);
};

function reverse(str) {
    return Array.from(str).reverse().join('');
}

function findLongestWord(arr) {
    return Array.from(arr).reduce((prev, curr) => {
        if(prev.length < curr.length) return curr;
    });
}

function filterLongWords(arr, i) {
    return Array.from(arr).filter(x => x.length >= i);
}
