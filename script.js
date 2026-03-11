var numeroAleatorio = Math.floor(Math.random() * 20) + 1;
function verificar(){
    var palpite = document.getElementById("palpite").value;

    if (palpite == numeroAleatorio) {
        document.getElementById("mensagem").innerHTML = "Parabens! Você acertou!";
        document.getElementById("palpite").disabled = true;
    } else if (palpite > numeroAleatorio) {
        document.getElementById("mensagem").innerHTML = "Tente um número menor";
    } else {
        document.getElementById("mensagem").innerHTML = "Tente um número maior";
    }


}