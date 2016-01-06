/**
 * Created by Ihar_Cheliadzinski on 1/5/2016.
 */
'use strict';

let options = {
    title: 'Меню',
    width: 100,
    height: 200
};
function showMenu({ title, width, height }) {
    alert(`${title} ${width} ${height}`); // Меню 100 200
}
showMenu(options);

let options1 = {
    title: "Меню"
};

function showMenu1({title="Заголовок", width: w = 100, height: h = 200}) {
    alert(`${title} ${w} ${h}`);
}
showMenu1(options); // Меню 100 200

function showMenu2({title="Заголовок", width:w=100, height:h=200} = {}) {
    alert(`${title} ${w} ${h}`);
}

showMenu2(); // Заголовок 100 200