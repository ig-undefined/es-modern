/**
 * Created by Ihar_Cheliadzinski on 1/5/2016.
 */
'use strict';

function f() {} // f.name == "f"

let g = function g() {}; // g.name == "g"

alert(`${f.name} ${g.name}`); // f g