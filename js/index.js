const lampada = document.querySelector('#lampada')
const turnOn = document.querySelector('#ligar')
const turnOff = document.querySelector('#desligar')
const voltarAoNormal = document.querySelector('#voltarAoNormal')

turnOn.addEventListener('click', () => {
  if(!LampadaQuebrada()) {  //! lampada não esta quebrada, é porque tem -1 (não foi achada) então executa o bloco, se tiver a quebrada retorna 0 enão executa nada
    lampada.src = './assets/ligada.jpg'
    abilitaDesligar()
  } 
})

turnOff.addEventListener('click', () => {
  if(!LampadaQuebrada()) { //! lampada não esta quebrada, é porque tem -1 (não foi achada) então executa o bloco, se tiver a quebrada retorna 0 enão executa nada
    lampada.src = './assets/desligada.jpg'
    desabilitadoBotãoDesligar()
  }
})

function LampadaQuebrada() {
  return lampada.src.indexOf('quebrada') > -1   
}
//! > -1 ou seja 0, "por que tem a palavra quebrada"
//! se não tiver a palavra quebrada no src retorna -1
//! se tiver a palavra quebrada no src retorna 0 (zero)

lampada.addEventListener('mouseover', () => {
  if(!LampadaQuebrada()) { //! lampada não esta quebrada, é porque tem -1 (não foi achada) então executa o bloco, se tiver a quebrada retorna 0 enão executa nada
    lampada.src = './assets/ligada.jpg'
    abilitaDesligar()
  }
})

lampada.addEventListener('mouseleave', () => {
  if(!LampadaQuebrada()) { //! lampada não esta quebrada, é porque tem -1 (não foi achada) então executa o bloco, se tiver a quebrada retorna 0 enão executa nada
    lampada.src = './assets/desligada.jpg'
    desabilitadoBotãoDesligar()
  }
})

lampada.addEventListener('dblclick', () => {
  lampada.src = './assets/quebrada.jpg'
  alilitaVoltarAoNormal()
  desabilitadoBotãoDesligar()
  desabilitaBotaoLigar()
})

voltarAoNormal.addEventListener('click', () => {
  if(LampadaQuebrada()) { //! lampada está quebra é porque tem 0 (zero) então executa o bloco
    window.location.reload()
  }
})

function desabilitadoBotãoDesligar() {
  turnOff.setAttribute("disabled", "disabled")
}

function desabilitaBotaoLigar() {
  turnOn.setAttribute("disabled", "disabled")
}

function desabilitaVoltarAoNormal() {
  voltarAoNormal.setAttribute("disabled", "disabled")
}

function abilitaDesligar() {
  turnOff.removeAttribute("disabled", "disabled")
}

function alilitaVoltarAoNormal() {
  voltarAoNormal.removeAttribute("disabled", "disabled")
}

desabilitadoBotãoDesligar()
desabilitaVoltarAoNormal()