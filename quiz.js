let setinhaquiz = document.getElementById("setinhaquiz");
let perguntaatual = 0;
let iniciar = document.querySelector("#iniciar");
let reiniciar = document.querySelector("#reiniciar");
let perguntas = [document.querySelector("#aba1"),document.querySelector("#aba2"),document.querySelector("#aba3"),document.querySelector("#aba4"),document.querySelector("#reiniciar")];
let pont = 0;
let ponttxt = document.querySelector("#pontuacao");
let ponttit = document.querySelector("#titulopontuacao");
iniciar.addEventListener('click', function(){
  iniciar.classList.toggle("escondido");
  perguntas[perguntaatual].classList.toggle("escondido");
  setinhaquiz.classList.remove("escondido");
});

setinhaquiz.addEventListener('click', function(){
  perguntas[perguntaatual].classList.toggle("escondido");
  perguntaatual++;
  perguntas[perguntaatual].classList.toggle("escondido");
  if(perguntaatual == 4){
    if("É apenas multicelular" == getRadioValor("p4")){
      pont++;
    }
    if(pont <= 2){
      ponttxt.classList.add("ruim");
      ponttxt.classList.remove("medio");
      ponttxt.classList.remove("bom");
      ponttxt.innerHTML = pont + "/ 4 <br> Estude mais !</br>";
    }
    else if(pont == 3){
      ponttxt.classList.add("medio");
      ponttxt.classList.remove("ruim");
      ponttxt.classList.remove("bom");
      ponttxt.innerHTML = pont + "/ 4 <br> Está quase lá !! </br>";
    }
    else{
      ponttxt.classList.add("bom");
      ponttxt.classList.remove("medio");
      ponttxt.classList.remove("ruim");
      ponttxt.innerHTML = pont + "/ 4 <br> Parabéns !!! </br>";
    }
    setinhaquiz.classList.toggle("escondido");
    ponttit.classList.toggle("escondido");
    ponttxt.classList.toggle("escondido");
    pont = 0;
  }
  if(perguntaatual == 1){
    if("Cycas" == getRadioValor("p1")){
      pont++;
    }
  }
  else if(perguntaatual == 2){
    if("Teoria de Lamarck" == getRadioValor("p2")){
      pont++;
    }
  }
  else if(perguntaatual == 3){
    if("Citoplasma" == getRadioValor("p3")){
      pont++;
    }
  }
});

reiniciar.addEventListener('click', function(){
  perguntaatual = 0;
  iniciar.classList.toggle("escondido");
  reiniciar.classList.toggle("escondido");
  ponttit.classList.toggle("escondido");
  ponttxt.classList.toggle("escondido");
});

function getRadioValor(name){
  let radios = document.getElementsByName(name);

  for(let i = 0; i < radios.length; i++){
   if(radios[i].checked){
    return radios[i].value;
   }
 }
}
