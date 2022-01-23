
import MultiplicatorUnit from './MultiplicatorUnit.js';

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const resultElem = document.getElementById('result');
const triesElem = document.getElementById('tries');
var multiplicator = new MultiplicatorUnit();

window.runMultiplicator = function () {
  var a = input1.value;
  var b = input2.value;
  var result = multiplicator.reliableMultiply(a, b);
  resultElem.innerHTML = result;
  triesElem.innerHTML = 'Took ' + multiplicator.tries + ' retries to succeed (see code)';
}
