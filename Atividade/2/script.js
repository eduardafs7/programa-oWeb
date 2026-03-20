function jogar() {
  const opcoes = ["pedra", "papel", "tesoura"];

  const escolhaUsuario = document.getElementById("escolha").value.toLowerCase().trim();

  const resultado = document.getElementById("resultado");

  if (!opcoes.includes(escolhaUsuario)) {
    resultado.innerHTML = "<p>Escolha inválida! Digite: pedra, papel ou tesoura.</p>";
    console.log("Escolha inválida! Digite: pedra, papel ou tesoura.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * 3);
  const escolhaComputador = opcoes[indiceAleatorio];

  let mensagem = "";

  if (escolhaUsuario === escolhaComputador) {
    mensagem = "Empate!";
  } else if (
    (escolhaUsuario === "pedra"   && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "papel"   && escolhaComputador === "pedra")   ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
  ) {
    mensagem = "Você venceu!";
  } else {
    mensagem = "Computador venceu!";
  }

  resultado.innerHTML = `
    <p>Você escolheu: <strong>${escolhaUsuario}</strong></p>
    <p>Computador escolheu: <strong>${escolhaComputador}</strong></p>
    <p>Resultado: <strong>${mensagem}</strong></p>
  `;
  console.log("--- Pedra, Papel ou Tesoura ---");
  console.log("Você escolheu: " + escolhaUsuario);
  console.log("Computador escolheu: " + escolhaComputador);
  console.log("Resultado: " + mensagem);
  console.log("-------------------------------");
}