
function threeDigit(numberOne){
    if (numberOne >= 100 && numberOne <= 999 ){
      console.log('Tiene 3 digitos');
    }else{
      console.log('No tiene 3 digitos');
    }
  }
  
  threeDigit(200);
  
  function twoDigit(a,b){
    if (a % b === 0 ){
      console.log('El primero es multiplo del segundo')
    } else{
      console.log('No es multiplo del segundo')
    }
  }
  
  twoDigit(20,10)
  
  
  function doubleNumber(a,b){
    if (a === 2*b){
      return a + ' es el doble ' + b;
    }else if (b === 2*a){
      return b + ' es el doble de ' + a;
    }else {
      return 'Ninguno es el doble del otro';
    }
  }
  
  resultDouble = doubleNumber(30,15);
  console.log(resultDouble);