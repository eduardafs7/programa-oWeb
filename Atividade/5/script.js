function calcularSerie() {
  const input = document.getElementById("termos");
  const resultado = document.getElementById("resultado");
  const n = parseInt(input.value);

  if (input.value === "" || isNaN(n) || n <= 0) {
    resultado.innerHTML = "<p>Por favor, digite um número válido maior que zero.</p>";
    return;
  }

  let soma = 0;
  let termo = 0;
  let serie = [];

  for (let i = 1; i <= n; i++) {
    termo = termo * 10 + 1;
    soma += termo;
    serie.push(termo);
  }

  const expressao = serie.join(" + ");
  const somaFormatada = soma.toLocaleString("pt-BR");

  resultado.innerHTML = `
    <p>${expressao}</p>
    <p>A soma é: <strong>${somaFormatada}</strong></p>
  `;

  console.log(expressao);
  console.log("A soma é: " + somaFormatada);
}