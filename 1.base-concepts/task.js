"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2-4*a*c
  let x1, x2;

  if (D < 0) {
    console.log("корней нет")
  }
  else if (D === 0) [
    x1 = -b/(2*a)
    console.log("один корень")
  ]
  else if (D > 0) {
    x1 = (-b + Math.sqrt(D) )/(2*a);
    x2 = (-b - Math.sqrt(D) )/(2*a);
    console.log("два корня")
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  Let P = (percent / 100) / 12;
  Let S = amount - contribution;
  Let n = countMonths;
  Let payment = S * (P + (P / (((1 + P)^n) - 1)))
}