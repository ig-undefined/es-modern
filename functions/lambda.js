/**
 * Created by Ihar_Cheliadzinski on 1/5/2016.
 */
'use strict';

let inc = x => x + 1;
let inc1 = function(x) { return x + 1 };
alert(inc(1)); // 2

let sum = (a, b) => a + b;
alert(sum(2, 3)); // 5

//let getTime = () => `${new Date().getHours()} : ${new Date().getMinutes()}`;
//alert(getTime());

let getTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${hours}:${minutes}`;
};

let arr = [5, 8, 3];
let sorted = arr.sort( (a, b) => a - b );
alert(sorted);

let group = {
    title: "Наш курс",
    students: ["Вася", "Петя", "Даша"],

    showList: function () {
        this.students.forEach(
            (student) => alert(`${this.title}: ${student}`)
        )
    }
};

group.showList();