document.querySelector("#convidados").addEventListener("change", calcular);
document.querySelector("#tipo").addEventListener("change", calcular);
document.querySelector("#prototipo_sim").addEventListener("change", calcular);
document.querySelector("#prototipo_nao").addEventListener("change", calcular);
document.querySelector("#js").addEventListener("change", calcular);

function calcular() {
  //DOM = Document object model

  const convidados = document.querySelector("#convidados").value;
  const tipo = document.querySelector("#tipo").value;
  const prototipo_sim = document.querySelector("#prototipo_sim").checked;
  const jscrianca = document.querySelector("#js").checked;

  let valor = tipo == 2 ? convidados * 1000 + 2000 : convidados * 1000;

  if (prototipo_sim) valor += 500;

  if (jscrianca) {
    valor += 10000;
    let localmensagem = document.getElementById("vsf");
    let mensagem = document.createElement("div");
    mensagem.innerHTML = "<p>SE FUDEU</p>";
    localmensagem.appendChild(mensagem);
  }

  document.querySelector("#mensagem-valor").innerText = `R$ ${valor.toFixed(
    2
  )}`;

  console.log(convidados);
}

window.onload = calcular;
