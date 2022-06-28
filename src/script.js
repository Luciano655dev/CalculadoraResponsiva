// pegar o elemento do visor
var visor = document.getElementById("visor");

// Adiciona teclas ao visor
function addNum(key) { visor.value = visor.value + key }

// limpa o visor
function clean() { visor.value = "" }

// calcula o resultado
function calc() { visor.value = eval(visor.value) }