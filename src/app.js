/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  document.getElementById("excuse").innerHTML = `${getArrayRandomElement(
    who
  )} ${getArrayRandomElement(action)} ${getArrayRandomElement(
    what
  )} ${getArrayRandomElement(when)}`;
};
function getArrayRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
