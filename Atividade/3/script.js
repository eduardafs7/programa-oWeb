
function gerarTabuada() {
  const input = document.getElementById("numero");
  const resultado = document.getElementById("resultado");
  const numero = parseInt(input.value);

  if (input.value === "" || isNaN(numero)) {
    resultado.innerHTML = "<p class='erro'>Por favor, digite um número válido.</p>";
    return;
  }

  let tabela = `<h2>Tabuada do ${numero}</h2>`;
  tabela += "<table>";
  tabela += "<thead><tr><th>Operação</th><th>Resultado</th></tr></thead>";
  tabela += "<tbody>";

  for (let i = 1; i <= 10; i++) {
    tabela += `<tr>
      <td>${numero} x ${i}</td>
      <td>${numero * i}</td>
    </tr>`;
  }

  tabela += "</tbody></table>";
  resultado.innerHTML = tabela;
}