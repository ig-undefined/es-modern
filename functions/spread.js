/**
 * Created by Ihar_Cheliadzinski on 1/5/2016.
 */
'use strict';

function showName(firstName, lastName, ...rest) {
    alert(`${firstName} ${lastName} - ${rest}`);
}
showName("Юлий", "Цезарь", "Император", "Рима"); // Юлий Цезарь - Император,Рима

let numbers = [2, 3, 15];
let max = Math.max(...numbers);

alert( max ); // 15