function equaçaoDoSegundoGrau() {
  var a = parseInt(document.getElementById('a').value)
  var b = parseInt(document.getElementById('b').value)
  var c = parseInt(document.getElementById('c').value)
  var result = document.getElementById('r')

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

var divisores = function() {
  var num1 = parseInt(document.getElementById('n1').value)
  var num2 = parseInt(document.getElementById('n2').value)
  var r = document.getElementById('divisores')
  
  var obj = Object.create({
    num1: new Array,
    num2: new Array,
    dividir: function() {
      for(let i = num1; i > 0; i--) {
        if(num1 % i ===  0) {
          this.num1.push(num1 / i)
        }
        else {
          continue
        }
      }
        
       for(let i = num2; i > 0; i--) {
        if(num2 % i === 0) {
          this.num2.push(num2 / i)
        }
        else {
          continue
        }
       }
    },
    comparar: function() {
      var r = []
      let tam = this.num1.length > this.num2.length? this.num1.length : this.num2.length 
      for(let i = 0; i < tam; i++) {
        for(let j = 0; j < tam; j++) {
          if(
        }
      }
    }
  })
}
