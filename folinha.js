const LARGURA_Folha = 100;
const ALTURA_Folha = 110;

let abelhinhas = [];


function Abelhinha(tempoAtrasoParaIniciar) {
  this.el = document.createElement('img');
  this.el.src = 'imagens/folhaandando.gif';
  this.el.style.width = LARGURA_Folha + 'px';
  this.el.style.position = 'fixed';

  this.el = document.body.appendChild(this.el);

  this.posiciona(tempoAtrasoParaIniciar);
}

Abelhinha.prototype.remove = function() {
  document.body.removeChild(this.el);
};

Abelhinha.prototype.posiciona = function(tempoAtrasoParaIniciar) {
  this.porcentagemTrajeto = 0;
  
  
  this.xInicial = 0 - LARGURA_Folha;
  this.xFinal = window.innerWidth;

  
  const UM_QUARTO_DA_ALTURA_DA_JANELA = window.innerHeight / 4;
  this.yInicial = 0 - ALTURA_Folha;
  this.yFinal = 0 - ALTURA_Folha;

  this.el.style.left = `${this.xInicial}px`;
  this.el.style.bottom = `${this.yInicial}px`;

  
  this.tempoTrajeto = 9000 + Math.random() * 9000;

  
  this.tempoAtrasoParaIniciar = tempoAtrasoParaIniciar || Math.random() * 7000;
};

Abelhinha.prototype.atualiza = function(delta) {
  if (this.tempoAtrasoParaIniciar >= 0) {
    this.tempoAtrasoParaIniciar -= delta;
    return;
  }
  this.porcentagemTrajeto += delta / this.tempoTrajeto;
  this.x = this.xInicial + this.porcentagemTrajeto * (this.xFinal - this.xInicial);
  this.y = this.yInicial + this.porcentagemTrajeto * (this.yFinal - this.yInicial) + Math.sin(this.porcentagemTrajeto* 4 * 3.14159) * (1.5*ALTURA_Folha);
  this.y = Math.max(this.y, 0);
  this.el.style.left = `${this.x}px`;
  this.el.style.bottom = `${this.y}px`;

  
  if (this.porcentagemTrajeto >= 1) {
    this.posiciona();
  }
};

let inicio = null;

function atualizaAbelhinhas(agora) {
  if (!inicio) inicio = agora;
  let delta = agora - inicio;
  for (abelhinha of abelhinhas) {
    abelhinha.atualiza(delta);
  }
  inicio = agora;
  window.requestAnimationFrame(atualizaAbelhinhas);
}
atualizaAbelhinhas(0);


// se pressionar '+' ou '-', adiciona nova ou remove uma
// Folha existente :P
document.addEventListener('keyup', function(e) {
  if (e.key === '+' || e.key === '=') {
    let novaAbelhinha = new Abelhinha(1);
    abelhinhas.push(novaAbelhinha);
  } else if (e.key === '-' || e.key === '_') {
    abelhinha = abelhinhas.pop();
    if (abelhinha) {
      abelhinha.remove();
    }
  }
});

document.body.style.overflowX = 'hidden';
abelhinhas.push(new Abelhinha());
abelhinhas.push(new Abelhinha());
abelhinhas.push(new Abelhinha());
