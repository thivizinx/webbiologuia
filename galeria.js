const imagens=[
  'imgs-vetor/biologiaa.png',
  'imgs-vetor/CIENCIA.jpg',
  'imgs-vetor/cienciastec.png',
  'imgs-vetor/download.jpg',
  'imgs-vetor/2.jpeg',
  'imgs-vetor/3.jpeg',
  'imgs-vetor/4.jpeg',
  'imgs-vetor/biologia.jpg'
];
let contador=0;
let botaoIR = document.querySelector('#ir');
let botaoVoltar = document.querySelector('#voltar');
let img = document.querySelector('#ciencia');

botaoIR.addEventListener('click',function(){
  contador++;
  if(contador>7){
  contador=0;}
  img.src=imagens[contador];
});

botaoVoltar.addEventListener('click',function(){
  contador--;
  if(contador<0){
  contador=7;}
    img.src=imagens[contador];
});
