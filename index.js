// Variáveis do Sistema
let nomeHeroi = "Fulaninho" //nome do herói
let xpHeroi = 1000 // xp do herói
let mensagemHeroi = "O Herói de nome " // anuncia o nome do herói
let nivelHeroi = " está no nível de " // anuncia o nível do herói

// Estrutura de decisão (verifica xp do herói e classifica de acordo com os níveis)
if (xpHeroi<1000){
    console.log(mensagemHeroi + nomeHeroi + nivelHeroi + "Ferro")
}
 else if (1001<=xpHeroi<=2000) {
    console.log(mensagemHeroi + nomeHeroi + nivelHeroi + "Bronze")
}
 else if (2001<=xpHeroi<=5000){
    console.log(mensagemHeroi + nomeHeroi + nivelHeroi + "Prata")
 }
 else if (6001<=xpHeroi<=7000) {
    console.log(mensagemHeroi + nomeHeroi + nivelHeroi + "Ouro")
 }
 else if (7001<=xpHeroi<=8000) {
    console.log(mensagemHeroi + nomeHeroi + nivelHeroi + "Platina")
}
 else if (8001<=xpHeroi<=9000) {
    console.log(mensagemHeroi + nomeHeroi + nivelHeroi + "Ascendente")
}
 else if (9001<=xpHeroi<=10000) {
    console.log(mensagemHeroi + nomeHeroi + nivelHeroi + "Imortal")
}
else if (xpHeroi>=10001) {
    console.log(mensagemHeroi + nomeHeroi + nivelHeroi + "Radiante")
}