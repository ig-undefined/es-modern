/**
 * Created by Ihar_Cheliadzinski on 1/5/2016.
 */
'use strict';

function showMenu(title = "Без заголовка", width = 100, height = 200) {
    alert(`${title} ${width} ${height}`);
}
showMenu("Меню"); // Меню 100 200

function showMenu1(title = "Заголовок", width = 100, height = 200) {
    alert(`title=${title} width=${width} height=${height}`);
}
showMenu(undefined, null); // title=Заголовок width=null height=200

function sayHi(who = getCurrentUser().toUpperCase()) {
    alert(`Привет, ${who}!`);
}
function getCurrentUser() {
    return "Вася";
}
sayHi(); // Привет, ВАСЯ!