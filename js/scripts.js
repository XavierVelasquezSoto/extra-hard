//1 - Escribe una función que reciba un número y te diga si tiene exactamente 3 dígitos.


/* function threeDigit(numberOne) {
  if (numberOne >= 100 && numberOne <= 999) {
    return 'Tiene 3 dígitos';
  } else {
    return 'No tiene 3 dígitos';
  }
}

const resultThree = threeDigit(200);
console.log(resultThree); */

const oneHundred = hundred => {
  if(hundred >= 100 && hundred <= 999){
    return `Tiene 3 digitos`
  }
    return `No tiene 3 digitos`
}
const resultOneHundred = oneHundred(875)
console.log(resultOneHundred)


//2- Escribe una función que reciba dos números y verifique si el primero es múltiplo del segundo.

/* function twoDigit(a, b) {
  if (a % b === 0) {
    return 'El primero es multiplo del segundo';
  } else {
    return 'No es multiplo del segundo';
  }
}

const resultTwo = twoDigit(12, 4);
console.log(resultTwo); */

const check = (verify1, verify2) => {
  const checkVerify = verify1 % verify2 === 0;
  
  if(checkVerify){
    return `El primero es multiplo del segundo`
  }
    return `No es multiplo del segundo`;
}
resultCheck = check(22,11);
console.log(resultCheck);

//3 - Escribe una función que reciba dos números y verifique si uno es el doble del otro.

/* function doubleNumber(a, b) {
  if (a === 2 * b) {
    return a + ' es el doble ' + b;
  } else if (b === 2 * a) {
    return b + ' es el doble de ' + a;
  } else {
    return 'Ninguno es el doble del otro';
  }
}

const resultDouble = doubleNumber(30, 15);
console.log(resultDouble); */

const doubleVerify = (num1, num2) => {
  if(num1 === 2 * num2){
    return `${num1} es el doble de ${num2}`;
  }else if(num2 === 2 * num1){
    return `${num2} es el doble de ${num1}`;
  }
    return `Ninguno es el doble del otro`  
}
const resultDoubleVerify = doubleVerify(36,18);
console.log(resultDoubleVerify);

//4 - Escribe una función que reciba tres números y los ordene de mayor a menor


const threeNumbers = (numberA, numberB, numberC) =>{
  if (numberA >= numberB && numberA >= numberC) {
    console.log('Es mayor ' + numberA);
  } else if (numberB >= numberC) {
    console.log('Es mayor ' + numberB)
  } else{
    console.log('Es mayor ' + numberC)
  }
  if (numberB >= numberA && numberB >= numberA) {
    console.log('Es mayor ' + numberA);
  } else if (numberB >= numberC) {
    console.log('Es mayor ' + numberB)
  } else{
    console.log('Es mayor ' + numberC)
  }

  if (numberC >= numberB && numberC >= numberA) {
    console.log('Es mayor ' + numberA);
  } else if (numberB >= numberC) {
    console.log('Es mayor ' + numberB)
  } else{
    console.log('Es mayor ' + numberC)
  }


}
threeNumbers(1, 2, 3);
threeNumbers(1, 3, 2);
threeNumbers(2, 1, 3);
threeNumbers(2, 3, 1);
threeNumbers(3, 1, 2);
threeNumbers(3, 2, 1);

/* function abcColum(numberA, numberB, numberC) {
  if (numberA >= numberB && a >= numberC) {
    console.log('Es mayor ' + a);
  } else if (numberB > numberA && b > numberC) {
    console.log('Es mayor ' + b)
  } else if(numberC > numberA && numberC > b){
    console.log('Es mayor ' + numberC)
  }

}
abcColum(1, 2, 3); */

