var parola = prompt("inserisci una parola")
var parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
}

function invertiParola(str){
  var parolaInversa = '';

  var i = str.length - 1;

  while (i >= 0) {
    parolaInversa += str[i];
    i--;
  }

  return parolaInversa;
}