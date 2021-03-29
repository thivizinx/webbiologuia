
let botao = document.querySelector("#botao");
botao.addEventListener("click", function () {
    let palavrapesquisada = document.getElementById("txtBusca").value;
   
    switch (palavrapesquisada) {
        case "Citologia":
        case "Células":
        case "Biologia célular":
            window.location.href = "Citologia.html";
            break;
        case "botânica":
        case "Botânica":
        case "Plantas":
            window.location.href = "botanica.html";
            break;
        case "Ecologia":
        case "ecologia":
        case "Biosfera":
            window.location.href = "ecologia.html";
            break;
        case "Evolução":
        case "evolução":
        case "Teoria evolutiva":
            window.location.href = "evolucao.html";
            break;
        case "Fisiologia":
        case "fisiologia":
        case "FISIOLOGIA":
            window.location.href = "fisiologia.html";
            break;
        case "Histologia":
        case "histologia":
        case "HISTOLOGIA":
            window.location.href = "histologia.html";
            break;
        case "Microbiologia":
        case "microbiologia" :
        case "MICROBIOLOGIA" :
            window.location.href = "microbiologia.html";      
            break;
        case "zoologia":
        case "Zoologia":
        case "ZOOLOGIA":
            window.location.href = "zoologia.html";
            break;
        default:
            window.alert("Ops! Tente escrever de novo, nossa busca ainda é case sensitive :O, envie um email para os desenvolvedores e em breve adcionaremos seu conteúdo.");

   }


}
);
