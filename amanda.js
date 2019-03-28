function equaçaoDoSegundoGrau() {
  var a = parseInt(document.getElementById('a').value)
  var b = parseInt(document.getElementById('b').value)
  var c = parseInt(document.getElementById('c').value)
  var result = document.getElementById('result')

  var delta = Math.pow(b, 2) - 4 * a * c

  if(delta === 0) {
      result.textContent = 'Apenas uma raiz real ' + ((-b) / (2 * a))
  }
  else if(delta < 0) {
    result.textContent = 'Nao existe raiz real'
  }
  else {
    result.textContent = 'A equação possui apenas uma raiz real + "x =" (-b) / 2 * a)'
  }
  else {
    result.textContent = "x1 = " + (((-b) + Math.pow(delta, 0.5)) / (2 * a)) + ' x2 = ' + (((-b) - Math.pow(delta, 0.5)) / (2 * a))
  }
}

function soma(){
  var n1 = parseInt(document.getElementById('n1').value)
  var n2 = parseInt(document.getElementById('n2').value)
  document.getElementById("result").textContent = n1 + n2
}

function divisores() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let result = document.getElementById("divisores");

  let num1 = [];
 for(let i = n1; i > 0; i--) {
   if(!(n1 % i)) {
     num1.push(n1 / i);
   }
 }

 let num2 = [];
 for(let i = n2; i > 0; i--) {
   if(!(n2 % i)) {
     num2.push(n2 / i);
   }
 }

 let r = [];
 let size = num1.length > num2.length? num1.length : num2.length;
 for(let i = 0; i < size; i++) {
   for(let j = 0; j < size; j++) {
     if(num1[j] == num2[i]) {
       r.push(num1[j]);
     }
   }
 }
