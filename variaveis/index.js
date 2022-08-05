const nome = prompt('Qual é seu nome?')
const anos = prompt('Quantos anos voce tem?')
const lingaguem = prompt('Qual lingaguem de programação voce está estudando?')

alert(`Ola ${nome}, voce tem ${anos} e já está aprendendo ${lingaguem}`)

const estudar = prompt(`Voce gosta de estudar ${lingaguem}? Digite 1 para Sim e 2 para Não`)

if (estudar == 1) {
  alert('Muito bom! Continue estudando e você terá muito sucesso.')
}

if (estudar == 2) {
  alert('Ahh que pena... Já tentou aprender outras linguagens?')
}