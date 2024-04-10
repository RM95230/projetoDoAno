//Tratamento de Eventos
document.querySelector("#pessoas").addEventListener("change",calcular)
document.querySelector("#horas").addEventListener("change",calcular)
document.querySelector("#trezentos").addEventListener("change",calcular)
document.querySelector("#quatrocentos").addEventListener("change",calcular)
document.querySelector("#seicentos").addEventListener("change",calcular)

document.querySelector("#tempo").addEventListener("input", function() {
    const tempo = document.querySelector("#tempo").value
    document.querySelector("label[for=tempo]").innerText = "Tempo: " + tempo + " horas"
    calcular()
})


function calcular(){

  //DOM - Document Object Model
  const qtdeDePessoas =  document.querySelector("#pessoas").value

  let valor = 200 + qtdeDePessoas * 100

  const horas =  document.querySelector("#horas").value
  if(horas == 2) valor += 100
  if(horas == 3) valor += 500

  const g300 =  document.querySelector("#trezentos").checked
  if (g300) valor *= 1

  const g450 =  document.querySelector("#quatrocentos").checked
  if (g450) valor *= 1.5

  const g600 =  document.querySelector("#seicentos").checked
  if (g600) valor *= 2

  document.querySelector("#valor").innerText = `R$ ${valor.toFixed(
    2
  )}`;

  console.log(convidados);
}

window.onload = calcular;
