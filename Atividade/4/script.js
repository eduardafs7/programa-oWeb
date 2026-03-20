function desenharTriangulo() {
  const input = document.getElementById("linhas");
  const resultado = document.getElementById("resultado");
  const linhas = parseInt(input.value);

  if (input.value === "" || isNaN(linhas) || linhas <= 0) {
    resultado.innerHTML = "<p>Por favor, digite um número válido maior que zero.</p>";
    return;
  }

  let triangulo = "";

  for (let i = 1; i <= linhas; i++) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
      linha += "*";
    }
    console.log(linha);
    triangulo += linha + "\n";
  }

  resultado.innerHTML = "<pre>" + triangulo + "</pre>";
}