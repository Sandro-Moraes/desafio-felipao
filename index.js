// Variáveis do Sistema
let nomeHeroi = "Fulaninho" //nome do herói
let xpHeroi = 1000 // xp do herói
let mensagemHeroi = "O Herói de nome " // anuncia o nome do herói
let nivelHeroi = " está no nível de " // anuncia o nível do herói
let texto = (mensagemHeroi + nomeHeroi + nivelHeroi) // texto visível

// Estrutura de decisão (verifica xp do herói e classifica de acordo com os níveis)
if (xpHeroi <= 1000){
    console.log(texto + "Ferro")
}
 else if ((xpHeroi >= 1001) && (xpHeroi <= 2000)) {
    console.log(texto + "Bronze")
}
 else if ((xpHeroi >= 2001) && (xpHeroi <= 6000)) {
    console.log(texto + "Prata")
 }
 else if ((xpHeroi >= 6001) && (xpHeroi <= 7000)) {
    console.log(texto + "Ouro")
 }
 else if ((xpHeroi >= 7001) && (xpHeroi <= 8000)) {
    console.log(texto + "Platina")
}
 else if ((xpHeroi >= 8001) && (xpHeroi <= 9000)) {
    console.log(texto + "Ascendente")
}
 else if ((xpHeroi >= 9001) && (xpHeroi <= 10000)) {
    console.log(texto + "Imortal")
}
else if (xpHeroi >= 10001) {
    console.log(texto + "Radiante")
}
