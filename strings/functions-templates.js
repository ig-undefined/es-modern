/**
 * Created by Ihar_Cheliadzinski on 1/7/2016.
 */
'use strict';

function f(strings, ...values) {
    alert(JSON.stringify(strings)); // ["Sum of "," + "," =\n ","!"]
    alert(JSON.stringify(strings.raw)); // ["Sum of "," + "," =\\n ","!"]
    alert(JSON.stringify(values)); // [3,5,8]
}

let apples = 3;
let oranges = 5;

let string = f`Sum of ${apples} + ${oranges} =\n ${apples + oranges}`;

// --------------------------------------

function str(strings, ...values) {
    let str = "";
    for (let i = 0, length = values.length; i < length; i += 1) {
        str += strings[i];
        str += values[i];
    }
    str += strings[strings.length - 1];
    return str;
}

alert(str`Sum of ${apples} + ${oranges} = ${apples + oranges}!`); // Sum of 3 + 5 = 8!

// --------------------------------------

let messages = {
    "Hello, {0}!": "Привет, {0}!"
};

function i18n(strings, ...values) {
    let pattern = "";

    for (let i = 0, length = values.length; i < length; i += 1) {
        pattern += strings[i] + '{' + i + '}';
    }
    pattern += strings[strings.length - 1];

    let translated = messages[pattern];

    return translated.replace(/\{(\d)\}/g, (s, num) => values[num]);
}

let name = "Вася";
alert(i18n`Hello, ${name}!`); // Привет, Вася!